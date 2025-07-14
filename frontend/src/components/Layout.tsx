import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Bell, Home, Eye, FileText, HelpCircle, Settings, LogOut, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import profilePic from "../assets/profilepic.png"

interface LayoutProps {
  children: React.ReactNode
  lastUpdated?: string
}

export default function Layout({ children, lastUpdated = "2025-01-15 14:32" }: LayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.includes(path)) return true
    return false
  }

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleLogout = () => {
    // Add logout logic here
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      {/* Floating Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-52 z-30 bg-white rounded-2xl shadow-sm border border-[#f0f2f5] flex flex-col transition-all">
        <div className="p-4 border-b border-[#f0f2f5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1b59f8] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
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
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all ${
                isActive("/dashboard1")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation("/dashboard2")}
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all ${
                isActive("/dashboard2")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <Eye className="w-4 h-4" />
              E-Hole
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation("/dashboard4")}
              className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base border-l-4 transition-all ${
                isActive("/dashboard4") || isActive("/dashboard5")
                  ? "bg-[#f7f9fb] text-[#1b59f8] font-bold border-[#1b59f8] shadow-none !font-semibold"
                  : "text-[#bfc8d6] hover:bg-[#f7f9fb] border-transparent hover:text-[#292d32]"
              }`}
            >
              <FileText className="w-4 h-4" />
              Reporting Case
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium text-[#d1d5db] mb-2">Support</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base">
                <HelpCircle className="w-4 h-4" />
                Get Started
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>
        <div className="mt-auto p-4">
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2] rounded-lg font-semibold !text-base"
          >
            <LogOut className="w-4 h-4" />
            Logout
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
                Last Updated: {lastUpdated}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Button variant="ghost" size="icon" className="relative p-0 h-10 w-10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#9098a3]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#df0404] rounded-full border-2 border-white shadow" />
                </Button>
                
                {/* Profile Dropdown with Hover */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Button variant="ghost" className="flex items-center gap-1 p-0 h-10 min-w-0 hover:bg-transparent">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={profilePic} />
                      <AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-normal text-[#5a6473] ml-2">Melody Wong</span>
                    <ChevronDown className={`w-3 h-3 text-[#bfc8d6] ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 min-w-[160px] bg-white rounded-lg shadow-lg border border-[#f0f2f5] py-2 z-50">
                      <button 
                        className="w-full px-4 py-2 text-left text-sm text-[#292d32] hover:bg-[#f7f9fb] cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile Settings
                      </button>
                      <button 
                        className="w-full px-4 py-2 text-left text-sm text-[#292d32] hover:bg-[#f7f9fb] cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Account Settings
                      </button>
                      <button 
                        className="w-full px-4 py-2 text-left text-sm text-[#292d32] hover:bg-[#f7f9fb] cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Notifications
                      </button>
                      <div className="h-px bg-[#f0f2f5] my-1"></div>
                      <button 
                        className="w-full px-4 py-2 text-left text-sm text-[#df0404] hover:bg-[#fef2f2] cursor-pointer flex items-center"
                        onClick={() => {
                          setIsDropdownOpen(false)
                          handleLogout()
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
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
