"use client"

import { Battery, Edit } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import Layout from "./components/Layout"

export default function Dashboard2() {

  const handleEdit = () => {
    alert("Edit Settings:\n• Water level thresholds\n• Gas detection limits\n• Alert notifications\n• Maintenance schedule\n• Device configuration")
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
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-2 h-6 bg-[#00b087] rounded-sm"></div>
                    ))}
                  </div>
                  <Battery className="w-4 h-4 text-[#00b087]" />
                  <span className="text-sm text-[#6b7280]">Battery 82%</span>
                </div>
                <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]">ACTIVE</Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#6b7280]">Last Updated</p>
            <p className="text-lg font-semibold">2025-01-15 14:32</p>
          </div>
        </div>

        {/* Gauges Grid */}
        <div className="grid grid-cols-3 gap-6">
          <CircularGauge title="Water Level" value="48" unit="cm" min={0} max={100} current={48} color="#3b82f6" />
          <CircularGauge title="Gas Concentration" value="295" unit="ppm" min={0} max={500} current={295} color="#10b981" />
          <CircularGauge title="Temperature" value="28" unit="°C" min={0} max={50} current={28} color="#f59e0b" />
        </div>
      </div>
    </Layout>
  )
}
