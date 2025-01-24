import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '../../utils/constact';
import { toast } from 'sonner';
import axios from 'axios';
import { setUser } from '../../redux/authSlice';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.profile?.resume || ""
    });
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
        setOpen(false);
        console.log(input);
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white p-8">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-800 text-center">Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler} >
                        <div className="py-4 space-y-4">
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name:</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="number" className="text-sm font-medium text-gray-700">Number</Label>
                                <Input
                                    id="number"
                                    name="number"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="bio" className="text-sm font-medium text-gray-700">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter a short bio"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="skills" className="text-sm font-medium text-gray-700">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your skills (comma-separated)"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center'>
                                <Label htmlFor="file" className="text-sm font-medium text-gray-700">Resume</Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"

                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <DialogFooter>
                                {loading ? (
                                    <Button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold flex justify-center items-center">
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Please wait...
                                    </Button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </DialogFooter>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateProfileDialog;
