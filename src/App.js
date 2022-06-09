import "./sass/style.scss";
import Index from "./components/index/Index";
/* import Nav from "./components/layout/Nav"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./components/pages/download/Download";
import Nitro from "./components/pages/support/nitro/Nitro";
import Safety from "./components/pages/safety/Safety";
import Support from "./components/pages/support/Support";
import Blog from "./components/pages/blog/Blog";
import Careers from "./components/pages/careers/Careers";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/download" element={<Download />} />
        <Route path="/nitro" element={<Nitro />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
