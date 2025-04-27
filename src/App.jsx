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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
