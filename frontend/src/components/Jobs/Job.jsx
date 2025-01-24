import React from "react";
import { Button } from "../ui/button";
import { FaBookmark, FaIdBadge } from "react-icons/fa";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate =useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
}
  return (
    <div className="border rounded-xl p-4 shadow-xl hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-500 text-sm">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button
          variant="outline"
          className="rounded-full p-2"
          size="icon"
          aria-label="Save Job"
        >
          <FaBookmark />
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={job?.company?.logo}
            alt="Company Logo"
          />
        </Avatar>
        <div>
          <h2 className="text-xl font-bold uppercase">{job?.company?.name}</h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div className="mb-3">
        <h1 className="font-semibold text-lg capitalize">{job?.title}</h1>
        <p className="text-sm text-gray-600 capitalize">
        {job?.description}
        </p>
      </div>

      <div className="mt-2 flex flex-wrap gap-4">
       
        <div className="flex items-center space-x-2">
          <FaIdBadge className="text-blue-500" />
          <span className="text-black">{job?.position} Positions</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaIdBadge className="text-blue-500" />
          <span className="text-black">{job?.jobType}</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaIdBadge className="text-blue-500" />
          <span className="text-black">{job?.salary}LPA</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
        <Button className='bg-[#7209b7]'>Save For Later</Button>
      </div>
      
    </div>
  );
};

export default Job;