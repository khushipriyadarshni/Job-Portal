import React, { useEffect, useState } from 'react'
import Navbar from '../../shared/Navbar';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import AdminJobsTable from './AdminJobsTable';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useGetAllAdminJobs from '../../../hooks/useGetAllAdminJobs';
import { setSearchJobByText } from '../../../redux/jobSlice';

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-28'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit"
            placeholder="Filter by name,role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")} className="btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">New Jobs</Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  )
}

export default AdminJobs