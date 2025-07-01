"use client"

import { useState } from "react"
import { Bell, Edit, Home, FileText, HelpCircle, Settings, LogOut, Battery } from "lucide-react"
import { Button } from "./components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"

export default function Dashboard2() {
  const [activeNav, setActiveNav] = useState("E-Hole")

  const navItems = [
    { name: "Home", icon: Home },
    { name: "E-Hole", icon: FileText },
    { name: "Reporting Case", icon: FileText },
  ]

  const supportItems = [
    { name: "Get Started", icon: HelpCircle },
    { name: "Settings", icon: Settings },
  ]

  // Gauge component for circular meters
  const CircularGauge = ({
    title,
    value,
    unit,
    min,
    max,
    current,
    color = "#2563eb",
  }: {
    title: string
    value: string
    unit?: string
    min: number
    max: number
    current: number
    color?: string
  }) => {
    const percentage = ((current - min) / (max - min)) * 100
    const strokeDasharray = 2 * Math.PI * 45
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100

    return (
      <Card className="p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="8" fill="none" />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke={color}
                strokeWidth="8"
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
            {/* Center value */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">{value}</div>
                {unit && <div className="text-xs text-gray-500">{unit}</div>}
              </div>
            </div>
            {/* Needle/pointer */}
            <div
              className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-black origin-bottom transform -translate-x-1/2 -translate-y-8"
              style={{
                transform: `translate(-50%, -100%) rotate(${(percentage * 180) / 100 - 90}deg)`,
                transformOrigin: "bottom center",
              }}
            />
          </div>
          {/* Scale labels */}
          <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex h-screen bg-[#fafbff]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0e52ff] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <div className="font-semibold text-[#000000]">Smart Manhole</div>
              <div className="text-sm text-[#9798a1]">Monitoring System</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeNav === item.name ? "bg-[#eff0f6] text-[#0e52ff]" : "text-[#9798a1] hover:bg-[#f8f8fb]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="mt-8">
            <div className="text-sm font-medium text-[#9798a1] mb-3">Support</div>
            <nav className="space-y-2">
              {supportItems.map((item) => (
                <button
                  key={item.name}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-[#9798a1] hover:bg-[#f8f8fb] transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-[#e5e7eb]">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-[#ff3b30] hover:bg-[#f8f8fb] transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#e5e7eb] px-6 py-4">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="text-sm text-[#9798a1]">Last Updated: 2025-01-15 14:32</div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Melody Wong</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Title Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-lg border border-[#e5e7eb] p-2">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Manhole Device"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  style={{ maxWidth: 80, maxHeight: 80 }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">E-Hole : 237001</h1>
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-6 bg-[#00b087] rounded-sm"></div>
                      ))}
                    </div>
                    <Battery className="w-4 h-4 text-[#00b087]" />
                    <span className="text-sm text-[#9798a1]">Battery</span>
                  </div>
                  <div className="font-semibold">11.24V</div>
                </div>
              </div>
            </div>
            <Button className="bg-white border border-[#e5e7eb] text-[#000000] hover:bg-[#f8f8fb]">
              Control Panel
            </Button>
          </div>

          {/* Device Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Device Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Type</div>
                  <div className="font-medium">Standard Manholes</div>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Location</div>
                  <div className="font-medium">Faculty of Engineering Universiti Malaya</div>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Status</div>
                  <Badge className="bg-[#00b087] hover:bg-[#008767]">Active</Badge>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Maintenance Frequency</div>
                  <div className="font-medium">4 times in a month</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 mt-6">
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Gas Threshold</div>
                  <div className="font-medium">300 ppm</div>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Water Level Threshold</div>
                  <div className="font-medium">800 cm</div>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Inflow & Outflow Pipe</div>
                  <div className="font-medium">-</div>
                </div>
                <div>
                  <div className="text-sm text-[#9798a1] mb-1">Person In-Charge</div>
                  <div className="font-medium text-[#0e52ff]">Ze Xun, Xin Ru</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gauges and Charts */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Gauges */}
            <div className="space-y-4">
              <CircularGauge
                title="Methane Value"
                value="215.6 ppm"
                min={0}
                max={250}
                current={215.6}
                color="#2563eb"
              />
              <CircularGauge title="Roll Angle" value="0°" min={0} max={1.0} current={0} color="#2563eb" />
            </div>

            {/* Middle Column - Gauges */}
            <div className="space-y-4">
              <CircularGauge title="Pitch Angle" value="0°" min={0} max={1.0} current={0} color="#2563eb" />
              <CircularGauge title="Water Level" value="780 mm" min={0} max={1000} current={780} color="#2563eb" />
            </div>

            {/* Right Column - Charts */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Methane Graph</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-[#f8fafd] rounded border flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="Methane Graph"
                      width={200}
                      height={120}
                      className="opacity-50"
                      style={{ maxWidth: 200, maxHeight: 120 }}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Water Level Graph</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-[#f8fafd] rounded border flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="Water Level Graph"
                      width={200}
                      height={120}
                      className="opacity-50"
                      style={{ maxWidth: 200, maxHeight: 120 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
