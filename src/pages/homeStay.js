import { FaInstagram, FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

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
import { Link } from 'react-router-dom';
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

import hsbc from "../image/luxe3.jpg";
import idfc from "../image/luxe2.jpg";
import snow from "../image/luxe1.jpg";
import accor from "../image/luxe2.jpg";
import windowImg from "../image/luxe3.jpg"; 

const tabs = [
  { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
  { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
  { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' }, 
  { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
  { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
  { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
  { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true },
  { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homeStay', new: true, active: true },
  { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions' },
];

 const flights = [
  {
    image: chennai,
    city: "Chennai ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: hyderabad,
    city: "Hyderabad ",
    via: "Homestays - Villas & Apts",
  },

  {
    image: goa,
    city: "Goa ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: delhi,
    city: "Delhi ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: bangalore,
    city: "Bangalore ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: mumbai,
    city: "Mumbai ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: pune,
    city: "Pune ",
    via: "Homestays - Villas & Apts",
  },
  {
    image: jaipure,
    city: "Jaipur ",
    via: "Homestays - Villas & Apts",
  },

  {
    image: vrindava,
    city: "vrindavan ",
    via: "Homestays - Villas & Apts",
  },

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



const HomeStays=()=>{

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

                <div className="bg-white shadow-md  p-0 md:p-6 max-w-6xl mx-auto  space-y-4">
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
            
            <div className="bg-white shadow-xl rounded-xl p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-[20px]">
            {flights.map((flight, index) => (
                <div key={index} className="flex items-start gap-4">
                <img
                    src={flight.image}
                    alt={flight.city}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{flight.city}</h3>
                    <p className="text-sm text-gray-600">{flight.via}</p>
                </div>
                </div>
            ))}
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

            <div className="bg-gray-50 py-12 px-8 mt-[20px]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
                    
                    {/* Column 1 */}
                    <div>
                    <h2 className="text-lg font-bold mb-4">
                        Why Book Hotels on the Country's Best Travel Site?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        Planning a vacation or business trip, and haven't found a hotel yet? Then use our web portal to find a hotel, which suits you in every way. The best travel site in India, Makemytrip has the largest database of hotels in the country and outside. Our user-friendly website makes online hotel booking an easy task, which can be completed in mere minutes.
                    </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                    <h2 className="text-lg font-bold mb-4">
                        How to book hotels on Makemytrip.com?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        Now, suppose you are travelling to Goa. All you have to do is click on the 'Hotels' tab on the homepage, and press the 'Domestic' button. After typing Goa under the 'I WANT TO GO' header, select your option. Then, enter the check-in and check-out dates, and tell us the number of adults and children, for whom the booking is to be made. On clicking the 'Search Hotels' button, all the accommodation options are displayed on a single page. To make your task easier, our portal is provided with filters that you can use to narrow down your search. You can refine the results on the basis of star category, location, area, price range and even the facilities you want.
                    </p>
                    </div>

                    {/* Column 3 */}
                    <div>
                    <h2 className="text-lg font-bold mb-4">
                        What Makemytrip.com has in store for you?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        We have all sorts of hotels, ranging from luxury to cheap, so whatever be your requirement, you will get the accommodation. When you find the hotel of your choice, just click on its name to see its detailed description. Apart from Goa, our database includes myriad properties in all holiday and business destinations in India. Our payment gateway is totally secure, so all your bank details are safe. A smooth transfer process means that making payment is as swift as searching the hotel. So, whether you are looking for budget or upscale hotels in Delhi, Shimla, Mumbai, Chennai or any other destination, visit Makemytrip, and get the best deal.
                    </p>
                    </div>

                </div>
                </div>
                <footer className="bg-black text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
                      
                            {/* Social Icons */}
                            <div className="flex items-center gap-8 text-3xl">
                                <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                                <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
                                <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
                                <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                            </div>
                
                            {/* Copyright */}
                            <p className="text-sm mt-4 md:mt-0">
                                © 2025 Travel's
                            </p>
                            </footer>
                
                
        </>
    );
};
export default HomeStays;