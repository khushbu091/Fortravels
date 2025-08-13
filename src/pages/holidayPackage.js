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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../image/slide1.jpg';
import slide2 from '../image/slide2.png';


import bali from '../image/bali.jpg';
import goa from '../image/goa.jpg';
import himachal from '../image/himachal.avif';
import kerala from '../image/kerela.jpg';
import rajasthan from '../image/rajsthan.jpg';
import vietnam from '../image/vietnam.webp';
import maldives from '../image/maldives.webp';
import uttarakhand from '../image/uttarakhand.jpg';

import dubai from '../image/dubai.jpg';
import bangkok from '../image/bangkok.jpg';
import abuDhabi from '../image/abudhabi.webp';
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

import hsbc from "../image/dubai.jpg";
import idfc from "../image/uttarakhand.jpg";
import snow from "../image/kerela.jpg";
import accor from "../image/rajsthan.jpg";
import windowImg from "../image/himachal.avif"; 

import delhi from '../image/delhi.jpg';
import bangalore from '../image/banglore.webp';
import mumbai from '../image/mumbai.jpg';
import hyderabad from '../image/hydrabad.jpg';
import chennai from '../image/chennai.jpg';
import ponducherry from '../image/ponducherry.jpg';
import jaipure from '../image/jaipure.jpg';
import pune from '../image/pune.jpg';
import vrindava from '../image/vrindava.jpg';
import kochi from '../image/kochi.webp';
import kolkata from '../image/kolkata.jpg';



const tabs = [
  { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
  { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
  { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages', new: true, active: true }, 
  { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
  { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
  { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
  { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true },
  { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homeStay' },
  { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions' },
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
    img:goa,
    category: "DOM HOTELS",
    title: "ON YOUR TRIPS AROUND INDIA:",
    description: "Experience the Best of ALL Stays",
    cta: "VIEW DETAILS",
  },

  
];
const HolidayPackages=()=>{
const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      img: slide1, 
      badge: "COMING UP",
      title: "One Long Weekend & a Memorable Trip.",
      subtitle: "Explore holiday packages & plan a vacay.",
    },
    {
      img: slide2, 
      badge: "HOT DEAL",
      title: "Discover Amazing Places.",
      subtitle: "Book your next trip today.",
    },
  ];

  const flights = [
  {
    image: himachal,
    city: "Kashmir",
    via: "Kashmir Tour Packages , Kashmir Tourism, Kashmir Honeymoon Packages",
  },
  {
    image: hyderabad,
    city: "North East",
    via: "North East Tour Packages , North East India Tourism, North East India Honeymoon Packages",
  },
  {
    image: maldives,
    city: "Maldives",
    via: "Maldives Tour Packages , Maldives Tourism, Maldives Honeymoon Packages",
  },
  {
    image: goa,
    city: "Goa Flights",
    via: "Goa Tour Packages , Goa Tourism, Goa Honeymoon Packages",
  },
  {
    image: uttarakhand,
    city: "Sri Lanka",
    via: "Sri Lanka Tour Packages , Sri lanka Tourism, Sri Lanka Honeymoon Packages",
  },
  {
    image: bangalore,
    city: "Andaman",
    via: "Andaman Tour Packages , Andaman Tourism, Andaman Honeymoon Packages",
  },
  {
    image: mumbai,
    city: "Ladakh",
    via: "Ladakh Tour Packages , Ladakh Tourism, Ladakh Honeymoon Packages",
  },
  {
    image: kerala,
    city: "Kerala",
    via: "Kerala Tour Packages , Kerala Tourism, Kerala Honeymoon Packages",
  },
  {
    image: dubai,
    city: "Dubai",
    via: "Dubai Tour Packages , Dubai Tourism, Dubai Honeymoon Packages",
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

                    <div className="bg-white shadow-md">
                    {/* Top Tabs */}
                    <div className="flex border-b border-gray-200">
                        {[
                        { name: "Search", icon: "🔍" },
                        { name: "Honeymoon" },
                        { name: "Book @1" },
                        { name: "Group Tour Packages" },
                        { name: "Maldives Packages" },
                        { name: "Domestic Sale" },
                        ].map((tab, i) => (
                        <div
                            key={i}
                            className={`flex items-center px-4 py-3 cursor-pointer text-sm ${
                            i === 0 ? "border-b-2 border-blue-500" : ""
                            }`}
                        >
                            {tab.icon && <span className="mr-1">{tab.icon}</span>}
                            {tab.name}
                        </div>
                        ))}
                    </div>

                    {/* Search Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-5 border-t border-gray-200">
                        {/* From City */}
                        <div className="p-4 border-r">
                        <p className="text-xs text-gray-500">From City</p>
                        <h2 className="text-xl font-bold">New Delhi</h2>
                        <p className="text-xs text-gray-500">India</p>
                        </div>

                        {/* To City */}
                        <div className="p-4 border-r">
                        <p className="text-xs text-gray-500">To City/Country/Category</p>
                        <h2 className="text-xl font-bold">Goa</h2>
                        </div>

                        {/* Departure Date */}
                        <div className="p-4 border-r">
                        <p className="text-xs text-gray-500">Departure Date</p>
                        <p className="font-semibold">Select Date</p>
                        </div>

                        {/* Rooms & Guests */}
                        <div className="p-4 border-r">
                        <p className="text-xs text-gray-500">Rooms & Guests</p>
                        <p className="font-semibold">Select Rooms</p>
                        </div>

                        {/* Filters */}
                        <div className="p-4">
                        <p className="text-xs text-gray-500">Filters</p>
                        <p className="font-semibold">Select Filters (Optional)</p>
                        </div>                       
                    </div>
                    </div>

                    

                {/* Search Button */}
                <h2 className="text-lg font-bold text-right pr-5 pb-5 ">Holiday Packages</h2>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg font-semibold px-8 py-2 rounded-full shadow-md hover:opacity-90 transition">
                    SEARCH
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                <div key={index} className="relative">
                    {/* Background Image */}
                    <img src={slide.img} alt={slide.title} className="w-full h-[300px]" />

                    {/* Overlay */}
                    <div className="absolute top-10 left-10 text-white">
                    {/* Badge */}
                    <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-sm">
                        {slide.badge}
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl font-bold mt-3">{slide.title}</h2>

                    {/* Subtitle */}
                    <p className="text-lg">{slide.subtitle}</p>

                    {/* Colored Lines */}
                    <div className="flex mt-3 space-x-2">
                        <div className="w-6 h-1 bg-blue-500"></div>
                        <div className="w-6 h-1 bg-orange-500"></div>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>
            </div>
            
            <section className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-[10px] shadow-md mt-[20px]">
            <h2 className="text-2xl md:text-3xl font-bold text-left">
                Best Selling Destinations
            </h2>
            <p className="text-left font-semibold mb-6 text-gray-500">
                Apply Code SALESPECIAL to unlock jaw-dropping Long Weekend deals!
            </p>

            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {[
                { image: kerala, city: "Kerala" },
                { image: goa, city: "Goa" },
                { image: bali, city: "Bali" },
                { image: maldives, city: "Maldives" },
                { image: rajasthan, city: "Rajasthan" },
                { image: himachal, city: "Himachal" },
                { image: uttarakhand, city: "Uttarakhand" },
                { image: vietnam, city: "Vietnam" },
                ].map((item, index) => (
                <div key={index} className="min-w-[150px] sm:min-w-[180px]">
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img
                        src={item.image}
                        alt={item.city}
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                        <p className="text-white font-semibold">{item.city}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>

            <section className="max-w-6xl  mx-auto px-4 py-10 bg-white rounded-[10px] shadow-md mt-[20px]">
            <h2 className="text-2xl md:text-3xl font-bold text-left">
                Book Now @1: Lock package price now!
            </h2>
            <p className="text-left font-semibold mb-6 text-gray-500">
                Lock the price by paying only Rs 1 to avoid price surge
            </p>

            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {[               
                { image: rajasthan, city: "Rajasthan" },               
                { image: uttarakhand, city: "Uttarakhand" },
                { image: vietnam, city: "Vietnam" },
                { image: kerala, city: "Kerala" },
                { image: himachal, city: "Himachal" },
                { image: bali, city: "Bali" },
                { image: goa, city: "Goa" },
                { image: maldives, city: "Maldives" }, 
                ].map((item, index) => (
                <div key={index} className="min-w-[150px] sm:min-w-[180px]">
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img
                        src={item.image}
                        alt={item.city}
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                        <p className="text-white font-semibold">{item.city}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-[10px] shadow-md mt-[20px]">
            <h2 className="text-2xl md:text-3xl font-bold text-left">
                Visa Free Destinations
            </h2>
            <p className="text-left font-semibold mb-6 text-gray-500">
                Up to 30% off! Limited time offer
            </p>

            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {[
                { image: kerala, city: "Thailand" },
                { image: goa, city: "Almaty" },
                { image: bali, city: "Sri Lanka" },
                { image: maldives, city: "Maldives" },
                { image: rajasthan, city: "Hong Kong" },
                { image: himachal, city: "Malaysla" },
                { image: uttarakhand, city: "Seychelles" },
                { image: vietnam, city: "Vietnam" },
                ].map((item, index) => (
                <div key={index} className="min-w-[150px] sm:min-w-[180px]">
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img
                        src={item.image}
                        alt={item.city}
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                        <p className="text-white font-semibold">{item.city}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-6">
                International Destinations!
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
                <div className="bg-white shadow-xl rounded-xl p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[25px]">
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
export default HolidayPackages;