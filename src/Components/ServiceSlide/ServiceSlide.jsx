import React from 'react';
import serviceImg from "../../assets/serviceTeeth.png"
import serviceImg2 from "../../assets/cosmetic-smile-770x460.jpg"
import Tabs from "../Tabs/Tabs";
import 'react-tabs/style/react-tabs.css';
const ServiceSlide = () => {

  const tabs = [
    {
      label: "Cavity Protection",
      content: (
        <div>
          <img src={serviceImg} alt="" />
          <h2 className="text-2xl mt-4 text-black font-semibold mb-4">Electro  Gastrology Therapy</h2>
          <p className='text-black'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
          <br />
          <p className='text-black'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <button className="bg-orange-500 mt-6 text-white px-4 py-2 rounded">
            More Details
          </button>
        </div>
      ),
    },
    {
      label: "Cosmetic Dentistry",
      content: (
        <div>
          <img src={serviceImg2} alt="" />
          <h2 className="text-2xl text-black font-semibold mb-4">Cosmetic Dentistry</h2>
          <p className="mb-4 text-black">
            Details about Cosmetic Dentistry services will be displayed here.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            More Details
          </button>
        </div>
      ),
    },
    {
      label: "Oral Surgery",
      content: (
        <div>
          <img src={serviceImg} alt="" />
          

          <h2 className="text-2xl mt-4 text-black font-semibold mb-4">Electro  Gastrology Therapy</h2>
          <p className='text-black'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
          <br />
          <p className='text-black'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <button className="bg-orange-500 mt-6 text-white px-4 py-2 rounded">
            More Details
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ServiceSlide;