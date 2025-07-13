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
import { RefreshCw } from "lucide-react"
import profilePic from "./assets/profilepic.png";
import TotalManholeIcon from "./assets/TotalManhole.png";
import { Check } from "lucide-react";


export default function Dashboard1() {
  const [activeFilter, setActiveFilter] = useState("All Manholes")

  // Weather API integration (Penang, Malaysia)
const [weather, setWeather] = useState({
  temp: null as number | null,
  feelsLike: null as number | null,
  desc: "",
  icon: "",
  windSpeed: null as number | null,
  windDeg: null as number | null,
  pressure: null as number | null,
  humidity: null as number | null,
  visibility: null as number | null,
  city: "Penang",
  country: "MY",
  loading: true,
})

useEffect(() => {
  fetchWeather()
}, [])


const fetchWeather = async () => {
  setWeather((w) => ({ ...w, loading: true }))
  try {
    const apiKey = "0c152ca23179fadb18e16da545ce1d20"
    const lat = 5.4141
    const lon = 100.3288
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const res = await axios.get(url)
    const data = res.data

    setWeather({
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      visibility: data.visibility,
      city: data.name,
      country: data.sys.country,
      loading: false,
    })
  } catch (e) {
    console.error("Weather fetch error:", e)
    setWeather((w) => ({ ...w, loading: false }))
  }
}


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
  {/* Last Updated on the left */}
  <p className="text-xs text-[#626569] font-medium pt-4">
    Last Updated: 2025-01-15 14:32
  </p>

          {/* Notification + Profile on the right */}
          <div className="flex items-center gap-4 mt-2">
            {/* Notification Bell */}
            <Button variant="ghost" size="icon" className="relative p-0 h-10 w-10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-[#9098a3]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#df0404] rounded-full border-2 border-white shadow" />
            </Button>

            {/* Avatar + Name */}
            <div className="flex items-center gap-2">
             <Avatar className="w-8 h-8">
            <AvatarImage src={profilePic} />
          </Avatar>
              <span className="text-sm font-normal text-[#5a6473]">Melody Wong</span>
            </div>
          </div>
        </header>



          {/* Metrics Cards */}
          <div className="flex gap-7 mb-7">
            {/* Total Manholes */}
            <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Total Manholes</p>
                  <p className="text-2xl font-bold text-[#292d32]">24</p>
                </div>
                <div className="w-8 h-8 bg-[#eaf1ff] rounded-lg flex items-center justify-center">
                  <img
                    src={TotalManholeIcon}
                    alt="Total Manholes Icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Active Alerts */}
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

            {/* Normal Status */}
            <Card className="flex-1 bg-white border border-[#f0f2f5] shadow rounded-lg">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-[#bfc8d6] mb-1 font-semibold">Normal Status</p>
                  <p className="text-2xl font-bold text-[#292d32]">19</p>
                </div>
                <div className="w-8 h-8 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#16a34a]" />
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Due */}
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
              <CardContent className="flex-1 flex flex-col">
                <div className="relative flex-1 rounded-lg overflow-hidden mb-2">
                  <iframe
                    title="Penang Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=100.3198%2C5.4041%2C100.3378%2C5.4241&layer=mapnik&marker=5.4141%2C100.3288"
                    className="absolute inset-0 w-full h-full border-0 z-0"
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
  <CardTitle className="ml-4 mt-2 text-base font-bold text-[#292d32]">
    Weather Info
  </CardTitle>
</CardHeader>
<CardContent className="flex flex-col items-center text-center space-y-3">
  {weather.loading ? (
    <div className="text-gray-500 text-sm">Loading...</div>
  ) : (
    <>
      <div className="flex items-center gap-2 justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Weather Icon"
          className="w-12 h-12"
        />
        <div className="text-3xl font-bold text-[#292d32]">
          {weather.temp !== null ? `${weather.temp}°C` : "--"}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={fetchWeather}
          disabled={weather.loading}
          className="text-[#1b59f8] hover:bg-[#e5e7eb] rounded-full"
          title="Refresh"
        >
          <RefreshCw className={`w-4 h-4 ${weather.loading ? "animate-spin" : ""}`} />
        </Button>
      </div>
<div className="w-full flex">
  <div className="ml-12 flex flex-col gap-1 text-sm text-[#6b7280] w-full max-w-md">
    {[
      { icon: "💨", label: "Wind", value: `${weather.windSpeed} m/s ${degToCompass(weather.windDeg)}` },
      { icon: "🌡", label: "Pressure", value: `${weather.pressure} hPa` },
      { icon: "💧", label: "Humidity", value: `${weather.humidity}%` },
      { icon: "👁", label: "Visibility", value: `${(weather.visibility || 0) / 1000} km` },
    ].map((item, i) => (
      <div key={i} className="grid grid-cols-[1.5rem_6rem_1fr] items-start text-left">
        <span>{item.icon}</span>
        <span>{item.label}:</span>
        <span>{item.value}</span>
      </div>
    ))}
  </div>
</div>
<div className="relative -top-1.5 text-xs text-gray-400">
  {weather.city}, {weather.country}
</div>

    </>
  )}
</CardContent>
</Card>

<Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-1">
  <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="ml-4 mt-2 text-base font-bold text-[#292d32]">
    Active Alerts
  </CardTitle>
    <Button variant="ghost" className="text-[#1b59f8] text-xs p-4 h-auto font-semibold">
      View All
    </Button>
  </CardHeader>

<CardContent className="px-4 pb-4 space-y-3 mt-[-4px]">
  {alerts.map((alert, index) => {
    const alertStyles =
      alert.type === "Critical"
        ? "bg-[#fef2f2] border-[#fecaca] text-[#dc2626]"
        : alert.type === "Warning"
        ? "bg-[#fff7ed] border-[#fde68a] text-[#ea580c]"
        : "bg-[#f5f3ff] border-[#d8b4fe] text-[#7e22ce]";

    return (
      <div
        key={index}
        className={`border rounded-md p-2 ${alertStyles} text-sm`}
      >
        <div className="flex justify-between font-semibold">
          <span>{alert.id}</span>
          <span>{alert.type}</span>
        </div>
        <p className="mt-0.5 text-[#292d32]">{alert.message}</p>
        {alert.time && (
          <p className="mt-0.5 text-xs text-[#6b7280]">{alert.time}</p>
        )}
      </div>
    );
  })}
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
                <span className="text-xs text-[#868a91]">Sort by:</span>
                <Select defaultValue="newest" className="text-xs">
                  <SelectTrigger className="w-28 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-xs"> {/* 👈 smaller text */}
                    <SelectItem value="newest" className="text-xs">Newest</SelectItem>
                    <SelectItem value="oldest" className="text-xs">Oldest</SelectItem>
                    <SelectItem value="status" className="text-xs">Status</SelectItem>
                  </SelectContent>
                </Select>
              </div>

                </div>
                {/* Table */}
          <div className="overflow-x-auto">
            <Table className="w-full table-fixed">
              <TableHeader>
                <TableRow className="border-[#f0f2f5] bg-[#f7f9fb]">
                  <TableHead className="w-1/6 text-center text-[#868a91] font-bold text-xs py-1.5">ID</TableHead>
                  <TableHead className="w-1/6 text-center text-[#868a91] font-semibold text-xs py-1.5">Location</TableHead>
                  <TableHead className="w-1/6 text-center text-[#868a91] font-semibold text-xs py-1.5">Type</TableHead>
                  <TableHead className="w-1/6 text-center text-[#868a91] font-semibold text-xs py-1.5">Water Threshold (cm)</TableHead>
                  <TableHead className="w-1/6 text-center text-[#868a91] font-semibold text-xs py-1.5">Gas Threshold (ppm)</TableHead>
                  <TableHead className="w-1/6 text-center text-[#868a91] font-semibold text-xs py-1.5">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {manholeData.map((item) => (
                  <TableRow key={item.id} className="border-[#f0f2f5] hover:bg-[#f9fbff]">
                    <TableCell className="w-1/6 text-center font-bold text-[#292d32] text-xs py-1.5">{item.id}</TableCell>
                      <TableCell className="w-1/6 text-center text-[#292d32] text-xs py-1.5">{item.location}</TableCell>
                      <TableCell className="w-1/6 text-center text-[#292d32] text-xs py-1.5">{item.type}</TableCell>
                      <TableCell className="w-1/6 text-center text-[#292d32] text-xs py-1.5">{item.waterThreshold}</TableCell>
                      <TableCell className="w-1/6 text-center text-[#292d32] text-xs py-1.5">{item.gasThreshold}</TableCell>
                      <TableCell className="w-1/6 text-center py-3">
                        <div className="inline-block px-2 py-1">
                          <Badge
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              item.status === "Critical"
                                ? "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]"
                                : "bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-[#f0f2f5]">
              <p className="text-xs text-[#bfc8d6]">Showing data 1 to 8 of 256k entries</p>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-[#1b59f8] text-white rounded-full font-bold text-xs px-4 py-2 h-9"
                >
                  1
                </Button>
                {[2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    size="sm"
                    className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs px-4 py-2 h-9"
                  >
                    {page}
                  </Button>
                ))}
                <span className="text-[#bfc8d6] text-xs px-2">...</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#e7e7e7] bg-transparent rounded-full font-bold text-xs px-4 py-2 h-9"
                >
                  40
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9"
                >
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
  function degToCompass(deg: number | null): string {
  if (deg === null) return ""
  const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
                      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
  const index = Math.floor((deg / 22.5) + 0.5) % 16
  return directions[index]
}

}
