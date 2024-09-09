import React, { useEffect, useState } from 'react';
import DoctorsCard from '../../../Components/DoctorsCard/DoctorsCard';

const ExpertDoctors = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='max-w-screen-2xl'>
            <div style={{ maxWidth: '1127px' }} className='flex flex-col mx-auto'>
                <div>
                    <h2 className='text-black text-[36px] font-semibold'>Our Experts Doctors</h2>
                    <p className='text-black text-[16px]'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className='flex'>
                    {doctor.length > 0 ? (
                        doctor.map(item => item && <DoctorsCard key={item._id} item={item} />)
                    ) : (
                        <p>No doctors available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctors;
