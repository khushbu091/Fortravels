import React from 'react';
import { useState } from 'react';
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
import { Link } from 'react-router-dom'; // ✅ IMPORT THIS
import dotGrid from '../image/beach.jpg';
import airAsia from "../image/flight1.png";       // Adjust path as needed
import cathay from "../image/flight2.png"; 

import hsbc from "../image/dubai.jpg";
import idfc from "../image/uttarakhand.jpg";
import snow from "../image/kerela.jpg";
import accor from "../image/rajsthan.jpg";
import windowImg from "../image/himachal.avif"; 


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

const tabs = [
  { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions' },
  { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights', new: true, active: true },
  { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
  { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homeStay' },
  { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' },
  { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
  { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
  { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
  { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true },
];

const offers = [
  {
    img: hsbc,
    category: "INTL FLIGHTS",
    title: "Get Up to 35% OFF* + Interest-free EMI",
    description: "on flights, hotels & holiday packages for your next refreshing break.",
    cta: "BOOK NOW",
  },
  {
    img: idfc,
    category: "INTL FLIGHTS",
    title: "For Worry-free Travel: Grab Up to 30% OFF*",
    description: "+ 3- & 6-months interest-free EMI on flights, stays and holiday packages!",
    cta: "BOOK NOW",
  },
  {
    img: windowImg,
    category: "INTL FLIGHTS",
    title: "Big Savings Await",
    description: "Grab exclusive deals with HDFC.",
    cta: "BOOK NOW",
  },
  {
    img: snow,
    category: "DOM HOTELS",
    title: "Book Your Stay @ Up to 25% OFF*",
    description: "For Your Amarnath Yatra.",
    cta: "BOOK NOW",
  },
  {
    img: accor,
    category: "DOM HOTELS",
    title: "ON YOUR TRIPS AROUND INDIA:",
    description: "Experience the Best of ALL Stays",
    cta: "VIEW DETAILS",
  },
  {
    img: hsbc,
    category: "INTL FLIGHTS",
    title: "EXCLUSIVE FLIGHT DEALS",
    description: "Grab your international tickets now.",
    cta: "BOOK NOW",
  },
  
];

const flights = [
  {
    image: chennai,
    city: "Chennai Flights",
    via: "Via - Delhi, Mumbai, Coimbatore, Madurai",
  },
  {
    image: hyderabad,
    city: "Hyderabad Flights",
    via: "Via - Chennai, Mumbai, Bangalore, Delhi",
  },
  {
    image: kolkata,
    city: "Kolkata Flights",
    via: "Via - Delhi, Mumbai, Bangalore, Pune",
  },
  {
    image: goa,
    city: "Goa Flights",
    via: "Via - Delhi, Mumbai, Bangalore, Ahmedabad",
  },
  {
    image: delhi,
    city: "Delhi Flights",
    via: "Via - Mumbai, Pune, Bangalore, Chennai",
  },
  {
    image: bangalore,
    city: "Bangalore Flights",
    via: "Via - Delhi, Pune, Mumbai, Kolkata",
  },
  {
    image: mumbai,
    city: "Mumbai Flights",
    via: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
  },
  {
    image: pune,
    city: "Pune Flights",
    via: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
  },
  {
    image: jaipure,
    city: "Jaipur Flights",
    via: "Via - Mumbai, Delhi, Pune, Bangalore",
  },
];

const faqs = [
  {
    question: "How do I make a flight booking on MakeMyTrip?",
    answer:
      "You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip flight booking page, Enter your departure and arrival destinations, Select your air travel dates, Choose from our wide range of cheap flights based on your airfare preferences, Click on ‘Book Now’ and your air flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking. Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations, travel class of your choice, Select on your best comfortable option and click on 'Book Now'.",
  },
  {
    question: "Can I avail domestic flight offers on MakeMyTrip?",
    answer:
      "Of course, you can. While making domestic flight bookings, you can avail any special offer that is active at that time. In accordance with the offer selected, a listing of eligible cheapest flights would show up on your screen. You can then apply the price filter and click on the downwards arrow, following which budget-friendly flights would start showing up in ascending order from the top (lowest price on top).",
  },
  {
    question: "How can I avail budget air tickets on MakeMyTrip?",
    answer:
      "It’s super-easy to avail budget airfare while booking your cheap flight tickets on MakeMyTrip. Just select the ‘Price’ filter once the available flight options are displayed and adjust according to your convenience. On the MakeMyTrip app, you can select the downward arrow, which will show the lowest airfare at the top and continue downward in ascending order.",
  },
  {
    question: "Why could I not avail the flight booking offers at the time of checkout?",
    answer:
      "MakeMyTrip makes use of a world-class real-time reservation database to list airfare and availability. As dynamic changes in airfare take place, or the available flight tickets sell out, the database reflects the changes in real-time. Hence, we suggest, you double-check online flight booking prices when purchasing flight tickets, as the airfare might have been dynamically updated since you first selected the air travel dates or planned your itinerary.",
  },
];
const FlightTab = () => {
  const [tripType, setTripType] = useState('oneway');
  const [specialFare, setSpecialFare] = useState('regular');
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
          <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow">
      {/* Trip Type */}
      <div className="flex gap-4 mb-4">
        {['One Way', 'Round Trip', 'Multi City'].map(type => (
          <label key={type} className="flex items-center gap-2">
            <input
              type="radio"
              name="tripType"
              value={type.toLowerCase().replace(/ /g, '')}
              checked={tripType === type.toLowerCase().replace(/ /g, '')}
              onChange={() => setTripType(type.toLowerCase().replace(/ /g, ''))}
            />
            {type}
          </label>
        ))}
      </div>

      {/* From - To - Date - Travellers */}
      <div className="grid grid-cols-6 gap-3 bg-gray-100 p-3 rounded-md">
        <div>
          <p className="text-sm text-gray-500">From</p>
          <h2 className="text-2xl font-bold">Delhi</h2>
          <p className="text-sm">DEL, Delhi Airport India</p>
        </div>

        <div className="flex justify-center items-center">
          <span className="bg-gray-200 p-2 rounded-full text-lg">⇄</span>
        </div>

        <div>
          <p className="text-sm text-gray-500">To</p>
          <h2 className="text-2xl font-bold">Mumbai</h2>
          <p className="text-sm truncate">BOM, Chhatrapati Shivaji Internation...</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Departure</p>
          <h2 className="text-xl font-bold">7 <span className="text-base">Aug'25</span></h2>
          <p className="text-sm">Thursday</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Return</p>
          <p className="text-sm text-gray-400">Tap to add a return date for bigger discounts</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Travellers & Class</p>
          <h2 className="text-lg font-bold">1 Traveller</h2>
          <p className="text-sm">Economy/Premium Economy</p>
        </div>
      </div>

      {/* Special Fare */}
      <div className="mt-6">
        <p className="font-semibold">Select a special fare</p>
        <span className="bg-green-500 text-white px-2 py-1 text-xs rounded ml-2">EXTRA SAVINGS</span>

        <div className="flex flex-wrap gap-4 mt-4">
          {[
            { id: 'regular', label: 'Regular fares', desc: 'Regular' },
            { id: 'student', label: 'Extra discounts/baggage', desc: 'Student' },
            { id: 'senior', label: 'Up to ₹ 600 off', desc: 'Senior Citizen' },
            { id: 'armed', label: 'Up to ₹ 600 off', desc: 'Armed Forces' },
            { id: 'doctor', label: 'Up to ₹ 600 off', desc: 'Doctor and Nurses' },
          ].map(option => (
            <label key={option.id} className={`border p-3 rounded-lg cursor-pointer ${specialFare === option.id ? 'border-blue-500' : 'border-gray-300'}`}>
              <input
                type="radio"
                name="specialFare"
                value={option.id}
                checked={specialFare === option.id}
                onChange={() => setSpecialFare(option.id)}
                className="mr-2"
              />
              <span className="font-semibold">{option.desc}</span>
              <p className="text-sm text-gray-500">{option.label}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Flight Tracker */}
      <div className="mt-6">
        <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
          🛫 Flight Tracker <span className="bg-pink-500 text-white text-xs px-2 rounded-full">new</span>
        </button>
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
    <div className=" py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Experience Flying with our Airline Partners
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* AirAsia */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
            <img
              src={airAsia}
              alt="AirAsia"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Cathay Pacific */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
            <img
              src={cathay}
              alt="Cathay Pacific"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl bg-white rounded-2xl shadow-lg p-6 md:p-10  mx-auto mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          <span className="text-black">Offers</span>
        </h2>
        <div className="flex space-x-6 text-sm font-semibold text-gray-600">
          <span className="text-blue-600 border-b-2 border-blue-600">All Offers</span>
          <span>Flights</span>
          <span>Hotels</span>
          <span>Holidays</span>
          <span>Trains</span>
          <span>Visa</span>
          <span>Cabs</span>
          <span>Bank Offers</span>
        </div>
        <button className="text-blue-600 font-semibold text-sm flex items-center space-x-1">
          <span>VIEW ALL</span>
          <span>→</span>
        </button>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex space-x-4"
          >
            <img
              src={offer.img}
              alt="offer"
              className="w-24 h-24 rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase flex justify-between">
                  <span>{offer.category}</span>
                  <span className="text-right">T&C'S APPLY</span>
                </div>
                <p className="text-md font-bold mt-1 leading-tight">{offer.title}</p>
                <p className="text-sm text-gray-600">{offer.description}</p>
              </div>
              <button className="text-blue-600 text-sm font-semibold mt-2">
                {offer.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-6xl grid md:grid-cols-2 gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Download App Now!</h2>
          <p className="mb-4 text-gray-700">
            Use code <span className="font-bold">WELCOMEMMT</span> and get{" "}
            <span className="font-bold">FLAT 12% OFF</span> on your first domestic flight booking.
          </p>

          {/* Phone Input Section */}
          <div className="flex w-full max-w-xl mb-6">
            <div className="flex items-center border border-gray-300 rounded-l-md bg-white px-4">
              <span role="img" aria-label="flag" className="mr-1">🇮🇳</span>
              <span className="font-semibold">+91</span>
            </div>

            <input
              type="tel"
              placeholder="Enter Mobile number"
              className="flex-grow px-4 py-2 border-t border-b border-gray-300 focus:outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md font-semibold">
              GET APP LINK
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center">
          {/* Buttons Row */}
          <div className="flex space-x-4 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-12"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </div>

          {/* QR Code */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://yourapp.com"
            alt="QR Code"
            className="h-28 w-28 mt-2"
          />
        </div>
      </div>
    </div>

    <div className="bg-white shadow-xl rounded-xl p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {flights.map((flight, index) => (
        <div key={index} className="flex items-start gap-4">
          <img
            src={flight.image}
            alt={flight.city}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{flight.city}</h3>
            <p className="text-sm text-gray-600">{flight.via}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gray-50 py-12 px-8 mt-[20px]">
      <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-gray-900">
              Q - {faq.question}
            </h3>
            <p className="text-sm text-gray-700 mt-2">{faq.answer}</p>
            {idx === 1 && (
              <hr className="my-6 border-gray-300 md:col-span-2" />
            )}
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default FlightTab;
