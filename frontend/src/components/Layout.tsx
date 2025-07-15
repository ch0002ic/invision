import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Bell,
  Home,
  Eye,
  FileText,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown
} from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import profilePic from "../assets/profilepic.png"
import TotalManholeLogo from "../assets/TotalManhole.png"

interface LayoutProps {
  children: React.ReactNode
  lastUpdated?: string
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Update last updated time every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Format the date for display
  const formatLastUpdated = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(',', '')
  }

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.includes(path)) return true
    return false
  }

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleLogout = () => {
    // Navigate to dashboard1 (which is now the home page)
    navigate("/dashboard1")
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      {/* Floating Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-52 z-30 bg-white rounded-2xl shadow-sm border border-[#f0f2f5] flex flex-col transition-all">
        <div className="p-4 border-b border-[#f0f2f5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={TotalManholeLogo} 
                alt="Total Manhole Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h1 className="font-semibold text-[#292d32] text-sm">Smart Manhole</h1>
              <p className="text-xs text-[#bfc8d6]">Monitoring System</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              onClick={() => handleNavigation("/dashboard1")}
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all flex items-center ${
                isActive("/dashboard1")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <Home className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 text-left">Home</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation("/dashboard2")}
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all flex items-center ${
                isActive("/dashboard2")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <Eye className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 text-left">E-Hole</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation("/dashboard4")}
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all flex items-center ${
                isActive("/dashboard4") || isActive("/dashboard5")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 text-left">Reporting Case</span>
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium text-[#d1d5db] mb-2">Support</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base flex items-center">
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left">Get Started</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base flex items-center">
                <Settings className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left">Settings</span>
              </Button>
            </div>
          </div>
        </nav>
        <div className="mt-auto p-4">
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2] rounded-lg font-semibold !text-base flex items-center"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1 text-left">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content Floating Card Group */}
      <main className="flex-1 flex flex-col ml-[14.5rem] mr-6 mt-6 mb-6">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-12 py-8">
            {/* Header */}
            <header className="flex items-center justify-between mb-6 pt-0 pb-2 min-h-[44px]">
              <p className="text-xs text-[#626569] font-medium pt-4">
                Last Updated: {formatLastUpdated(lastUpdated)}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Button variant="ghost" size="icon" className="relative p-0 h-10 w-10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#9098a3]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#df0404] rounded-full border-2 border-white shadow" />
                </Button>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-[#f7f9fb] px-2 py-1 rounded-lg transition">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={profilePic} />
                  </Avatar>
                  <span className="text-sm font-medium text-[#292d32]">Melody Wong</span>
                  <ChevronDown className="w-4 h-4 text-[#9098a3]" />
                </div>
              </div>
            </header>

            {/* Page Content */}
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
