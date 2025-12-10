import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Component/Loader";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import About from "./Pages/About";
import DCA from "./Pages/Course/DCA";
import PGDCA from "./Pages/Course/PGDCA";
import TallyPrimeCourse from "./Pages/Course/Tally";
import CCA from "./Pages/Course/CCA";
import ADCA from "./Pages/Course/ADCA";
import BasicComputerCourse from "./Pages/Course/BasicComputerCourse";
import Services from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Login from "./Pages/Login";
import PricingPage from "./Pages/Pricing";
import CommunityPage from "./Pages/Community";
import PrivacyPolicy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dca" element={<DCA />} />
        <Route path="/pgdca" element={<PGDCA />} />
        <Route path="/tally" element={<TallyPrimeCourse />} />
        <Route path="/cca" element={<CCA />} />
        <Route path="/adca" element={<ADCA />} />
        <Route path="/basic" element={<BasicComputerCourse />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
