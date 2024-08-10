import React from 'react';
import ServiceSlide from '../../../Components/ServiceSlide/ServiceSlide';
import serviceimg from '../../../assets/Service.png'
const OurServices = () => {
    return (
        <div className='bg-white '>
            <div className='flex justify-between space-x-4 mx-auto mt-8 pt-[131px]' style={{ maxWidth: '1127px' }}>
                <div className='w-1/2'>
                    <img src={serviceimg} className='h-[1053px] w-[588px] ' alt="" />
                </div>
                <div className='w-1/2  text-left '>
                    <h2 className='text-black pb-6 text-4xl '>Our Services</h2>
                    <p className='text-black pb-6'>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>
                    <ServiceSlide></ServiceSlide>
                </div>
            </div>
        </div>
    );
};

export default OurServices;