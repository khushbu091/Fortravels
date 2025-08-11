import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import ToursAndAttractions from "./pages/Tours & Attractions";
import LoginPage from "./component/login";
import FlightTab from "./pages/FlightTab";
import Hotels from "./pages/hotels";
import HomeStays from "./pages/homeStay";
import HolidayPackages from "./pages/holidayPackage";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<ToursAndAttractions/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ToursAndAttractions" element={<ToursAndAttractions/>}/>
          <Route path="/flights" element={<FlightTab/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/homeStay" element={<HomeStays/>}/>
          <Route path="/holiday-packages" element={<HolidayPackages/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
