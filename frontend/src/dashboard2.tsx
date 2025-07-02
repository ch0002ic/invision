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
    <div className="flex min-h-screen bg-[#f7f9fb]">
      {/* Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-56 z-30 bg-white rounded-2xl shadow-sm border border-[#f0f2f5] flex flex-col transition-all">
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
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base transition-all font-semibold ${
                  activeNav === item.name
                    ? 'bg-[#f5f7fa] text-[#1b59f8] border-l-4 border-[#1b59f8]'
                    : 'text-[#bfc8d6] hover:bg-[#f5f7fa] border-l-4 border-transparent'
                }`}
                onClick={() => setActiveNav(item.name)}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Button>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium text-[#d1d5db] mb-2">Support</p>
            <div className="space-y-1">
              {supportItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f5f7fa] rounded-lg !pl-5 !py-2 !text-base"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </nav>
        <div className="mt-auto p-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2] rounded-lg font-semibold !text-base">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Floating Card */}
      <main className="flex-1 flex flex-col ml-[15rem] mr-6 mt-6 mb-6">
        <div className="max-w-[1500px] mx-auto w-full">
          {/* Header */}
          <header className="flex items-center justify-between mb-4 pt-2 pb-2">
            <div></div>
            <p className="text-xs text-[#cfd8e3] font-medium mt-1">Last Updated: 2025-01-15 14:32</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative p-2 h-9 w-9">
                <Bell className="w-5 h-5 text-[#bfc8d6]" />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#df0404] rounded-full border-2 border-white"></div>
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
                </Avatar>
                <span className="text-sm font-semibold text-[#292d32]">Melody Wong</span>
              </div>
            </div>
          </header>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 bg-white rounded-full border border-[#e5e7eb] flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Manhole Device"
                    width={100}
                    height={100}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold">E-Hole : 237001</h1>
                    <Button variant="ghost" size="icon" className="p-1">
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
              <Button className="bg-white border border-[#e5e7eb] text-[#292d32] hover:bg-[#f8f8fb] shadow-md rounded-lg px-6 py-2 font-semibold text-base">Control Panel</Button>
            </div>

            {/* Device Details Card */}
            <Card className="mb-8 shadow-md border border-[#f0f2f5] rounded-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Device Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Type</div>
                    <div className="font-semibold text-[#292d32]">Standard Manholes</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Location</div>
                    <div className="font-semibold text-[#292d32]">Faculty of Engineering Universiti Malaya</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Status</div>
                    <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7] font-semibold">Active</Badge>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Maintenance Frequency</div>
                    <div className="font-semibold text-[#292d32]">4 times in a month</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6 mt-6">
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Gas Threshold</div>
                    <div className="font-semibold text-[#292d32]">300 ppm</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Water Level Threshold</div>
                    <div className="font-semibold text-[#292d32]">800 cm</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Inflow & Outflow Pipe</div>
                    <div className="font-semibold text-[#292d32]">-</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#bfc8d6] mb-1">Person In-Charge</div>
                    <div className="font-semibold text-[#1b59f8]">Ze Xun, Xin Ru</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gauges and Charts */}
            <div className="grid grid-cols-3 gap-8">
              {/* Left Column - Gauges */}
              <div className="space-y-6">
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardContent className="pt-4 pb-2">
                    <CircularGauge
                      title="Methane Value"
                      value="215.6 ppm"
                      min={0}
                      max={250}
                      current={215.6}
                      color="#2563eb"
                    />
                  </CardContent>
                </Card>
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardContent className="pt-4 pb-2">
                    <CircularGauge title="Roll Angle" value="0°" min={0} max={1.0} current={0} color="#2563eb" />
                  </CardContent>
                </Card>
              </div>

              {/* Middle Column - Gauges */}
              <div className="space-y-6">
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardContent className="pt-4 pb-2">
                    <CircularGauge title="Pitch Angle" value="0°" min={0} max={1.0} current={0} color="#2563eb" />
                  </CardContent>
                </Card>
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardContent className="pt-4 pb-2">
                    <CircularGauge title="Water Level" value="780 mm" min={0} max={1000} current={780} color="#2563eb" />
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Charts */}
              <div className="space-y-6">
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold">Methane Graph</CardTitle>
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
                <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold">Water Level Graph</CardTitle>
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
          </div>
        </div>
      </main>
    </div>
  )
}
