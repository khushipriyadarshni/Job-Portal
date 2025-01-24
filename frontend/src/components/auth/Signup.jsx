import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from '../ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { setLoading } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '../../utils/constact';

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
            toast.error("Please fill in all the required fields.");
            return;
        }

        if (input.role === "recruiter" || input.role === "student") {
            if (!input.file) {
                toast.error("Please upload a profile picture.");
                return;
            }
        }
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message || "Failed to register. Please try again.");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <h1><Navbar /></h1>
            <div className="flex justify-between items-center px-96 top-8 w-full z-30 pt-10">
                <div className="min-h-screen bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm flex flex-col items-center gap-y-6 pt-16 ">
                    <h2 className="text-center text-xl  font-extrabold text-gray-800 mb-6">
                        Create Your Account
                    </h2>
                    <form onSubmit={submitHandler} className="space-y-4">
                        <div className='space-y-2'>
                            <div >
                                <Label htmlFor="fullname" className="block text-md font-medium text-gray-700">
                                    Full Name
                                </Label>
                                <Input
                                    type="text"
                                    value={input.fullname}
                                    id="fullname"
                                    name="fullname"
                                    onChange={changeEventHandler}
                                    placeholder="Enter your full name"

                                />
                            </div>

                            <div>
                                <Label htmlFor="email" className="block text-md font-medium text-gray-700">
                                    Email Address
                                </Label>
                                <Input
                                    type="email"
                                    value={input.email}
                                    id="email"
                                    name="email"
                                    onChange={changeEventHandler}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <Label htmlFor="phoneNumber" className="block text-md font-medium text-gray-700">
                                    Phone Number
                                </Label>
                                <Input
                                    type="tel"
                                    value={input.phoneNumber}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    onChange={changeEventHandler}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <Label htmlFor="password" className="block text-md font-medium text-gray-700">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    value={input.password}
                                    id="password"
                                    name="password"
                                    onChange={changeEventHandler}
                                    placeholder="Create a password"
                                />
                            </div>

                            <div className="flex justify-between items-center my-5 space-x-4">
                                <RadioGroup className="flex items-center gap-4">
                                    <div className="flex items-center space-x-2">
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            id="r1"
                                            checked={input.role === "student"}
                                            onChange={changeEventHandler}
                                            className="cursor-pointer"
                                        />
                                        <Label htmlFor="r1" className="cursor-pointer">Student</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="recruiter"
                                            id="r2"
                                            checked={input.role === "recruiter"}
                                            onChange={changeEventHandler}
                                            className="cursor-pointer"
                                        />
                                        <Label htmlFor="r2" className="cursor-pointer">Recruiter</Label>
                                    </div>
                                </RadioGroup>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="profile" className="text-sm">Profile</Label>
                                    <Input
                                        id="profile"
                                        accept="image/*"
                                        type="file"
                                        onChange={changeFileHandler}
                                        className="cursor-pointer"
                                    />
                                </div>
                            </div>
                            {loading ? (
                                <Button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold flex justify-center items-center">
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Please wait...
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300"
                                >
                                    Sign up
                                </Button>
                            )}
                        </div>
                    </form>

                    <div className="text-center space-y-2">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="text-purple-600 hover:text-purple-700 font-semibold"
                            >
                                Login here
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup
