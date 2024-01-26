import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "../pages/Homes";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Work from "../pages/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
