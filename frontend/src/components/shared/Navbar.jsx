import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarImage } from "../ui/avatar";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constact';
import { setUser } from '../../redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {

    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className='flex justify-between items-center px-10 fixed top-8 w-full z-30 backdrop-blur-md'>
            <div>
                <h1 className='text-3xl font-bold'>
                    Nest<span className='text-[#F83002]'>Hire</span>
                </h1>
            </div>
            <div className='flex items-center space-x-4 text-xl font-bold'>
                <ul className='flex space-x-4'>
                    {
                        user && user.role === 'recruiter' ? (
                            <>
                                <li><Link to="/admin/companies" className='hover:underline'>Companies</Link></li>
                                <li><Link to="/admin/jobs" className='hover:underline'>Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" className='hover:underline'>Home</Link></li>
                                <li><Link to="/jobs" className='hover:underline'>Jobs</Link></li>
                                <li><Link to="/browse" className='hover:underline'>Browse</Link></li>
                            </>
                        )
                    }
                </ul>
                {!user ? (
                    <div className="flex items-center space-x-5">
                        <Link to="/login">
                            <Button className="btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
                                Signup
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="ml-4 cursor-pointer">
                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className='flex gap-4 space-y-2'>
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>{user?.fullname}</h4>
                                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-2">

                                {
                                    user && user.role === 'student' && (
                                        <Link to="/profile">
                                            <Button variant="link" className="text-blue-500 focus:outline-none flex items-center">
                                                <FaUser className="mr-2" />
                                                View Profile
                                            </Button>
                                        </Link>
                                    )
                                }
                                <Button
                                    onClick={logoutHandler}
                                    variant="link"
                                    className="text-blue-500 focus:outline-none flex items-center">

                                    <FaSignOutAlt className="mr-2" />
                                    Log Out
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>
    )
}

export default Navbar
