import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar';
import Job from '../Jobs/Job';
import useGetAllJobs from '../../hooks/useGetAllJobs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '../../redux/jobSlice';

const Browse = () => {

    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [])
    return (
        <div className="pt-28">
            <Navbar />
            <div className='max-w-7xl mx-32 mt-5 my-10'>
                <h1 className='text-xl'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse

