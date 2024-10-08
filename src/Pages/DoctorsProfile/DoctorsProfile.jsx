
import doc1 from '../../assets/doc1.png';

import bg from '../../assets/doctorProfilebg.png'

import React from 'react';


import { Outlet } from 'react-router-dom';

import DoctorsCard from '../../Components/DoctorsCard/DoctorsCard';
import DocCard from './DocCard/DocCard';
import Tabs from './Tabs/Tabs';
import Slider from './DocCard/DocCard';

const DoctorsProfile = () => {
    return (

        <div className=''>

            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '40px 130px ',
                }}
                className=' max-w-screen-2xl  py-36 px-28'>


                <div className=' text-left  text-[36px] m-0 p-0 font-semibold' style={{ maxWidth: '1127px' }}>
                    <h2>Doctor' Profile</h2>

                </div>



            </div>
            <div className='bg-[#F3F3F3] p-24'>
                <Slider></Slider>

                <div className='bg-white ml-4 mt-24 max-w-content-box'>
                    <Tabs></Tabs>
                </div>
            </div>
            {/* <div className='bg-white mx-auto max-w-content-box'><h2>fvh</h2></div> */}
        </div>

    );
};

export default DoctorsProfile;