"use client"

import { Battery, Edit, Settings } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import Layout from "./components/Layout"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Dashboard2() {
  const navigate = useNavigate()
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const handleEdit = () => {
    alert("Edit Settings:\n• Water level thresholds\n• Gas detection limits\n• Alert notifications\n• Maintenance schedule\n• Device configuration")
  }

  const handleControlPanel = () => {
    // Navigate to control panel for this specific e-hole
    navigate("/dashboard3")
  }

  // Update last updated time every 30 seconds to simulate real-time updates
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
    
    // Calculate needle angle (from -90° to +90° for semicircle)
    const needleAngle = (percentage * 180) / 100 - 90

    return (
      <Card className="p-4 bg-white border border-[#e5e7eb]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-center text-[#292d32]">{title}</CardTitle>
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
                <div className="text-lg font-bold text-[#292d32]">{value}</div>
                {unit && <div className="text-xs text-[#6b7280]">{unit}</div>}
              </div>
            </div>
            {/* Needle/pointer */}
            <div
              className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-[#292d32] origin-bottom transform -translate-x-1/2 -translate-y-8"
              style={{
                transform: `translate(-50%, -100%) rotate(${needleAngle}deg)`,
                transformOrigin: "bottom center",
              }}
            />
          </div>
          {/* Scale labels */}
          <div className="flex justify-between w-full text-xs text-[#6b7280] mt-2">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Layout>
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
                <Button 
                  onClick={handleEdit}
                  variant="ghost" 
                  size="icon" 
                  className="p-1"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-2 h-6 bg-[#00b087] rounded-sm"></div>
                    ))}
                  </div>
                  <Battery className="w-4 h-4 text-[#00b087]" />
                  <span className="text-sm text-[#6b7280]">Battery</span>
                  <span className="font-semibold text-[#292d32]">11.24V</span>
                </div>
                <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]">Active</Badge>
              </div>
              {/* Control Panel Button */}
              <Button 
                onClick={handleControlPanel}
                className="bg-[#1b59f8] hover:bg-[#1548d4] text-white px-6 py-2 rounded-lg font-semibold shadow-md flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Control Panel
              </Button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#6b7280]">Last Updated</p>
            <p className="text-lg font-semibold">{formatLastUpdated(lastUpdated)}</p>
          </div>
        </div>

        {/* Device Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#292d32] mb-4">Device Details</h2>
          <div className="grid grid-cols-4 gap-6 mb-6">
            {/* Row 1 */}
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Type</p>
              <p className="font-semibold text-[#292d32]">Standard Manholes</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Location</p>
              <p className="font-semibold text-[#292d32]">Faculty of Engineering Universiti Malaya</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Status</p>
              <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]">Active</Badge>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Maintenance Frequency</p>
              <p className="font-semibold text-[#292d32]">4 times in a month</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {/* Row 2 */}
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Gas Threshold</p>
              <p className="font-semibold text-[#292d32]">300 ppm</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Water Level Threshold</p>
              <p className="font-semibold text-[#292d32]">800 cm</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Inflow & Outflow Pipe</p>
              <p className="font-semibold text-[#292d32]">-</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] mb-1">Person in-Charge</p>
              <p className="text-[#1b59f8] font-semibold">Ze Xun, Xin Ru</p>
            </div>
          </div>
        </div>

        {/* Gauges and Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Gauges */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <CircularGauge title="Methane Value" value="215.6" unit="ppm" min={0} max={250} current={215.6} color="#3b82f6" />
            <CircularGauge title="Pitch Angle" value="0.4" unit="°" min={0} max={1.0} current={0.4} color="#10b981" />
            <CircularGauge title="Roll Angle" value="0.4" unit="°" min={0} max={1.0} current={0.4} color="#f59e0b" />
            <CircularGauge title="Water Level" value="780" unit="mm" min={0} max={1000} current={780} color="#8b5cf6" />
          </div>
          
          {/* Right Column - Charts */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="text-sm font-semibold text-[#292d32] mb-2">Methane Chart</h3>
              <div className="h-32 bg-[#f8f9fa] rounded border flex items-center justify-center">
                <span className="text-xs text-[#6b7280]">Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="text-sm font-semibold text-[#292d32] mb-2">Water Level Chart</h3>
              <div className="h-32 bg-[#f8f9fa] rounded border flex items-center justify-center">
                <span className="text-xs text-[#6b7280]">Chart Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
