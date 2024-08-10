import React from 'react';
import banner from '../../../assets/banner.png'
import bgOne from '../../../assets/bannerBg-2.png'
const Banner = () => {
    return (

        <div style={{backgroundImage:`url(${bgOne})`,backgroundRepeat:'no-repeat',backgroundPosition:'-5px 5px ',}} className='max-w-screen-2xl'>
            <div  className='flex justify-center items-center -mt-24 z-10 pt-[150px] bg-'>
                <div className='max-h-[800px] items-start flex flex-col'>
                    <h1 className='text-[65px] text-left leading-[75px] font-semibold text-white'>Your Best Medical <br></br>Help Center</h1>
                    <p className='text-[18px] mt-8 mb-8 text-left'>Lorem Ipsum is simply dummy text they are printing typesetting<br></br> has been the industry’s stardard.</p>
                    <button className='btn  text-white bg-[#F7A582]'>All Service</button>
                </div>

                <div>
                    <img src={banner} className=' mb-6 w-[600px] h-[513px] ml-4' alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;