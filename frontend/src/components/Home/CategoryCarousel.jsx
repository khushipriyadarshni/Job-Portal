import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from '../ui/button';
import { setSearchedQuery } from '../../redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Artificial Intelligence"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-transparent'>
            <Carousel className="bg-transparent w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className=" md:basis-1/2 lg-basic-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className=" bg-transparent rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="bg-transparent" />
                <CarouselNext className="bg-transparent" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;