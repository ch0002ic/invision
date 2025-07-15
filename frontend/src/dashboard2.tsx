"use client"

import { Battery, Edit, Settings } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import Layout from "./components/Layout"
import { useNavigate } from "react-router-dom"
import EholeImage from "./assets/ehole.png"
import MethaneGraph from "./assets/methane_graph.png"
import WaterLevelGraph from "./assets/water_level_graph.png"

export default function Dashboard2() {
  const navigate = useNavigate()

  const handleEdit = () => {
    alert("Edit Settings:\n• Water level thresholds\n• Gas detection limits\n• Alert notifications\n• Maintenance schedule\n• Device configuration")
  }

  const handleControlPanel = () => {
    // Navigate to control panel for this specific e-hole
    navigate("/dashboard3")
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
    const percentage = Math.min(Math.max(((current - min) / (max - min)) * 100, 0), 100)
    
    const visualCenterX = 60
    const visualCenterY = 50
    const needleLength = 25
    
    // For 0%, point to left red circle (start of arc)
    // For any value > 0, point to the actual end of the colored arc
    let needleX, needleY
    
    if (percentage === 0) {
      // Point directly to the left red circle
      const deltaX = 10 - visualCenterX  // Left red circle is at (10, 50)
      const deltaY = 50 - visualCenterY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      needleX = visualCenterX + (deltaX / distance) * needleLength
      needleY = visualCenterY + (deltaY / distance) * needleLength
    } else {
      // Point to where the colored arc actually ends
      // The arc path goes from (10,50) to (110,50) following the semicircle
      // Arc length at percentage: (percentage/100) * π * 40
      const arcLength = (percentage / 100) * Math.PI * 40
      const totalArcLength = Math.PI * 40
      
      // Convert arc length to angle (0 to π radians)
      const arcAngle = (arcLength / totalArcLength) * Math.PI
      
      // Calculate actual end point of colored arc on the semicircle
      // Starting from left (π radians) and moving clockwise to right (0 radians)
      const endAngle = Math.PI - arcAngle
      const arcEndX = 60 + 40 * Math.cos(endAngle)
      const arcEndY = 10 - 40 * Math.sin(endAngle)
      
      // Point needle to this actual arc end
      const deltaX = arcEndX - visualCenterX
      const deltaY = arcEndY - visualCenterY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      needleX = visualCenterX + (deltaX / distance) * needleLength
      needleY = visualCenterY + (deltaY / distance) * needleLength
    }
    
    // Arc progress
    const pathLength = Math.PI * 40  // Total semicircle length
    const progressLength = (percentage / 100) * pathLength  // How much to show
    
    // Use stroke-dasharray with single value to show progress from start
    const dashArray = `${progressLength} ${pathLength}`
    
    const showColoredArc = percentage > 0
    
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
              {/* Progress arc with proper dasharray */}
              {showColoredArc && (
                <path
                  d="M 10 50 A 40 40 0 0 1 110 50"
                  stroke={color}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={dashArray}
                  className="transition-all duration-500"
                />
              )}
              
              {/* Center hub */}
              <circle cx={visualCenterX} cy={visualCenterY} r="3" fill="#ffffff" stroke="#292d32" strokeWidth="2" />
              
              {/* Needle - standardized design */}
              <line
                x1={visualCenterX}
                y1={visualCenterY}
                x2={needleX}
                y2={needleY}
                stroke="#292d32"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Needle tip dot - standardized design */}
              <circle 
                cx={needleX} 
                cy={needleY} 
                r="1.5" 
                fill="#292d32" 
              />
            </svg>
            {/* Center value - positioned directly below needle center */}
            <div className="absolute" style={{ left: '50%', top: '65px', transform: 'translateX(-50%)' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-[#292d32] flex items-baseline justify-center gap-1">
                  <span>{value}</span>
                  {unit && <span className="text-xs text-[#6b7280]">{unit}</span>}
                </div>
              </div>
            </div>
          </div>
          {/* Scale labels */}
          <div className="flex justify-between w-full text-xs text-[#6b7280] px-2">
            <span>{min}</span>
            <span>{max <= 1 ? (((min + max) / 2).toFixed(1)) : ((min + max) / 2).toFixed(0)}</span>
            <span>{max <= 1 ? max.toFixed(1) : max}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Layout>
      {/* Title Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 bg-white rounded-full border border-[#e5e7eb] flex items-center justify-center overflow-hidden shadow-sm">
            {/* Manhole Device Image */}
            <img 
              src={EholeImage} 
              alt="E-Hole Device" 
              className="w-20 h-20 object-cover rounded-full"
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
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Battery className="w-4 h-4 text-[#00b087]" />
                  <span className="text-sm text-[#9798a1]">Battery</span>
                </div>
                <div className="text-lg font-bold text-black">11.24V</div>
              </div>
            </div>
          </div>
        </div>
        {/* Control Panel Button - moved to right side with improved design */}
        <Button 
          onClick={handleControlPanel}
          className="bg-white hover:bg-gray-50 text-black border border-gray-300 hover:border-gray-400 px-6 py-2 rounded-lg font-semibold shadow-md flex items-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Control Panel
        </Button>
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
              <div className="bg-[#dcfce7] text-[#16a34a] font-semibold text-sm px-4 py-1 rounded-full inline-block">
                Active
              </div>
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
            <CircularGauge title="Pitch Angle" value="0" min={0} max={1.0} current={0} color="#10b981" />
            <CircularGauge title="Roll Angle" value="0" min={0} max={1.0} current={0} color="#f59e0b" />
            <CircularGauge title="Water Level" value="780" unit="mm" min={0} max={1000} current={780} color="#8b5cf6" />
          </div>
          
          {/* Right Column - Charts */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="text-sm font-semibold text-[#292d32] mb-2">Methane Chart</h3>
              <div className="h-32 relative">
                <img 
                  src={MethaneGraph} 
                  alt="Methane Graph" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="text-sm font-semibold text-[#292d32] mb-2">Water Level Chart</h3>
              <div className="h-32 relative">
                <img 
                  src={WaterLevelGraph} 
                  alt="Water Level Graph" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
