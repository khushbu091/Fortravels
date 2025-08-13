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

import hsbc from "../image/cab.webp";
import idfc from "../image/cabs.webp";
import snow from "../image/cab2.webp";
import accor from "../image/cab3.webp";
import windowImg from "../image/cab2.webp"; 

import himachal from '../image/himachal.avif';
import bangalore from '../image/banglore.webp';
import mumbai from '../image/mumbai.jpg';
import hyderabad from '../image/hydrabad.jpg';
import kerala from '../image/kerela.jpg';
import goa from '../image/goa.jpg';
import uttarakhand from '../image/uttarakhand.jpg';
import maldives from '../image/maldives.webp';

const tabs = [
    { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels' },
    { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
    { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' }, 
    { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
    { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
    { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs', new: true, active: true },
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
    img: hsbc,
    category: "INTL FLIGHTS",
    title: "EXCLUSIVE FLIGHT DEALS",
    description: "Grab your international tickets now.",
    cta: "BOOK NOW",
  },
  
];

const flights = [
  {
    image: bangalore,
    city: "Cabs From Bangalore To",
    via: "Chennai, Hyderabad, Coimbatore, Mumbai, Goa",
  },
  {
    image: goa,
    city: "Cabs From Pune To",
    via: "Goa, Bangalore, Nagpur, Hyderabad, Mumbai",
  },
  {
    image: mumbai,
    city: "Cabs From Ahmedabad To",
    via: "Mumbai, Rajkot, Surat, Pune, Indore",
  },
  {
    image: hyderabad,
    city: "Cabs From Chennai To",
    via: "Bangalore, Coimbatore, Madurai, Hyderabad, Trichy",
  },
  {
    image: uttarakhand,
    city: "Cabs From Delhi To",
    via: "Lucknow, Dehradun, Manali, Kanpur, Jaipur",
  },
  {
    image: bangalore,
    city: "Cabs From Coimbatore To",
    via: "Chennai, Bangalore, Madurai, Pondicherry, Nagercoil",
  },
  {
    image: mumbai,
    city: "Cabs From Hyderabad To",
    via: "Bangalore, Chennai, Mumbai, Pune, Vijayawada",
  },
  {
    image: kerala,
    city: "Cabs From Mumbai To",
    via: "Bangalore, Goa, Pune, Indore, Ahmedabad",
  },

];

const Cabs=()=>{
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
                 <div className="bg-white shadow-md p-0 md:p-6 max-w-6xl mx-auto space-y-4">
                    <div className="flex items-center space-x-6 border-b pb-2 text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="tab" defaultChecked className="text-blue-600" />
                    <span className="font-semibold text-blue-600">Outstation One-Way</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="tab" />
                    <span>Outstation Round-Trip</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="tab" />
                    <span>Airport Transfers</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="tab" />
                    <span>Hourly Rentals</span>
                    </label>

                </div>

                 {/* Search Filters - Train Booking Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 border rounded-lg overflow-hidden divide-x text-gray-700 text-sm">

                    {/* From */}
                    <div className="p-4 bg-blue-50">
                    <p className="text-xs">Pickup Location</p>
                    <h2 className="text-4xl font-bold text-black">Bangalore</h2>
                    <span className="text-xs text-gray-500">Bangalore</span>
                    </div>

                    {/* To */}
                    <div className="p-4">
                    <p className="text-xs">Pickup Date</p>
                    <h2 className="text-4xl font-bold text-black">14 Aug</h2>
                    <span className="text-xs text-gray-500">Thursday</span>
                    </div>

                    <div className="p-4">
                    <p className="text-xs flex items-center">
                        Pickup-Time <span className="ml-1 text-blue-500">▼</span>
                    </p>
                    <h2 className="text-4xl font-bold text-black">10.00 AM</h2>
                    </div>

                    {/* Travel Date */}
                    <div className="p-4">
                    <p className="text-xs flex items-center">
                        Select Package 
                    </p>
                    <h2 className="text-4xl font-bold text-black">
                        1 hrs 10 kms 
                    </h2>                   
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
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">Book Bus Tickets Without Any Hassle</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Traveling by train is a popular choice for both short commutes and longer journeys, and for a good reason. 
                    With over a thousand routes connecting cities in India, traveling by train is the most convenient mode of travel. 
                    The combination of price, convenience, and speed makes train travel a sweet spot for discerning travelers. 
                    Travelers can now search routes, check fares and book train tickets with MakeMyTrip’s train booking system. 
                    Moreover, you can also use the MakeMyTrip’s app for easy access to train tickets booking. Planning a trip across India should be fun and easy. 
                    That’s why, MakeMyTrip guarantees a hassle-free booking process for booking your train tickets. 
                    You can have your train tickets book on MakeMyTrip from the comfort of your homes.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Easy IRCTC Bus Booking</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Indian Railways is among the world’s largest rail networks with an operating route length of more than 65,000 km. 
                    IRCTC (Indian Railway Catering and Tourism Corporation) is the face of India’s online train tickets booking system. 
                    MakeMyTrip is the leading portal for booking IRCTC train tickets online which is offering the most convenient ways to book train tickets, 
                    check train schedule, train availability, and view live train status. 
                    IRCTC has been the most used website for train tickets booking. 
                    It has seen the largest footfall in their websites and thus to make the experience even better for the customers we have stepped in to make it an easy solution. 
                    With us, you can now book train tickets with confirmed status, add meals and even grab great deals on booking.
                </p>
                </div>
                
            </div>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">How Book Bus Tickets Online with MakeMyTrip</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Having confusion on how to book your train tickets online? process of booking your tickets in simple easy steps.
                    <br /><br />
                    <strong>Step 1:</strong> Log in to our website and select the train icon. Under the ‘book train tickets’ section, choose your city and its station where you will depart from and arrive at.
                    <br />
                    <strong>Step 2:</strong> Then select the date of departure and choose from the preferred class of train travel. You can choose between Sleeper Class, Third Class, First AC, Second AC, Third AC, AC Chair car, and so on. 
                    Remember, while you book train tickets, the train fare varies according to the class of travel you choose.
                    <br />
                    <strong>Step 3:</strong> You can now see all the updated train details with their schedule and availability. You can filter out by pricing, departure time, date, travel class, train types, and even stations.
                    <br />
                    <strong>Step 4:</strong> Once you choose your desired train, you now reach the review page where you can fill up your details, berth preference, and also check the booking details and total amount. 
                    You can also avail free cancellation policy and travel insurance exclusive available on MakeMyTrip.
                    <br />
                    <strong>Step 5:</strong> To proceed further, you will need to put your IRCTC login details. If you don’t have your IRCTC username, you can always create a new one by adding the details.
                    <br />
                    <strong>Step 6:</strong> The final step is to add coupon codes (if you have any) and proceed to pay. After selecting the mode of payment, you will be redirected to IRCTC for authentication. 
                    All you need to do is type in your password and have your tickets delivered to your mailbox.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Check Your PNR Status</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Apart from providing e-tickets by mail, MakeMyTrip also sends you the relevant updates on your registered number over text and WhatsApp. 
                    When you book train tickets each ticket holder gets a unique PNR, an acronym for Passenger Name Record, to check the status of the train and booking details. 
                    With the help of PNR enquiry, you can check live train status from the comfort of your home. 
                    With PNR enquiry, you will get to know whether your ticket is confirmed or if will you get a seat only if someone else cancels their ticket. 
                    A PNR status signifies whether your ticket is on the waitlist (WL), confirmed (CNF), canceled (CAN), or on reservation against cancellation (RAC). 
                    Make sure to check your PNR status before you board your train. 
                    You can also cancel your bookings by simply clicking on the “View and Manage Booking” section on MakeMyTrip. 
                    There you can cancel your bookings and also check refund status. 
                    Once you book train tickets, make sure to carry valid identification proof while traveling such as Aadhar card, passport, driving license, voter Id, pan card and other government-issued/approved ID cards.
                </p>
                </div>
            </div>
                        {/* Divider */}
            <hr className="border-gray-300" />

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">Why should you book Train Tickets with MakeMyTrip</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    MakeMyTrip can provide you the most reliable and secure way of train booking and all you need to do is plan your itinerary. The portal provides a user-friendly experience to our customers. Instead of waiting or queueing up in lines for hours to book a train ticket, you can visit the website. The train tickets online booking system of MakeMyTrip allow you to book your travel package from anywhere. All you need to do is enter your IRCTC login detail and you have all the information you need.
                    Getting a train ticket has never been so easy. You not only get to book train tickets but also get help for resolving any queries you might have. With online train booking, you can now easily check train availability and book according to your requirement. You can also check the status of a live train and train schedule, train routes, train fares, waitlist status, and seat availability. Furthermore, you will also get all the updated information on the type of seats and classes of trains that are available to book. You may also add up your preferred meals while booking your ticket.
                    If you book train tickets with MakeMyTrip, you can also get exciting discounts and offers. Moreover, if you are eligible, you can also get concessions on your train tickets. Moreover, we provide you with train alternates and predictions on the waitlist IRCTC trains with percentage. The train tickets booking experience provided by MakeMyTrip to the customers makes the entire process of planning a trip quite smooth.
                    So, to avail of maximum benefits, log into MakeMyTrip’s website. You can also call the customer support service of MakeMyTrip to resolve any of your queries. By planning your trips with MakeMyTrip, you can get the best deals on train tickets and have your seat of choice as well.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Hassle-free Bus Ticket Booking on MakeMyTrip</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Counted among the world’s largest rail networks, Indian Railways is the 
                    most popular mode of transport for passengers. MakeMyTrip is the leading 
                    portal for making your IRCTC ticket booking within a few minutes. All you 
                    have to do is enter your source and destination and look at all the trains 
                    available on the selected route. In order to confirm your tickets, 
                    enter your IRCTC login ID and be ready to embark on a journey of a lifetime.
                     You can also book your train tickets on MakeMyTrip’s mobile app. Once you 
                     are done booking your ticket, you will receive a confirmation message on 
                     your mobile. Moreover, you would receive your e-train ticket on the mentioned email 
                     ID. Instead of carrying physical tickets, all you have to do is show your e-train ticket
                      received on your mobile to the ticket collector.
                </p>
                </div>
            </div>
            <hr className="border-gray-300" />
            <h2 className="text-md font-bold mb-2">Frequently Asked Questions About IRCTC Ticket Booking</h2>
            <hr className="border-gray-300" />
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">Q. Why Book Bus Tickets Online With MakeMyTrip?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    A. MakeMyTrip, India's leading travel portal is the best way to book train tickets online. No matter where you are in the country, make a hassle-free railway reservation from us using your computer or smartphone. Along with it, you can avail exciting discounts on your first time of booking but also get them on the following rail tickets. Additionally, you will have all the updated information of the seats and classes of trains that are available to book.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Q. What is the process for booking online Bus tickets?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                   A. For booking train tickets from MakeMyTrip, enter the name of the city, station name or station code of the cities you will depart from and arrive at. From the updated list of trains available, choose your preferred class of travel. While making the railway reservation on our app or website, you would need to add your IRCTC username. This verification process is important. It makes sure that your IRCTC reservation does not fail once you have paid for the ticket. If you don't have a username, you can easily create one by adding the details required.
                </p>
                </div>
            </div>
            <hr className="border-gray-300" />
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">Q. Why Book Bus Tickets Online With MakeMyTrip?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    A. MakeMyTrip, India's leading travel portal is the best way to book train tickets online. No matter where you are in the country, make a hassle-free railway reservation from us using your computer or smartphone. Along with it, you can avail exciting discounts on your first time of booking but also get them on the following rail tickets. Additionally, you will have all the updated information of the seats and classes of trains that are available to book.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Q. What is the process for booking online Bus tickets?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                   A. For booking train tickets from MakeMyTrip, enter the name of the city, station name or station code of the cities you will depart from and arrive at. From the updated list of trains available, choose your preferred class of travel. While making the railway reservation on our app or website, you would need to add your IRCTC username. This verification process is important. It makes sure that your IRCTC reservation does not fail once you have paid for the ticket. If you don't have a username, you can easily create one by adding the details required.
                </p>
                </div>
            </div>
            <hr className="border-gray-300" />
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-md font-bold mb-2">Q. Why Book Bus Tickets Online With MakeMyTrip?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    A. MakeMyTrip, India's leading travel portal is the best way to book train tickets online. No matter where you are in the country, make a hassle-free railway reservation from us using your computer or smartphone. Along with it, you can avail exciting discounts on your first time of booking but also get them on the following rail tickets. Additionally, you will have all the updated information of the seats and classes of trains that are available to book.
                </p>
                </div>

                <div>
                <h2 className="text-md font-bold mb-2">Q. What is the process for booking online Bus tickets?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                   A. For booking train tickets from MakeMyTrip, enter the name of the city, station name or station code of the cities you will depart from and arrive at. From the updated list of trains available, choose your preferred class of travel. While making the railway reservation on our app or website, you would need to add your IRCTC username. This verification process is important. It makes sure that your IRCTC reservation does not fail once you have paid for the ticket. If you don't have a username, you can easily create one by adding the details required.
                </p>
                </div>
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
    )
};
export default Cabs;