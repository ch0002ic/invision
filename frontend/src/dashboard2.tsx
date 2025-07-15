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
    
    // Calculate angle for semicircle (180 degrees total)
    const angle = (percentage / 100) * 180 - 90 // -90 to 90 degrees
    
    return (
      <Card className="p-4 bg-white border border-[#e5e7eb] shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-center text-[#292d32]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-32 h-20 mb-4">
            <svg className="w-32 h-20" viewBox="0 0 120 60">
              {/* Background arc */}
              <path
                d="M 10 50 A 40 40 0 0 1 110 50"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              {/* Progress arc */}
              <path
                d="M 10 50 A 40 40 0 0 1 110 50"
                stroke={color}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 1.57} 157`} // 157 ≈ half circle circumference
                className="transition-all duration-500"
              />
              {/* Center dot */}
              <circle cx="60" cy="50" r="3" fill="#292d32" />
              {/* Needle */}
              <line
                x1="60"
                y1="50"
                x2={60 + 35 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
                stroke="#292d32"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {/* Center value */}
            <div className="absolute inset-0 flex items-end justify-center pb-1">
              <div className="text-center">
                <div className="text-lg font-bold text-[#292d32]">{value}</div>
                {unit && <div className="text-xs text-[#6b7280]">{unit}</div>}
              </div>
            </div>
          </div>
          {/* Scale labels */}
          <div className="flex justify-between w-full text-xs text-[#6b7280] px-2">
            <span>{min}</span>
            <span>{((min + max) / 2).toFixed(0)}</span>
            <span>{max}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Layout>
      {/* Title Section */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-28 h-28 bg-white rounded-full border border-[#e5e7eb] flex items-center justify-center overflow-hidden shadow-sm">
          {/* Manhole Device SVG Icon */}
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#6b7280]">
            {/* Manhole cover base */}
            <circle cx="50" cy="50" r="40" fill="#4a5568" stroke="#2d3748" strokeWidth="2"/>
            {/* Grid pattern */}
            <g stroke="#718096" strokeWidth="1" fill="none">
              <line x1="20" y1="30" x2="80" y2="30"/>
              <line x1="20" y1="40" x2="80" y2="40"/>
              <line x1="20" y1="50" x2="80" y2="50"/>
              <line x1="20" y1="60" x2="80" y2="60"/>
              <line x1="20" y1="70" x2="80" y2="70"/>
              <line x1="30" y1="20" x2="30" y2="80"/>
              <line x1="40" y1="20" x2="40" y2="80"/>
              <line x1="50" y1="20" x2="50" y2="80"/>
              <line x1="60" y1="20" x2="60" y2="80"/>
              <line x1="70" y1="20" x2="70" y2="80"/>
            </g>
            {/* Center sensor */}
            <circle cx="50" cy="50" r="8" fill="#3182ce"/>
            <circle cx="50" cy="50" r="4" fill="#2b6cb0"/>
            {/* Corner bolts */}
            <circle cx="25" cy="25" r="3" fill="#2d3748"/>
            <circle cx="75" cy="25" r="3" fill="#2d3748"/>
            <circle cx="25" cy="75" r="3" fill="#2d3748"/>
            <circle cx="75" cy="75" r="3" fill="#2d3748"/>
            {/* Label */}
            <text x="50" y="90" textAnchor="middle" fontSize="8" fill="#4a5568">E-HOLE</text>
          </svg>
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
              <div className="h-32 relative">
                <svg width="100%" height="100%" viewBox="0 0 300 120" className="overflow-visible">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="30" height="12" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 12" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Chart line */}
                  <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    points="0,80 30,70 60,85 90,60 120,75 150,45 180,55 210,35 240,50 270,40 300,30"
                  />
                  
                  {/* Data points */}
                  {[
                    [0,80], [30,70], [60,85], [90,60], [120,75], [150,45], 
                    [180,55], [210,35], [240,50], [270,40], [300,30]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2" fill="#3b82f6" />
                  ))}
                  
                  {/* Y-axis labels */}
                  <text x="5" y="15" fontSize="10" fill="#6b7280">300</text>
                  <text x="5" y="45" fontSize="10" fill="#6b7280">200</text>
                  <text x="5" y="75" fontSize="10" fill="#6b7280">100</text>
                  <text x="5" y="105" fontSize="10" fill="#6b7280">0</text>
                </svg>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="text-sm font-semibold text-[#292d32] mb-2">Water Level Chart</h3>
              <div className="h-32 relative">
                <svg width="100%" height="100%" viewBox="0 0 300 120" className="overflow-visible">
                  {/* Grid lines */}
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Water level area chart */}
                  <path
                    d="M0,90 L30,85 L60,80 L90,85 L120,70 L150,65 L180,75 L210,60 L240,55 L270,65 L300,50 L300,120 L0,120 Z"
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  
                  {/* Peak indicator line */}
                  <line x1="240" y1="20" x2="240" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
                  
                  {/* Data points */}
                  {[
                    [30,85], [60,80], [90,85], [120,70], [150,65], 
                    [180,75], [210,60], [240,55], [270,65], [300,50]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2" fill="#3b82f6" />
                  ))}
                  
                  {/* Peak point */}
                  <circle cx="240" cy="55" r="3" fill="#ef4444" />
                  
                  {/* Y-axis labels */}
                  <text x="5" y="15" fontSize="10" fill="#6b7280">1000</text>
                  <text x="5" y="35" fontSize="10" fill="#6b7280">800</text>
                  <text x="5" y="55" fontSize="10" fill="#6b7280">600</text>
                  <text x="5" y="75" fontSize="10" fill="#6b7280">400</text>
                  <text x="5" y="95" fontSize="10" fill="#6b7280">200</text>
                  <text x="5" y="115" fontSize="10" fill="#6b7280">0</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
