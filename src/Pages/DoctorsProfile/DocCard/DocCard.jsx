import React from 'react';

const DocCard = ({ name, post, rating, location, btn1, btn2,image}) => {
    return (
        <div className='bg-[#FFFFFF] flex p-10 max-w-content-box mx-auto'>
            <div>
                <img className='w-[350px]' src={image} alt="" />
            </div>
            <div className='text-black'>
                <h3 className=''>{name}</h3>
                <p>{post}</p>
                <p>{rating}</p>
                <p>{location}</p>
                {/* HEre will be a mini slider */}
                <button>{btn1}</button>
                <button>{btn2}</button>
            </div>
        </div>
    );
};

export default DocCard;