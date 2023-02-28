import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import ContactUs from "./pages/contact-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
