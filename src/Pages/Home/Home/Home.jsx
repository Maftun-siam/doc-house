import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import Info from '../Info/Info';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <OurServices></OurServices>
            <Info></Info>
            <ExpertDoctors></ExpertDoctors>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;