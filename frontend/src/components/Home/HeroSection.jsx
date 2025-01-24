import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '../../redux/jobSlice';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <div className=" pt-10 px-96 py-4 text-center">
        <div className=" min-h-screen flex justify-center items-center">
            <div>
                <h1 className="px-4 py-2 text-4xl md:text-5xl font-bold leading-snug">
                    Search, Apply & <br />Get Your <span className="text-[#6A38C2]">Dream Job</span>
                </h1>
                <p className="mt-4 text-gray-600">
                    Connecting you to careers that feel like home. Start your journey now!
                </p>
                <div className="mt-4 flex w-full shadow-lg border border-gray-200 pl-3 pr-2 py-2 rounded-full items-center gap-3 mx-auto">
                    <input
                        type="text"
                        placeholder="Find your Dream Job"
                        aria-label="Search for jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent"
                    />
                    <Button onClick={searchJobHandler} className="bg-[#6A38C2] text-white px-4 py-2 rounded-full hover:bg-[#5a2ea8] transition">
                        <FaSearch/>
                    </Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroSection;