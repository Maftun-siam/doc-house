import React from 'react';

import { Outlet } from 'react-router-dom';
import bg from '../../assets/doctorProfilebg.png'
import DoctorsCard from '../../Components/DoctorsCard/DoctorsCard';
import DocCard from './DocCard/DocCard';
const DoctorsProfile = () => {
    return (

        <div>

            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '40px 130px ',
                }}
                className='bg-[#07332F]  max-w-screen-2xl  py-36 px-28'>


                <div className=' text-left text-[36px] m-0 p-0 font-semibold' style={{ maxWidth: '1127px' }}>
                    <h2>Doctor's Profile</h2>
                </div>

               
            </div>
            <div>
                 <DocCard></DocCard>
            </div>
        </div>

    );
};

export default DoctorsProfile;