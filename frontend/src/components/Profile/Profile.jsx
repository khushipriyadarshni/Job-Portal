import React from 'react'
import { PenIcon } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../shared/Navbar'
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppliedJobTable from './AppliedJobTable '
import { Button } from '../ui/button'
import { useState } from 'react'
import UpdateProfileDialoge from './UpdateProfileDialoge'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '../../hooks/useGetAppliedJobs'

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open,setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);

    return (
        <div className="pt-28">
            <Navbar/>
            <div className='max-w-4xl mx-32 border border-gray-200 rounded-2xl my-5 p-8 mt-5'>
                <div className='flex justify-between'>
                    <div className="flex items-center gap-4">
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src= {user?.profile?.profilePhoto} alt="Profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right"><PenIcon/></Button>
                </div>
                <div className='gap-3 my-2'>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        {user?.email}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                        {user?.phoneNumber}
                    </p>
                </div>
                <div className="my-5">
                    <h1 className='font-bold text-lg'>Skills</h1>
                    <div className="flex items-center gap-3 my-2">
                        {
                           user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item,index) => <Badge key={index} >{item}</Badge>) : <span> Not applicable </span>
                        }
                    </div>
                </div>
                <div className="my-5">
                    <Label className='font-bold text-lg'>Resume</Label>
                    <div className="flex items-center gap-3 my-1">
                        {
                             isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>Not Applicable</span>
                        }
                    </div>
                </div>

            </div>
            <div className=" max-w-4xl mx-32 border border-gray-200 rounded-2xl my-5 p-8 mt-5">
                <h1 className='font-bold text-lg'>Applied Jobs</h1>
                <AppliedJobTable/>
            </div>
            <UpdateProfileDialoge open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile
