import { Badge } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-xl shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-bold text-xl uppercase'>{job?.company?.name}</h1>
                <p className='text-sm'>India</p>
            </div>
            <div>
                <h1 className='font-semibold text-lg capitalize'>{job?.title}</h1>
                <p className='capitalize'>{job?.description}</p>
            </div>
            <div className=' mt-2 flex space-x-8'>
                <div className='flex items-center space-x-1'>
                    <Badge className='text-blue-500' />
                    <span className='text-blue-500 font-bold'>{job?.position} Position</span>
                </div>
                <div className='flex items-center space-x-1'>
                    <Badge className='text-blue-500' />
                    <span className='text-blue-500 font-bold'>{job?.jobType}</span>
                </div>
                <div className='flex items-center space-x-1'>
                    <Badge className='text-blue-500' />
                    <span className='text-blue-500 font-bold'>{job?.salary} LPA</span>
                </div>
            </div>
        </div>
    )
}

export default LatestJobCards