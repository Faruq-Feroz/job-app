import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Select from './Components/Select';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';
import JobListing from './Components/Joblisting';
import JobDetail from './Components/JobDetail';
import JobPostSection from './Components/JobPostSection'; 
import TestimonialCarousel from './TestimonialCarousel';
import Partners from './Partners';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Select />
      <Hero />
      <SearchBar />
      <Categories />

      <Routes>
        <Route path="/" element={<JobListing />} /> {/* Updated component */}
        <Route path="/job/:jobTitle" element={<JobDetail />} />
      </Routes>
      <JobPostSection />
      <TestimonialCarousel />
      <Partners />
      <Footer />
    </Router>
  );
};

export default App;
