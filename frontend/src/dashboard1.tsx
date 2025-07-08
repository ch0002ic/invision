"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
  Bell,
  ChevronDown,
  Settings,
  Home,
  FileText,
  HelpCircle,
  LogOut,
  Eye,
  Cloud,
  AlertTriangle,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

export default function Dashboard1() {
  const [activeFilter, setActiveFilter] = useState("All Manholes")

  // Weather API integration (Penang, Malaysia)
  const [weather, setWeather] = useState({
    temp: null as number | null,
    icon: "",
    main: "",
    city: "Penang",
    country: "MY",
    loading: true,
    desc: "",
  })

  const fetchWeather = async () => {
    setWeather((w) => ({ ...w, loading: true }))
    try {
      const apiKey = "YOUR_OPENWEATHERMAP_API_KEY" // <-- Replace with your API key
      const lat = 5.4141
      const lon = 100.3288
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      const res = await axios.get(url)
      const data = res.data
      setWeather({
        temp: Math.round(data.main.temp),
        icon: data.weather[0].icon,
        main: data.weather[0].main,
        city: data.name || "Penang",
        country: data.sys.country || "MY",
        loading: false,
        desc: data.weather[0].description,
      })
    } catch (e) {
      setWeather((w) => ({ ...w, loading: false }))
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const manholeData = [
    {
      id: "237001",
      location: "Universiti Malaya",
      type: "Standard",
      waterThreshold: 800,
      gasThreshold: 300,
      status: "Active",
    },
    {
      id: "237002",
      location: "Seberang Perai",
      type: "Standard",
      waterThreshold: 2000,
      gasThreshold: 350,
      status: "Critical",
    },
    { id: "237003", location: "Air Hitam", type: "Standard", waterThreshold: 800, gasThreshold: 299, status: "Active" },
    { id: "237004", location: "Kulim", type: "Standard", waterThreshold: 789, gasThreshold: 298, status: "Active" },
    { id: "237005", location: "Setapak", type: "Standard", waterThreshold: 805, gasThreshold: 301, status: "Active" },
    { id: "237006", location: "Air Tawar", type: "Standard", waterThreshold: 798, gasThreshold: 295, status: "Active" },
    { id: "237007", location: "Jelutong", type: "Standard", waterThreshold: 802, gasThreshold: 291, status: "Active" },
    {
      id: "237008",
      location: "Butterworth",
      type: "Standard",
      waterThreshold: 800,
      gasThreshold: 310,
      status: "Active",
    },
  ]

  const alerts = [
    { id: "237002", type: "Critical", message: "Water level 92% - Immediate action required", time: "2 minutes ago" },
    { id: "237009", type: "Warning", message: "Water level 67% - Monitor closely", time: "15 minutes ago" },
    { id: "237010", type: "Maintenance", message: "Scheduled cleaning in 2 days", time: "" },
  ]

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
              className="w-full justify-start gap-3 bg-[#f7f9fb] text-[#1b59f8] font-bold rounded-lg border-l-4 border-[#1b59f8] !pl-5 !py-2 shadow-none !text-base !font-semibold"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base">
              <Eye className="w-4 h-4" />
              E-Hole
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f7f9fb] rounded-lg !pl-5 !py-2 !text-base">
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
          <Button variant="ghost" className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2] rounded-lg font-semibold !text-base">
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
              <p className="text-xs text-[#e3e8ee] font-medium mt-0 ml-0 absolute left-0 top-0 pt-4 pl-12">Last Updated: 2025-01-15 14:32</p>
              <div className="flex items-center gap-3 ml-auto mt-2 mr-1 relative z-10">
                <Button variant="ghost" size="icon" className="relative p-0 h-10 w-10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#9098a3]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#df0404] rounded-full border-2 border-white shadow"></div>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 p-0 h-10 min-w-0">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-normal text-[#5a6473] ml-2">Melody Wong</span>
                      <ChevronDown className="w-3 h-3 text-[#bfc8d6] ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[120px] px-0 py-1">
                    <DropdownMenuItem className="px-4 py-1 text-left">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-1 text-left">Settings</DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-1 text-left">Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            {/* Metrics Cards */}
            <div className="flex gap-7 mb-7">
              <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Total Manholes</p>
                    <p className="text-2xl font-bold text-[#292d32]">24</p>
                  </div>
                  <div className="w-8 h-8 bg-[#eaf1ff] rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#2563eb] rounded"></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Active Alerts</p>
                    <p className="text-2xl font-bold text-[#292d32]">3</p>
                  </div>
                  <div className="w-8 h-8 bg-[#fee2e2] rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-[#dc2626]" />
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Normal Status</p>
                    <p className="text-2xl font-bold text-[#292d32]">19</p>
                  </div>
                  <div className="w-8 h-8 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#16a34a] rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Maintenance Due</p>
                    <p className="text-2xl font-bold text-[#292d32]">2</p>
                  </div>
                  <div className="w-8 h-8 bg-[#ffedd5] rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#ea580c]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-7 mb-7">
              {/* Map Section */}
              <Card className="flex-[2.5] bg-white border border-[#f0f2f5] shadow rounded-xl flex flex-col justify-between min-h-[340px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-[#292d32]">Penang Overview Map</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="relative h-72 rounded-lg overflow-hidden mb-2">
                    {/* OpenStreetMap static embed centered at Penang, Malaysia, bbox width ~0.018 deg = ~2km at Penang's latitude */}
                    <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                      {/* SVG circle overlay for 1km radius (now matches map width) */}
                      <svg width="100%" height="100%" viewBox="0 0 400 220" className="absolute top-0 left-0">
                        <circle cx="200" cy="110" r="100" fill="rgba(27,89,248,0.15)" stroke="#1b59f8" strokeWidth="2" />
                      </svg>
                    </div>
                    <iframe
                      title="Penang Map"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=100.3198%2C5.4041%2C100.3378%2C5.4241&layer=mapnik&marker=5.4141%2C100.3288"
                      className="w-full h-full border-0 z-0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Legend */}
                  <div className="flex items-center justify-center gap-7 mt-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#16a34a] rounded-full"></div>
                      <span className="text-[#bfc8d6]">Normal (0-25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ea580c] rounded-full"></div>
                      <span className="text-[#bfc8d6]">Warning (26-60%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#dc2626] rounded-full"></div>
                      <span className="text-[#bfc8d6]">Critical (61-100%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#7e22ce] rounded-full"></div>
                      <span className="text-[#bfc8d6]">Maintenance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Panel Floating Card */}
              <div className="flex-1 flex flex-col gap-7 min-w-[320px]">
                {/* Weather Card */}
                <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-[#292d32]">Weather Forecast</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-3 mb-2">
                      {weather.loading ? (
                        <div className="w-12 h-12 bg-[#f5f7fa] rounded-full animate-pulse" />
                      ) : (
                        <img
                          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                          alt="Weather Icon"
                          className="w-12 h-12"
                        />
                      )}
                      <span className="text-3xl font-bold text-[#292d32]">
                        {weather.loading || weather.temp === null ? "--" : `${weather.temp}°C`}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-[#1b59f8] mb-1">
                      {weather.city}, {weather.country}
                    </div>
                    <div className="text-base text-[#7e7e7e] capitalize">
                      {weather.loading ? "Loading..." : weather.desc || weather.main}
                    </div>
                    <Button
                      className="mt-2 px-4 py-2 bg-[#f5f7fa] text-[#1b59f8] rounded-full font-semibold text-sm hover:bg-[#e5e7eb] transition"
                      onClick={fetchWeather}
                      disabled={weather.loading}
                    >
                      {weather.loading ? "Refreshing..." : "Refresh"}
                    </Button>
                  </CardContent>
                </Card>
                {/* Active Alerts card */}
                <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-1">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-base font-bold text-[#292d32]">Active Alerts</CardTitle>
                    <Button variant="ghost" className="text-[#1b59f8] text-xs p-0 h-auto font-semibold">
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {alerts.map((alert, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-start gap-2">
                          <Badge
                            className={`text-xs font-semibold ${
                              alert.type === "Critical"
                                ? "bg-[#fee2e2] text-[#dc2626]"
                                : alert.type === "Warning"
                                ? "bg-[#ffedd5] text-[#ea580c]"
                                : "bg-[#e9d5ff] text-[#7e22ce]"
                            }`}
                          >
                            {alert.id}
                          </Badge>
                          <Badge
                            className={`text-xs font-semibold ${
                              alert.type === "Critical"
                                ? "bg-[#fee2e2] text-[#dc2626]"
                                : alert.type === "Warning"
                                ? "bg-[#ffedd5] text-[#ea580c]"
                                : "bg-[#e9d5ff] text-[#7e22ce]"
                            }`}
                          >
                            {alert.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-[#292d32] font-medium">{alert.message}</p>
                        {alert.time && <p className="text-xs text-[#bfc8d6]">{alert.time}</p>}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Table Floating Card - visually connected to map card */}
            <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl mt-0">
              <CardContent className="p-0">
                {/* Table Filters as Pills */}
                <div className="flex items-center justify-between p-4 border-b border-[#f0f2f5]">
                  <div className="flex items-center gap-2">
                    <Button
                      variant={activeFilter === "All Manholes" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter("All Manholes")}
                      className={`rounded-full px-4 py-1 text-xs font-semibold ${activeFilter === "All Manholes" ? "bg-[#292d32] text-white" : "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"}`}
                    >
                      All Manholes
                    </Button>
                    <Button
                      variant={activeFilter === "Critical Only" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter("Critical Only")}
                      className={`rounded-full px-4 py-1 text-xs font-semibold ${activeFilter === "Critical Only" ? "bg-[#292d32] text-white" : "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"}`}
                    >
                      Critical Only
                    </Button>
                    <Button
                      variant={activeFilter === "Maintenance Due" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter("Maintenance Due")}
                      className={`rounded-full px-4 py-1 text-xs font-semibold ${activeFilter === "Maintenance Due" ? "bg-[#292d32] text-white" : "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"}`}
                    >
                      Maintenance Due
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#bfc8d6]">Sort by:</span>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-28 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                        <SelectItem value="status">Status</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* Table */}
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#f0f2f5] bg-[#f7f9fb]">
                      <TableHead className="text-[#292d32] font-bold text-xs">ID</TableHead>
                      <TableHead className="text-[#bfc8d6] font-semibold text-xs">Location</TableHead>
                      <TableHead className="text-[#bfc8d6] font-semibold text-xs">Type</TableHead>
                      <TableHead className="text-[#bfc8d6] font-semibold text-xs">Water Threshold (cm)</TableHead>
                      <TableHead className="text-[#bfc8d6] font-semibold text-xs">Gas Threshold (ppm)</TableHead>
                      <TableHead className="text-[#bfc8d6] font-semibold text-xs">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {manholeData.map((item) => (
                      <TableRow key={item.id} className="border-[#f0f2f5] hover:bg-[#f9fbff]">
                        <TableCell className="font-bold text-[#292d32] text-xs">{item.id}</TableCell>
                        <TableCell className="text-[#bfc8d6] text-xs">{item.location}</TableCell>
                        <TableCell className="text-[#bfc8d6] text-xs">{item.type}</TableCell>
                        <TableCell className="text-[#bfc8d6] text-xs">{item.waterThreshold}</TableCell>
                        <TableCell className="text-[#bfc8d6] text-xs">{item.gasThreshold}</TableCell>
                        <TableCell>
                          <Badge
                            className={`rounded-full px-3 py-1 text-xs font-bold ${item.status === "Critical"
                              ? "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]"
                              : "bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]"}`}
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t border-[#f0f2f5]">
                  <p className="text-xs text-[#bfc8d6]">Showing data 1 to 8 of 256k entries</p>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full text-xs">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="default" size="sm" className="bg-[#1b59f8] text-white rounded-full font-bold text-xs">1</Button>
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs">2</Button>
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs">3</Button>
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs">4</Button>
                    <span className="text-[#bfc8d6] text-xs">...</span>
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs">40</Button>
                    <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent rounded-full text-xs">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
