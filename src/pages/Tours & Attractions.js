import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdFlight,
  MdHotel,
  MdHolidayVillage,
  MdTrain,
  MdDirectionsBus,
  MdLocalTaxi,
  MdCardTravel,

} from 'react-icons/md';
import { BsBalloon } from 'react-icons/bs';
import { FaShip, FaRegCalendarAlt } from 'react-icons/fa';

import dotGrid from '../image/beach.jpg';

import delhi from '../image/delhi.jpg';
import bangalore from '../image/banglore.webp';
import mumbai from '../image/mumbai.jpg';
import hyderabad from '../image/hydrabad.jpg';
import goa from '../image/goa.jpg';
import chennai from '../image/chennai.jpg';
import ponducherry from '../image/ponducherry.jpg';
import jaipure from '../image/jaipure.jpg';
import pune from '../image/pune.jpg';
import vrindava from '../image/vrindava.jpg';
import kochi from '../image/kochi.webp';
import kolkata from '../image/kolkata.jpg';

import delhi1 from '../image/delhi2.webp';
import delhi2 from '../image/delhi1.jpg';
import delhi3 from '../image/delhi3.jpg';
import delhi4 from '../image/delhi4.jpg';

import dubai from '../image/dubai.jpg';
import bangkok from '../image/bangkok.jpg';
import abuDhabi from '../image/abudhabi.webp';
import bali from '../image/bali.jpg';
import pattaya from '../image/pattaya.jpg';
import sharjah from '../image/sharjah.webp';
import kualaLumpur from '../image/kuala lumpur.webp';
import phuket from '../image/phuket.jpg';
import singapore from '../image/singapore.webp';
import Fujairah from '../image/Fujairah.jpg';
import hochiminh from '../image/ho chi minh.jpg';
import doha from '../image/doha.jpg';
import kathmandu from '../image/kathmandu.jpg';
import ajman from '../image/ajman.jpg';
import hanoi from '../image/hanoi.jpg';
import tokyo from '../image/tokyo.jpg';
import krabi from '../image/krabi.jpg';
import donang from '../image/donang.jpg';
import muscat from '../image/muscat.jpg';
import pokhara from '../image/pokhara.jpg';

const tabs = [
  { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
  { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
  { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' }, 
  { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
  { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
  { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
  { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true },
  { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homeStay' },
  { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions', new: true, active: true },
];

const destinations = [
  {
    image: delhi,
    city: 'New Delhi and NCR',
    stays: '12,786 accommodations',
  },
  {
    image: bangalore,
    city: 'Bangalore',
    stays: '5,372 accommodations',
  },
  {
    image: mumbai,
    city: 'Mumbai',
    stays: '4,177 accommodations',
  },
  {
    image: hyderabad,
    city: 'Hyderabad',
    stays: '2,735 accommodations',
  },
  {
    image: goa,
    city: 'Goa',
    stays: '9,254 accommodations',
  },
  {
    image: chennai,
    city: 'Chennai',
    stays: '2,223 accommodations',
  },
  {
    image: jaipure,
    city: 'Jaipur',
    stays: '6,654 accommodations',
  },
  {
    image:ponducherry,
    city: 'Ponducherry',
    stays: '4,225 accommodations',
  },
  {
    image: vrindava,
    city: 'Vrindavan',
    stays: '9,254 accommodations',
  },
  {
    image: pune,
    city: 'Pune',
    stays: '1,256 accommodations',
  },
  {
    image: kochi,
    city: 'Kochi',
    stays: '3,245 accommodations',
  },
  {
    image: kolkata,
    city: 'Kolkata',
    stays: '2,754 accommodations',
  },

];

const data = {
  'New Delhi and NCR': [
    {
      image: delhi1,
      rating: 8.9,
      title: 'AIR By Ahuja Residences',
      location: 'Gurgaon, New Delhi and NCR',
      price: 'INR 6,356.99',
    },
    {
      image: delhi2,
      rating: 8.2,
      title: 'Cloud stay @41st floor',
      location: 'Noida, New Delhi and NCR',
      price: 'INR 3,326.47',
    },
    {
      image: delhi3,
      rating: 8.9,
      title: 'Sharang stays',
      location: 'Greater Noida, New Delhi and NCR',
      price: 'INR 1,654.1',
    },
    {
      image: delhi4,
      rating: 8.3,
      title: 'Wongdhen House',
      location: 'North Delhi, New Delhi and NCR',
      price: 'INR 1,959.25',
    },
  ],
  Bangalore: [],
  Mumbai: [],
  Hyderabad: [],
  Goa: [],
};

const ToursAndAttractions = () => {
  const [selected, setSelected] = useState('New Delhi and NCR');
  return (
     <>
    <div
      className="w-full min-h-[600px] bg-cover bg-center py-8 px-4 font-inter"
      style={{
        backgroundImage: `url(${dotGrid})`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-6xl mx-auto" style={{ paddingTop: '70px' }}>
        {/* Tabs */}
        <div className="bg-white rounded-t-xl px-6 py-4 flex flex-wrap justify-between shadow-md">
          {tabs.map((tab, idx) => (
            <Link to={tab.path || '#'} key={idx}>
              <div
                className={`flex flex-col items-center justify-center text-center px-2 py-2 relative w-[80px] ${
                  tab.active
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-800'
                }`}
              >
                {tab.icon}
                <span className="text-xs mt-1 text-center">{tab.label}</span>
                {tab.new && (
                  <span className="absolute -top-2 text-[10px] bg-pink-500 text-white px-1 rounded-sm">
                    new
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Search Panel */}
        <div className="bg-white rounded-b-xl shadow-md px-6 pb-8 space-y-4">
          <p className="text-center font-medium text-sm text-gray-600">
            Must-See Attractions. Unbeatable Prices. Exclusively for You!
          </p>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden">
            {/* Destination Input */}
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-[11px] font-semibold text-gray-500">
                SEARCH DESTINATION
              </p>
              <p className="text-4xl font-bold text-gray-500 mt-1">
                Where are you going?
              </p>
            </div>

            {/* Date Input */}
            <div className="flex-1 p-4">
              <p className="text-[11px] font-semibold text-gray-500 flex items-center justify-between">
                DATE OF ACTIVITY (OPTIONAL)
                <FaRegCalendarAlt className="ml-2" />
              </p>
              <p className="text-4xl font-bold text-gray-500 mt-1">Add a date</p>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg font-semibold px-8 py-2 rounded-full shadow-md hover:opacity-90 transition">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Top destinations in India
      </h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {destinations.map((item, index) => (
          <div key={index} className="min-w-[150px] sm:min-w-[180px]">
            <img
              src={item.image}
              alt={item.city}
              className="w-full h-[180px] object-cover rounded-2xl shadow-md"
            />
            <p className="text-center font-semibold mt-2">{item.city}</p>
            <p className="text-center text-sm text-gray-500">{item.stays}</p>
          </div>
        ))}
      </div>
    </section>
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Featured homes recommended for you
        </h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          See more ({selected}) properties →
        </a>
      </div>

      <div className="flex space-x-6 mt-6 overflow-x-auto scrollbar-hide">
        {Object.keys(data).map((city) => (
          <button
            key={city}
            onClick={() => setSelected(city)}
            className={`pb-2 text-sm font-medium ${
              selected === city ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {data[selected].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-[180px] object-cover" />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-2 py-0.5 rounded">
                {item.rating}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-blue-600 mt-1">{item.location}</p>
              <p className="text-xs text-gray-500">Per night before taxes and fees</p>
              <p className="text-red-600 text-sm font-semibold mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Popular destinations outside India
      </h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Destination Card */}
        {[  
          { image: dubai, city: 'Dubai', stays: '19,464 accommodations' },
          { image: bangkok, city: 'Bangkok', stays: '12,048 accommodations', link: true },
          { image: abuDhabi, city: 'Abu Dhabi', stays: '721 accommodations' },
          { image: bali, city: 'Bali', stays: '32,908 accommodations' },
          { image: pattaya, city: 'Pattaya', stays: '11,909 accommodations' },
          { image: sharjah, city: 'Sharjah', stays: '2,225 accommodations' },
          { image: kualaLumpur, city: 'Kuala Lumpur', stays: '789 accommodations' },
          { image: phuket, city: 'Phuket', stays: '998 accommodations' },
          { image: singapore, city: 'Singapore', stays: '689 accommodations' },
          { image: Fujairah, city: 'Fujairah', stays: '1,039 accommodations' },
          { image: hochiminh, city: 'Ho Chi Minh City', stays: '698 accommodations' },
          { image: doha, city: 'Doha', stays: '635 accommodations' },
          { image: kathmandu, city: 'Kathmandu', stays: '2,265 accommodations' },
          { image: ajman, city: 'Ajman', stays: '2,166 accommodations' },
          { image: hanoi, city: 'Hanoi', stays: '987 accommodations' },
          { image: tokyo, city: 'Tokyo', stays: '1,098 accommodations' },
          { image: krabi, city: 'Krabi', stays: '909 accommodations' },
          { image: donang, city: 'Do Nang', stays: '198 accommodations' },
          { image: muscat, city: 'Muscat', stays: '736 accommodations' },
          { image: pokhara, city: 'Pokhara', stays: '654 accommodations' },
        ].map((item, index) => (
          <div key={index} className="min-w-[150px] sm:min-w-[180px]">
            <img
              src={item.image}
              alt={item.city}
              className="w-full h-[180px] object-cover rounded-2xl shadow-md"
            />
            <p className="text-center font-semibold mt-2">{item.city}</p>
            <p className="text-center text-sm text-gray-500">
              {item.link ? (
                <a href="#" className="underline hover:text-blue-600">
                  {item.stays}
                </a>
              ) : (
                item.stays
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-800">

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help center</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Cookie policy</a></li>
            <li><a href="#" className="hover:underline">Terms of use</a></li>
            <li><a href="#" className="hover:underline">Manage cookie settings</a></li>
            <li><a href="#" className="hover:underline">Digital Services Act (EU)</a></li>
            <li><a href="#" className="hover:underline">Content guidelines & reporting</a></li>
            <li><a href="#" className="hover:underline">Modern Slavery Statement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">PointsMAX</a></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="font-semibold mb-3">Destinations</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Countries/Territories</a></li>
            <li><a href="#" className="hover:underline">All Flight Routes</a></li>
          </ul>
        </div>

        {/* Partner with us */}
        <div>
          <h3 className="font-semibold mb-3">Partner with us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">YCS partner portal</a></li>
            <li><a href="#" className="hover:underline">Partner Hub</a></li>
            <li><a href="#" className="hover:underline">Advertise on Agoda</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
            <li><a href="#" className="hover:underline">Agoda API Documentation</a></li>
          </ul>
        </div>

        {/* Get the app */}
        <div>
          <h3 className="font-semibold mb-3">Get the app</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">iOS app</a></li>
            <li><a href="#" className="hover:underline">Android app</a></li>
          </ul>
        </div>

      </div>
    </footer>

   </>
  );
};

export default ToursAndAttractions;
