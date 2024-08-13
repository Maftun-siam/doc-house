import React from 'react';
import clock from '../../assets/clockIcon.png';
import location from '../../assets/locationIcon.png';
import phone from '../../assets/phoneIcon.png';
const InfoCard = () => {
    return (
        <div style={{ maxWidth: '1127px' }} className='flex space-x-4  mx-auto'>
            {/* card 1 */}
            <div className='flex h-[202px] items-center justify-center w-[364px] bg-[#07332F] rounded-lg hover:bg-[#F7A582]'>
                <div className=' justify-center items-center'>
                    <img className='pl-16' src={clock} alt="" />

                </div>
                <div className='w-2/3 text-left ml-2'>
                    <h3 className='text-[20px]'>Opening Hours</h3>
                    <p className='text-[14px] mt-2'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            {/* card 2 */}
            <div className='flex h-[202px] items-center justify-center w-[364px] bg-[#07332F] rounded-lg hover:bg-[#F7A582]'>
                <div className=' justify-center items-center'>
                    <img className='pl-16' src={location} alt="" />

                </div>
                <div className='w-2/3 text-left ml-2'>
                    <h3 className='text-[20px]'>Our Locations</h3>
                    <p className='text-[14px] mt-2'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            {/* Card 3 */}
            <div className='flex h-[202px] items-center justify-center w-[364px] bg-[#07332F] rounded-lg hover:bg-[#F7A582]'>
                <div className=' justify-center items-center'>
                    <img className='pl-16' src={phone} alt="" />

                </div>
                <div className='w-2/3 text-left ml-2'>
                    <h3 className='text-[20px]'>Opening Hours</h3>
                    <p className='text-[14px] mt-2'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;