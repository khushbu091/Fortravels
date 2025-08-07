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
const tabs = [
  { icon: <BsBalloon size={24} />, label: 'Tours & Attractions', path: '/ToursAndAttractions' },
  { icon: <MdFlight size={28} />, label: 'Flights', path: '/flights',  },
  { icon: <MdHotel size={28} />, label: 'Hotels', path: '/hotels', new: true, active: true },
  { icon: <MdHolidayVillage size={28} />, label: 'Homestays & Villas', path: '/homestays' },
  { icon: <MdCardTravel size={28} />, label: 'Holiday Packages', path: '/holiday-packages' },
  { icon: <MdTrain size={28} />, label: 'Trains', path: '/trains' },
  { icon: <MdDirectionsBus size={28} />, label: 'Buses', path: '/buses' },
  { icon: <MdLocalTaxi size={28} />, label: 'Cabs', path: '/cabs' },
  { icon: <FaShip size={24} />, label: 'Cruise', path: '/cruise', new: true },
];
const Hotels =()=>{
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
            {/* Top Filters */}
            <div className="flex flex-wrap items-center gap-6 justify-between">
                <div className="flex items-center gap-3">
                <input
                    type="radio"
                    checked
                    readOnly
                    className="accent-blue-600"
                />
                <span className="text-sm font-semibold text-gray-800">
                    Upto 4 Rooms
                </span>
                <input type="radio" className="accent-blue-600 ml-6" />
                <span className="text-sm text-gray-700">Group Deals</span>
                <span className="bg-pink-200 text-pink-800 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                    new
                </span>
                </div>
                <div className="text-sm text-gray-800">
                Book Domestic and International Property Online. To list your property{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                    Click Here
                </a>
                </div>
            </div>

            {/* Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-5 border rounded-lg overflow-hidden divide-x text-center text-gray-700 text-sm">
                <div className="p-4">
                <p className="text-xs">City, Property Name Or Location</p>
                <h2 className="text-2xl font-bold">Goa</h2>
                <span className="text-xs text-gray-500">India</span>
                </div>
                <div className="p-4">
                <p className="text-xs">Check-In</p>
                <h2 className="text-2xl font-bold">8 <span className="text-base font-normal">Aug'25</span></h2>
                <span className="text-xs text-gray-500">Friday</span>
                </div>
                <div className="p-4">
                <p className="text-xs">Check-Out</p>
                <h2 className="text-2xl font-bold">9 <span className="text-base font-normal">Aug'25</span></h2>
                <span className="text-xs text-gray-500">Saturday</span>
                </div>
                <div className="p-4">
                <p className="text-xs">Rooms & Guests</p>
                <h2 className="text-xl font-bold">1 <span className="font-normal">Rooms</span> 2 <span className="font-normal">Adults</span></h2>
                </div>
                <div className="p-4">
                <p className="text-xs">Price Per Night</p>
                <h2 className="text-sm font-medium">₹0-₹1500, ₹1500-₹2500,...</h2>
                </div>
            </div>

            {/* Trending Searches */}
            <div className="text-sm text-gray-700 pt-2">
                <span className="font-semibold">Trending Searches:</span>
                <button className="ml-2 bg-gray-100 px-3 py-1 rounded-md mr-2 hover:bg-gray-200">
                Bangkok, Thailand
                </button>
                <button className="bg-gray-100 px-3 py-1 rounded-md mr-2 hover:bg-gray-200">
                Dubai, United Arab Emirates
                </button>
                <button className="bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
                Singapore, Singapore
                </button>
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
</>
    );
};
export default Hotels;