import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services.jsx"
import BookingPage from "./pages/BookingPage.jsx"
import DoctorDetails from "./pages/DoctorDetails.jsx"
import Contact from "./pages/Contact.jsx"
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/bookingPage" element={<BookingPage/>}/>
        <Route path="/doctorDetails" element={<DoctorDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
