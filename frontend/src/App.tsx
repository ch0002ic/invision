import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Dashboard1 from "./dashboard1";
import Dashboard2 from "./dashboard2";
import Dashboard3 from "./dashboard3";
import Dashboard4 from "./dashboard4";

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen bg-[#fafbff] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-[#292d32] mb-4">404</h1>
      <p className="text-xl text-[#6b7280] mb-6">Page not found</p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-[#1b59f8] hover:bg-[#1548d4] text-white px-6 py-3 rounded-lg font-semibold"
      >
        Go Home
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/dashboard4" element={<Dashboard4 />} />
        {/* Redirect old control-panel route to dashboard3 for backward compatibility */}
        <Route path="/control-panel/:id" element={<Navigate to="/dashboard3" replace />} />
        {/* 404 catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
