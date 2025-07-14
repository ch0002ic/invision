"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Slider } from "./components/ui/slider"
import { Switch } from "./components/ui/switch"
import {
  Battery,
  MapPin,
  AlertTriangle,
  Scan,
  Camera,
} from "lucide-react"
import Layout from "./components/Layout"

export default function Dashboard3() {
  const [waterJetInlet, setWaterJetInlet] = useState(true)
  const [waterJetOutlet, setWaterJetOutlet] = useState(true)
  const [blower, setBlower] = useState(true)
  const [tiltAngle, setTiltAngle] = useState([90])
  const [panAngle, setPanAngle] = useState([90])

  const handleScan = () => {
    alert(`Scanning at Tilt: ${tiltAngle[0]}°, Pan: ${panAngle[0]}°`)
  }

  const handleCapture = () => {
    alert(`Capturing image at Tilt: ${tiltAngle[0]}°, Pan: ${panAngle[0]}°`)
  }

  const handleReport = () => {
    alert("Creating maintenance report...")
  }

  return (
    <Layout>
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
        {/* Title and Report Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 bg-[#f8f8fb] rounded-full flex items-center justify-center overflow-hidden border border-[#e5e7eb]">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Manhole monitoring device"
                width={200}
                height={200}
                className="object-contain w-28 h-28"
              />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Battery className="w-4 h-4 text-[#00b087]" />
                  <span className="text-sm text-[#9798a1]">Battery</span>
                </div>
                <div className="font-bold text-[#292d32] text-lg">11.24V</div>
              </div>
              <div>
                <div className="text-sm text-[#9798a1] mb-2">Status</div>
                <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7] font-semibold">Active</Badge>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#9798a1]" />
                  <span className="text-sm text-[#9798a1]">Location</span>
                </div>
                <div className="text-sm font-semibold text-[#292d32] leading-tight">
                  Faculty of Engineering<br />Universiti Malaya
                </div>
              </div>
            </div>
          </div>
          <Button 
            onClick={handleReport}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-3 rounded-lg text-base shadow-md"
          >
            <AlertTriangle className="w-5 h-5 mr-2" />
            Report
          </Button>
        </div>

        {/* Controls Row */}
        <div className="flex flex-wrap gap-8 mb-8">
          {/* Switches */}
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#9798a1] mb-2">Water Jet (Inlet)</span>
              <Switch
                checked={waterJetInlet}
                onCheckedChange={setWaterJetInlet}
                className="data-[state=checked]:bg-[#00b087]"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#9798a1] mb-2">Water Jet (Outlet)</span>
              <Switch
                checked={waterJetOutlet}
                onCheckedChange={setWaterJetOutlet}
                className="data-[state=checked]:bg-[#00b087]"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#9798a1] mb-2">Blower</span>
              <Switch
                checked={blower}
                onCheckedChange={setBlower}
                className="data-[state=checked]:bg-[#00b087]"
              />
            </div>
          </div>

          {/* Sliders */}
          <div className="flex gap-8">
            <div className="w-32">
              <span className="text-sm text-[#9798a1] mb-2 block">Tilt Angle</span>
              <Slider
                value={tiltAngle}
                onValueChange={setTiltAngle}
                max={180}
                step={1}
                className="w-full"
              />
              <span className="text-xs text-[#9798a1] mt-1 block">{tiltAngle[0]}°</span>
            </div>
            <div className="w-32">
              <span className="text-sm text-[#9798a1] mb-2 block">Pan Angle</span>
              <Slider
                value={panAngle}
                onValueChange={setPanAngle}
                max={180}
                step={1}
                className="w-full"
              />
              <span className="text-xs text-[#9798a1] mt-1 block">{panAngle[0]}°</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button 
              onClick={handleScan}
              variant="outline" 
              className="px-6 py-2 border-[#e5e7eb] text-[#292d32] hover:bg-[#f8f8fb]"
            >
              <Scan className="w-4 h-4 mr-2" />
              Scan
            </Button>
            <Button 
              onClick={handleCapture}
              className="bg-[#1b59f8] hover:bg-[#1548d4] text-white px-6 py-2"
            >
              <Camera className="w-4 h-4 mr-2" />
              Capture
            </Button>
          </div>
        </div>

        {/* Camera Feed and History */}
        <div className="grid grid-cols-2 gap-8">
          {/* Camera Feed */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#292d32] mb-4">Camera Feed</h3>
              <div className="aspect-video bg-[#f8f8fb] rounded-lg border border-[#e5e7eb] flex items-center justify-center">
                <div className="text-center text-[#9798a1]">
                  <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Live Camera Feed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* History Table */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#292d32] mb-4">History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e5e7eb]">
                      <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Timestamp</th>
                      <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Angle (Pan, Tilt)</th>
                      <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Image</th>
                      <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 text-sm text-[#292d32]">
                        2025-06-30
                        <br />
                        14:52:30.98600
                        <br />
                        0+00:00
                      </td>
                      <td className="py-4 text-sm text-[#292d32]">90, 95</td>
                      <td className="py-4 text-sm text-[#292d32]">-</td>
                      <td className="py-4 text-sm text-[#292d32]">Normal Condition</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div> {/* End Main Card */}
    </Layout>
  )
}
