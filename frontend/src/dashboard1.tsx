"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
  AlertTriangle,
  Wrench,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Check
} from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import Layout from "./components/Layout"
import TotalManholeIcon from "./assets/TotalManhole.png"


export default function Dashboard1() {
  const [activeFilter, setActiveFilter] = useState("All Manholes")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("newest")

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

// Reset to page 1 when filters change
useEffect(() => {
  setCurrentPage(1)
}, [activeFilter, sortBy])


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

  // Filter and sort manhole data
  const getFilteredAndSortedData = () => {
    let filtered = manholeData

    // Apply filters
    if (activeFilter === "Critical Only") {
      filtered = manholeData.filter(item => item.status === "Critical")
    } else if (activeFilter === "Maintenance Due") {
      // For demo purposes, showing items that need maintenance (could be based on last maintenance date)
      filtered = manholeData.filter(item => item.id === "237002" || item.id === "237008")
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "newest") {
        return b.id.localeCompare(a.id) // Higher IDs first (newer)
      } else if (sortBy === "oldest") {
        return a.id.localeCompare(b.id) // Lower IDs first (older)
      } else if (sortBy === "status") {
        // Critical first, then Active
        if (a.status === "Critical" && b.status !== "Critical") return -1
        if (b.status === "Critical" && a.status !== "Critical") return 1
        return a.id.localeCompare(b.id)
      }
      return 0
    })

    return sorted
  }

  const filteredData = getFilteredAndSortedData()
  const itemsPerPage = 8
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  return (
    <Layout>
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

      {/* Weather & Map Container */}
      <div className="flex gap-7 mb-7">
        <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-none" style={{ width: "320px" }}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-base font-bold text-[#292d32]">
              Weather
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
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weather.loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-5 h-5 animate-spin text-[#1b59f8]" />
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-3xl font-bold text-[#292d32]">{weather.temp}°C</p>
                    <p className="text-sm text-[#6b7280] capitalize">
                      {weather.desc} · Feels like {weather.feelsLike}°C
                    </p>
                  </div>
                  {weather.icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      alt={weather.desc}
                      className="w-12 h-12"
                    />
                  )}
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

        <div className="flex-1 flex flex-col gap-7">
          <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-bold text-[#292d32]">Real-time Map</CardTitle>
            </CardHeader>
            <CardContent className="h-40">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=100.32%2C5.40%2C100.35%2C5.43&layer=mapnik"
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Penang Map"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl flex-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="ml-4 mt-2 text-base font-bold text-[#292d32]">
                Active Alerts
              </CardTitle>
              <Button 
                onClick={() => {
                  // Simulate opening alerts view
                  const criticalAlerts = alerts.filter(alert => alert.type === "Critical").length
                  const warningAlerts = alerts.filter(alert => alert.type === "Warning").length
                  alert(`All Alerts View:\n• ${criticalAlerts} Critical alerts\n• ${warningAlerts} Warning alerts\n• View detailed reports and take action`)
                }}
                variant="ghost" 
                className="text-[#1b59f8] text-xs p-4 h-auto font-semibold"
              >
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

      {/* Data Table */}
      <Card className="bg-white border border-[#f0f2f5] shadow rounded-xl">
        <CardContent className="p-0">
          {/* Table Filters */}
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
              <Select value={sortBy} onValueChange={setSortBy} className="text-xs">
                <SelectTrigger className="w-28 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="text-xs">
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
                {currentData.map((item) => (
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
            <p className="text-xs text-[#bfc8d6]">Showing data {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries</p>
            <div className="flex items-center gap-1">
              <Button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full font-bold text-xs px-4 py-2 h-9 ${
                    currentPage === page
                      ? "bg-[#1b59f8] text-white"
                      : "border-[#e7e7e7] bg-transparent"
                  }`}
                >
                  {page}
                </Button>
              ))}
              {totalPages > 5 && (
                <>
                  <span className="text-[#bfc8d6] text-xs px-2">...</span>
                  <Button
                    onClick={() => setCurrentPage(totalPages)}
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full font-bold text-xs px-4 py-2 h-9 ${
                      currentPage === totalPages
                        ? "bg-[#1b59f8] text-white"
                        : "border-[#e7e7e7] bg-transparent"
                    }`}
                  >
                    {totalPages}
                  </Button>
                </>
              )}
              <Button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )

  function degToCompass(deg: number | null): string {
    if (deg === null) return ""
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
                        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    const index = Math.floor((deg / 22.5) + 0.5) % 16
    return directions[index]
  }
}
