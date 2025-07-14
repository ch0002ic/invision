import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Dashboard1 from "./dashboard1";
import Dashboard2 from "./dashboard2";
import Dashboard3 from "./dashboard3";
import Dashboard4 from "./dashboard4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/dashboard4" element={<Dashboard4 />} />
      </Routes>
    </BrowserRouter>
  );
}
