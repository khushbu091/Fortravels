import React, { useState } from "react";
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
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import dotGrid from '../image/beach.jpg';
import cruiseBg from '../image/cruise bg.jpg';
import cruise from '../image/cruise.jpg';

import Kochi from '../image/kochi.webp';
import singapore from '../image/singapore.webp';
import mumbai from '../image/mumbai.jpg';
import australia from '../image/australia.jpg';
import Europe from '../image/Europe.avif';
import logo from '../image/RWC_StarDream_tag.avif';
const tabs = [
    { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
    { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
    { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' }, 
    { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
    { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
    { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
    { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true, active: true },
    { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homeStay' },
    { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions' },
];

const features = [
    {
      img: cruise, 
      title: "Amenities for a fun-filled experience",
    },
    {
      img: cruise,
      title: "Dining with stunning ocean views",
    },
    {
      img: cruise,
      title: "World-class performances",
    },
    {
      img: cruise,
      title: "Stays for every style & budget",
    },
  ];

  const destinations = [
  {
    img: mumbai, 
    title: "Mumbai",
    price: "₹28,106",
  },
  {
    img: australia, 
    title: "Australia",
    price: "₹14,563",
  },
  {
    img: singapore, 
    title: "Singapore",
    price: "₹8,298",
  },
  {
    img: Kochi, 
    title: "Kochi",
    price: "₹26,286",
  },
  {
    img: Europe, 
    title: "Europe",
    price: "₹42,776",
  },
];

const cruises = [
  {
    img: cruise, 
    logo: logo, 
    title: "StarDream Cruises",
    price: "₹8,298",
  },
  {
    img: cruiseBg, 
    logo: logo, 
    title: "Cordelia",
    price: "₹26,286",
  },
  {
    img: cruise, 
    logo: logo, 
    title: "Royal Caribbean",
    price: "₹8,801",
  },
    {
    img: cruiseBg, 
    logo: logo, 
    title: "Cordelia",
    price: "₹26,286",
  },
    {
    img: cruise, 
    logo: logo, 
    title: "Royal Caribbean",
    price: "₹8,801",
  },
];
const faqs = [
  {
    question: "What documents are required to board the cruise?",
    answer:
      "Guests must present a valid passport or government-issued ID, cruise ticket and any required visas based on their itinerary.",
  },
  {
    question: "What time do I need to check-in and board the cruise?",
    answer:
      "For offline check-in, arrive 3–4 hours before departure. Boarding typically closes 1–2 hours before sailing. Refer to your cruise ticket for exact timings.",
  },
  {
    question: "How much luggage is allowed on the cruise?",
    answer:
      "Luggage limits vary by cruise line and cabin type. Check your cruise line’s specific policies on number, weight, and size of bags.",
  },
  {
    question: "What is included in the cruise ticket?",
    answer:
      "Accommodation, dining, entertainment, access to pools, fitness center, and select onboard activities are included, depending on your cruise package. Gratuities and Tips are not included in your cruise package.",
  },
  {
    question: "Are meals included in the cruise fare?",
    answer:
      "Yes, all standard meals at designated restaurants are included. Specialty restaurants may have additional charges.",
  },
  {
    question: "Are premium beverages included in the cruise fare?",
    answer:
      "Standard drinks are included. Premium beverages (cocktails, fine wines, etc.) are available at extra cost or through drink packages.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Wi-Fi is usually not included and is available for purchase onboard.",
  },
];

const Cruise=()=>{
    const [openIndex, setOpenIndex] = useState(null);
    return(
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

                <div className="bg-white shadow-md  p-0 md:p-6 max-w-6xl   space-y-4">
                    <h2 className="text-xl font-bold text-center">Book your ideal Homestay - Villas, Apartments & more.</h2>

                    {/* Search Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-5 border rounded-lg overflow-hidden divide-x text-center text-gray-700 text-sm">
                        <div className="p-4">
                        <p className="text-xs">City, Property Name Or Location</p>
                        <h2 className="text-4xl font-bold">Goa</h2>
                        <span className="text-xs text-gray-500">India</span>
                        </div>
                        <div className="p-4">
                        <p className="text-xs">Check-In</p>
                        <h2 className="text-2xl font-bold">Select Date</h2>
                        </div>
                        <div className="p-4">
                        <p className="text-xs">Check-Out</p>
                        <h2 className="text-2xl font-bold">Select Date</h2>
                        </div>
                        <div className="p-4">
                        <p className="text-xs">Guests</p>
                        <h2 className="text-xl font-bold">Add Adults & Children</h2>
                        </div>
                        <div className="p-4">
                        <p className="text-xs">Price Per Night</p>
                        <h2 className="text-sm font-medium">₹0-₹1500, ₹1500-₹2500,...</h2>
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

            <div className="relative rounded-3xl overflow-hidden shadow-lg py-10 px-6  max-w-6xl mx-auto flex flex-col md:flex-row">
            {/* Background Image */}
            <img
                src={cruiseBg} 
                alt="Cruise"
                className="w-full h-[500px] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-10">
                {/* Left Text */}
                <div className="flex-1 text-white p-6">
                <h1 className="text-5xl font-bold">Cruise</h1>
                <p className="text-lg italic mt-2">
                    From search to sail, guided <span className="bg-red-600 px-1">by</span> experts
                </p>
                </div>

                {/* Feature Cards */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                {features.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-md w-52 h-[200px] flex-shrink-0"
                    >
                    <div className="relative">
                        <img src={item.img} alt={item.title} className="w-full h-32 object-cover" />
                        <FaPlayCircle className="absolute inset-0 m-auto text-white text-4xl opacity-80" />
                    </div>
                    <p className="p-2 text-sm font-medium text-center">{item.title}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
            <div className="bg-white shadow-md  p-0 md:p-6 max-w-6xl p-6 rounded-3xl mx-auto mt-20 ">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Most-booked Cruise Destinations</h2>
                <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                    &#8592;
                </button>
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                    &#8594;
                </button>
                </div>
            </div>

            {/* Destination Cards */}
            <div className="grid grid-cols-3 gap-4">
                {/* First card bigger */}
                <div className="col-span-1 row-span-2 bg-gray-100 rounded-2xl overflow-hidden">
                <img
                    src={destinations[0].img}
                    alt={destinations[0].title}
                    className="w-full h-[350px] object-cover"
                />
                <div className="bg-gray-100 text-center p-3">
                    <h3 className="font-semibold">{destinations[0].title}</h3>
                    <p className="text-gray-600 text-sm">
                    Starting from {destinations[0].price} per person
                    </p>
                </div>
                </div>

                {/* Other cards */}
                {destinations.slice(1).map((item, index) => (
                <div
                    key={index}
                    className="bg-gray-100 rounded-2xl overflow-hidden"
                >
                    <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                    />
                    <div className="bg-gray-100 text-center p-3">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                        Starting from {item.price} per person
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="bg-white p-6 rounded-3xl  shadow-lg py-10 px-6  max-w-6xl mx-auto mt-20">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Our Featured Cruise Lines</h2>
                <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                    &#8592;
                </button>
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                    &#8594;
                </button>
                </div>
            </div>

            {/* Cruise Cards */}
            <div className="flex gap-4 overflow-x-auto">
                {cruises.map((cruise, index) => (
                <div
                    key={index}
                    className="bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 w-80"
                >
                    <img
                    src={cruise.img}
                    alt={cruise.title}
                    className="w-full h-48 object-cover"
                    />
                    <div className="flex flex-col items-center bg-gray-100 p-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md -mt-8 mb-2">
                        <img src={cruise.logo} alt="logo" className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold">{cruise.title}</h3>
                    <p className="text-gray-600 text-sm">
                        Starting from {cruise.price} per person
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
           <div className="bg-white p-6 rounded-3xl shadow-md max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-6">
                Cruise FAQs – What to Know Before You Sail
            </h2>
            <div>
                {faqs.map((faq, index) => (
                <div key={index} className="border-b py-3">
                    <button
                    className="flex justify-between w-full text-left font-semibold"
                    onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                    }
                    >
                    {faq.question}
                    <span className="text-blue-500">
                        {openIndex === index ? "▲" : "▼"}
                    </span>
                    </button>
                    {openIndex === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                    )}
                </div>
                ))}
            </div>
            </div>
            <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm leading-relaxed">
                
                {/* Product Offering */}
                <div>
                <h3 className="font-bold mb-2">Product Offering</h3>
                <p className="text-sm">
                    Flights International Flights Charter Flights Hotels International Hotels Homestays and Villas Activities Holidays In India International Holidays Book Hotels From UAE myBiz for Corporate Travel Book Online Cabs Book Bus Tickets Book Train Tickets Cheap Tickets to India Book Flights From US Book Flights From UAE Trip Planner Forex Card Buy Foreign Currency Travel Insurance Travel Insurance Thailand Travel Insurance USA Travel Insurance Dubai Travel Insurance Canada Travel Insurance Singapore Gift Cards Gift Wedding Gift Anniversary Gift Birthday Gift Diwali Gift Valentines Gift Farewell Gift Christmas Gift New Year Gift Trip Money Trip Ideas Travel Blog PNR Status MakeMyTrip Advertising Solutions One Way Cab
                </p>
                </div>

                {/* MakeMyTrip */}
                <div>
                <h3 className="font-bold mb-2">MakeMyTrip</h3>
                <p className="text-sm">
                    About Us Investor Relations Careers Sustainability MMT Foundation Legal Notices CSR Policy & Committee myPartner - Travel Agent Portal List your hotel Partners- Redbus Partners- Goibibo Advertise with Us Holiday-Franchise Partners- BookMyForex RedBus Ferry Malaysia RedBus Ferry Singapore redBus Vietnam redBus Cambodia Things to Do in Malaysia Things to Do in Singapore
                </p>
                </div>

                {/* About the Site */}
                <div>
                <h3 className="font-bold mb-2">About the Site</h3>
                <p className="text-sm">
                    Customer Support Payment Security Privacy Policy Cookie Policy User Agreement Terms of Service Franchise Offices Make A Payment Work From Home Escalation Channel
                </p>
                </div>

                {/* Quick Links */}
                <div>
                <h3 className="font-bold mb-2">Quick Links</h3>
                <p className="text-sm">
                    Delhi Chennai Flights Delhi Mumbai Flights Delhi Goa Flights Chennai Mumbai Flights Mumbai Hyderabad Flights Kolkata to Rupsi Flights Rupsi to Guwahati Flights Delhi to Khajuraho Flights Cochin to Agatti Island Flights Hotels in Delhi Hotels in Mumbai Hotels in Goa Hotels In Jaipur Hotels In Ooty Hotels In Udaipur Hotels in Puri Hotels In North Goa Hotels In Rishikesh Honeymoon Packages Kerala Packages Kashmir Packages Ladakh Packages Goa Packages Thailand Packages Sri Lanka Visa Thailand Visa Explore Goa Explore Manali Explore Shimla Explore Jaipur Explore Srinagar
                </p>
                </div>

                {/* Important Links */}
                <div>
                <h3 className="font-bold mb-2">Important Links</h3>
                <p className="text-sm">
                    Cheap Flights Flight Status Kumbh Mela Domestic Airlines International Airlines Indigo Spicejet GoAir Air Asia Air India Indian Railways Trip Ideas Beaches Honeymoon Destinations Romantic Destinations Popular Destinations Resorts In Udaipur Resorts In Munnar Villas In Lonavala Hotels in Thailand Villas In Goa Domestic Flight Offers International Flight Offers UAE Flight Offers USA UAE Saudi Arabia UK Oman
                </p>
                </div>

            </div>
            </footer>


        
        </>
    )
};
export default Cruise;