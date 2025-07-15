import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Avatar, AvatarImage } from "./components/ui/avatar"
import {
  Bell,
  ChevronDown,
  HelpCircle,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const profilePic = "/path/to/profile-pic.jpg" // Replace with actual profile pic path

  const [showGetStarted, setShowGetStarted] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleGetStarted = () => {
    setShowGetStarted(true)
  }

  const handleSettings = () => {
    setShowSettings(true)
  }

  const handleProfile = () => {
    setShowProfile(true)
  }

  const handleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/")
    }
  }

  return (
    <div className="flex h-screen bg-[#f7f9fb]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#f0f2f5] flex flex-col">
        
        {/* Support Section */}
        <div className="p-6 border-t border-[#f0f2f5]">
          <h3 className="text-sm font-semibold text-[#292d32] mb-4">Support</h3>
          <div className="space-y-2">
            <button 
              onClick={handleGetStarted}
              className="flex items-center gap-3 w-full text-left p-2 text-sm text-[#6b7280] hover:text-[#1b59f8] hover:bg-[#f0f4ff] rounded-lg transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Get Started
            </button>
            <button 
              onClick={handleSettings}
              className="flex items-center gap-3 w-full text-left p-2 text-sm text-[#6b7280] hover:text-[#1b59f8] hover:bg-[#f0f4ff] rounded-lg transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <div className="flex items-center gap-3 w-full text-left p-2 text-sm text-[#6b7280] opacity-50 cursor-not-allowed rounded-lg">
              <LogOut className="w-4 h-4" />
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#f0f2f5] px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#292d32]">
            {location.pathname === '/' ? 'Home' : 
             location.pathname === '/dashboard1' ? 'E-Hole' :
             location.pathname === '/dashboard2' ? 'Control Panel' :
             location.pathname === '/dashboard3' ? 'Control Panel' :
             location.pathname === '/dashboard4' ? 'Reporting Case' :
             location.pathname === '/dashboard5' ? 'Reporting Case' :
             'Dashboard'}
          </h1>
          
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={handleNotifications}
                className="p-2 text-[#6b7280] hover:text-[#1b59f8] hover:bg-[#f0f4ff] rounded-lg transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white border border-[#f0f2f5] rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-[#f0f2f5]">
                    <h3 className="font-semibold text-[#292d32]">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="p-3 border-b border-[#f0f2f5] hover:bg-[#f8f9fa]">
                      <p className="text-sm font-medium text-[#292d32]">Critical Alert</p>
                      <p className="text-xs text-[#6b7280]">Water level 92% in manhole 237002</p>
                      <p className="text-xs text-[#9798a1] mt-1">2 minutes ago</p>
                    </div>
                    <div className="p-3 border-b border-[#f0f2f5] hover:bg-[#f8f9fa]">
                      <p className="text-sm font-medium text-[#292d32]">Maintenance Due</p>
                      <p className="text-xs text-[#6b7280]">Scheduled cleaning for manhole 237010</p>
                      <p className="text-xs text-[#9798a1] mt-1">15 minutes ago</p>
                    </div>
                    <div className="p-3 hover:bg-[#f8f9fa]">
                      <p className="text-sm font-medium text-[#292d32]">System Update</p>
                      <p className="text-xs text-[#6b7280]">New firmware available for sensor modules</p>
                      <p className="text-xs text-[#9798a1] mt-1">1 hour ago</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-[#f0f2f5]">
                    <button className="text-sm text-[#1b59f8] hover:underline">View all notifications</button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 hover:bg-[#f0f4ff] rounded-lg transition-colors"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={profilePic} alt="User" />
                </Avatar>
                <ChevronDown className="w-4 h-4 text-[#6b7280]" />
              </button>
              
              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-12 w-48 bg-white border border-[#f0f2f5] rounded-lg shadow-lg z-50">
                  <button 
                    onClick={() => { handleProfile(); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#f8f9fa] text-sm"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button 
                    onClick={() => { handleSettings(); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#f8f9fa] text-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button 
                    onClick={() => { handleLogout(); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#f8f9fa] text-sm border-t border-[#f0f2f5]"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>

      {/* Modals */}
      {/* Get Started Modal */}
      {showGetStarted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-md w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#292d32]">Get Started</h2>
              <button 
                onClick={() => setShowGetStarted(false)}
                className="p-1 hover:bg-[#f0f2f5] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#f8f9fa] rounded-lg">
                <h3 className="font-semibold text-[#292d32] mb-2">Quick Start Guide</h3>
                <ul className="text-sm text-[#6b7280] space-y-1">
                  <li>• Navigate between dashboards using the sidebar</li>
                  <li>• Monitor real-time manhole data in E-Hole dashboard</li>
                  <li>• Control devices using the Control Panel</li>
                  <li>• View alerts and reports in Reporting Case</li>
                </ul>
              </div>
              <button 
                onClick={() => setShowGetStarted(false)}
                className="w-full bg-[#1b59f8] text-white py-2 rounded-lg hover:bg-[#1548d4]"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-lg w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#292d32]">Settings</h2>
              <button 
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-[#f0f2f5] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#292d32] mb-2">Notification Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Critical alerts</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Maintenance reminders</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">System updates</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#292d32] mb-2">Dashboard Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Auto-refresh data</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Dark mode</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-[#f0f2f5]">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 border border-[#e5e7eb] text-[#292d32] py-2 rounded-lg hover:bg-[#f8f9fa]"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-[#1b59f8] text-white py-2 rounded-lg hover:bg-[#1548d4]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-md w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#292d32]">Profile</h2>
              <button 
                onClick={() => setShowProfile(false)}
                className="p-1 hover:bg-[#f0f2f5] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mb-6">
              <Avatar className="w-20 h-20 mx-auto mb-3">
                <AvatarImage src={profilePic} alt="User" />
              </Avatar>
              <h3 className="font-semibold text-[#292d32]">John Doe</h3>
              <p className="text-sm text-[#6b7280]">System Administrator</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-[#f8f9fa] rounded-lg">
                <p className="text-sm font-medium text-[#292d32]">Email</p>
                <p className="text-sm text-[#6b7280]">john.doe@company.com</p>
              </div>
              <div className="p-3 bg-[#f8f9fa] rounded-lg">
                <p className="text-sm font-medium text-[#292d32]">Last Login</p>
                <p className="text-sm text-[#6b7280]">2025-01-15 14:32</p>
              </div>
              <button 
                onClick={() => setShowProfile(false)}
                className="w-full bg-[#1b59f8] text-white py-2 rounded-lg hover:bg-[#1548d4]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout