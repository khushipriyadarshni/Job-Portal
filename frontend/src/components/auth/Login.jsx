import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from '../ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { setLoading, setUser } from '../../redux/authSlice';
import { USER_API_END_POINT } from '../../utils/constact';


const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password || !input.role) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Failed to register. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
  return (
    <div>
      <h1><Navbar /></h1>
      <div className="flex  justify-between items-center px-96 top-8 w-full z-30 pt-10">
        <div className="bg-white p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300 w-full max-w-sm">
          <h2 className="text-center text-xl  font-extrabold text-gray-800 mb-6">
            Login Your Account
          </h2>
          <form onSubmit={submitHandler} className="space-y-4">
            <div className='space-y-2'>
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
                  Login
                </Button>
              )}
            </div>
          </form>
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                signup here
              </a>
            </p>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Login


