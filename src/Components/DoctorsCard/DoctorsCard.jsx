import React from 'react';
import minLoc from '../../assets/minLoc.png';
import minBox from '../../assets/minBox.png';
import minDoller from '../../assets/minDoller.png';
import ratingIcon from '../../assets/rating.png'; // Assuming you have an image for rating

const DoctorsCard = ({ item }) => {
    // Check if the item is defined before destructuring
    if (!item) {
        return null; // Return null to render nothing if item is undefined
    }
    // Destructure the item object to get the individual properties
    const { _id, name, post, image, location, availibity, price, rating } = item;

    return (
        <div className='border pt-[14px] rounded-lg mx-auto w-[364px] h-[559px] text-black text-left px-4 py-2 flex flex-col justify-center items-center'>
            <img src={image} alt={name} className='w-full h-auto' />
            <h3 className='text-[18px] mt-4 font-semibold'>{name}</h3>
            <p className='text-[14px] text-[#6C6B6B]'>{post}</p>

            {/* Display rating */}
            <div className='flex items-center mt-4'>
                <img src={ratingIcon} alt="Rating" className='w-4 h-4 mr-2' />
                <p className='text-[14px] text-[#6C6B6B]'>{rating} Stars</p>
            </div>

            <div className='divider my-4 w-full' />

            {/* Location */}
            <div className='flex items-center mb-2'>
                <img src={minLoc} alt="Location" className='w-4 h-4 mr-2' />
                <p className='text-[14px] text-[#6C6B6B]'>{location}</p>
            </div>

            {/* Availability */}
            <div className='flex items-center mb-2'>
                <img src={minBox} alt="Availability" className='w-4 h-4 mr-2' />
                <p className='text-[14px] text-[#6C6B6B]'>{availibity}</p>
            </div>

            {/* Price */}
            <div className='flex items-center'>
                <img src={minDoller} alt="Price" className='w-4 h-4 mr-2' />
                <p className='text-[14px] text-[#6C6B6B]'>${price} per session</p>
            </div>

            <button className='btn mt-6 hover:bg-[#F7A582] btn-outline block w-full'>View Profile</button>
        </div>
    );
};

export default DoctorsCard;
