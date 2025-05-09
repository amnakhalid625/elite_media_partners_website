import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/home/Home";
import Accounting from './page/Accounting';
import Strategy from "./page/Strategy";
import Consult from './page/Consult';
import Fundraising from './page/Fundrasing'; 
import RiskAdvisory from './page/RiskAdvisor';
import Planning from './page/Planning';
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Person1 from "./page/Person1";
import Person2 from "./page/Person2";
import Person3 from "./page/Person3";
import Person4 from "./page/Person4";
import Person5 from "./page/Person5";
import Person6 from "./page/Person6";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/accounting' element={<Accounting />} />
          <Route path='/strategy' element={<Strategy />} />
          <Route path='/consult' element={<Consult />} />
          <Route path='/fundraising' element={<Fundraising />} /> 
          <Route path='/riskAdvisory' element={<RiskAdvisory />} />
          <Route path='/planning' element={<Planning />} />
          <Route path ='/about' element={<AboutUs />} />
          <Route path ='/contact' element={<ContactUs />} />
          <Route path ='/team/aamer-waqar' element={<Person1 />} />
          <Route path ='/team/aliza-ishfaq' element={<Person2 />} />
          <Route path ='/team/mehak-irfan' element={<Person3 />} />
          <Route path ='/team/ayesha-qasim' element={<Person4 />} />
          <Route path ='/team/ayesha-qasim' element={<Person5 />} />
          <Route path ='/team/ayesha-qasim' element={<Person6 />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
