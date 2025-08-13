import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import ToursAndAttractions from "./pages/Tours & Attractions";
import LoginPage from "./component/login";
import FlightTab from "./pages/FlightTab";
import Hotels from "./pages/hotels";
import HomeStays from "./pages/homeStay";
import HolidayPackages from "./pages/holidayPackage";
import Trains from "./pages/trains";
import Buses from "./pages/buses";
import Cruise from "./pages/cruise";
import Cabs from "./pages/cabs";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Hotels/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/flights" element={<FlightTab/>}/>
          <Route path="/trains" element={<Trains/>}/>
          <Route path="/buses" element={<Buses/>}/>
          <Route path="/cabs" element={<Cabs/>}/>
          <Route path="/cruise" element={<Cruise/>}/>
          <Route path="/ToursAndAttractions" element={<ToursAndAttractions/>}/>
          <Route path="/homeStay" element={<HomeStays/>}/>
          <Route path="/holiday-packages" element={<HolidayPackages/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
