import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { FaIdBadge } from 'react-icons/fa';
import { Button } from '../ui/button';
import { useParams } from 'react-router-dom';
import { setSingleJob } from '../../redux/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '../../utils/constact';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {

    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
            console.log(res.data);
            
            if (res.data.success) {
                setIsApplied(true); 
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updatedSingleJob)); 
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);
    return (
        <div className="pt-28">
            <Navbar />
            <div className="mx-32">
                <h1 className="font-bold text-2xl mb-4 capitalize">{singleJob?.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                        <FaIdBadge className="text-blue-500" />
                        <span className="text-gray-700">{singleJob?.postion} Positions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaIdBadge className="text-blue-500" />
                        <span className="text-gray-700 capitalize">{singleJob?.jobType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaIdBadge className="text-blue-500" />
                        <span className="text-gray-700">{singleJob?.salary} LPA</span>
                    </div>
                </div>
                <h1 className='font-bold py-4'>Job Description</h1>
                <div>
                    <h1 className="font-semibold my-1">Role: <span className='pl-4 font-normal text-gray-800 capitalize'>{singleJob?.title}</span></h1>
                    <h1 className="font-semibold my-1">Location: <span className='pl-4 font-normal text-gray-800 capitalize'>{singleJob?.location}</span></h1>
                    <h1 className="font-semibold my-1">Description: <span className='pl-4 font-normal text-gray-800 capitalize'>{singleJob?.description}</span></h1>
                    <h1 className="font-semibold my-1">Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                    <h1 className="font-semibold my-1">salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
                    <h1 className="font-semibold my-1">Total Application: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                    <h1 className="font-semibold my-1">Posted date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
                </div>

                <div className="flex justify-end">
                    <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied}
                        className={`rounded-xl ${isApplied ? 'bg-green-400 cursor-not-allowed' : 'bg-slate-500 hover:bg-blue-700'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;

