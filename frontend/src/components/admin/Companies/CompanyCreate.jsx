import React, { useState } from 'react'
import Navbar from '../../shared/Navbar'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '../../../utils/constact'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../../redux/companySlice'


const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar/>
            <div className='max-w-4xl mx-auto my-28'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="JobHunt, Microsoft etc."
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                <Button variant="outline" onClick={() => navigate("/admin/companies")} className="rounded" >Cancel</Button>
                <Button onClick={registerNewCompany} className="btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Continue</Button> 
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate