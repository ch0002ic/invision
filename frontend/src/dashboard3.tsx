"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Slider } from "./components/ui/slider"
import { Switch } from "./components/ui/switch"
import {
  Bell,
  ChevronDown,
  Home,
  Zap,
  FileText,
  HelpCircle,
  Settings,
  LogOut,
  Battery,
  MapPin,
  AlertTriangle,
  Scan,
  Camera,
} from "lucide-react"

export default function Dashboard3() {
  const [waterJetInlet, setWaterJetInlet] = useState(true)
  const [waterJetOutlet, setWaterJetOutlet] = useState(true)
  const [blower, setBlower] = useState(true)
  const [tiltAngle, setTiltAngle] = useState([90])
  const [panAngle, setPanAngle] = useState([90])

  return (
    <div className="min-h-screen bg-[#fafbff] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1b59f8] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <div className="font-semibold text-[#000000] text-sm">Smart Manhole</div>
              <div className="text-xs text-[#9798a1]">Monitoring System</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-[#9798a1] hover:text-[#000000] hover:bg-[#f8f8fb]"
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Button>
            <Button className="w-full justify-start bg-[#eff0f6] text-[#1b59f8] hover:bg-[#eff0f6]">
              <Zap className="w-4 h-4 mr-3" />
              E-Hole
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#9798a1] hover:text-[#000000] hover:bg-[#f8f8fb]"
            >
              <FileText className="w-4 h-4 mr-3" />
              Reporting Case
            </Button>
          </div>

          <div className="mt-8">
            <div className="text-xs font-medium text-[#9798a1] mb-3 px-3">Support</div>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-[#9798a1] hover:text-[#000000] hover:bg-[#f8f8fb]"
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#9798a1] hover:text-[#000000] hover:bg-[#f8f8fb]"
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Button>
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#e5e7eb]">
          <Button
            variant="ghost"
            className="w-full justify-start text-[#e51837] hover:text-[#e51837] hover:bg-[#f8f8fb]"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#e5e7eb] px-8 py-4 flex items-center justify-between">
          <div className="text-sm text-[#9798a1]">Last Updated: 2025-01-15 14:32</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#9798a1]">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-[#9333ea] text-white text-sm">MW</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-[#000000]">Melody Wong</span>
                <ChevronDown className="w-4 h-4 text-[#9798a1]" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Title and Report Button */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-[#000000]">E-Hole : 237001</h1>
              <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Device Image and Status */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-[#f8f8fb] rounded-lg mb-6 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Manhole monitoring device"
                        width={200}
                        height={200}
                        className="object-contain"
                        style={{ maxWidth: 200, maxHeight: 200 }}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Battery className="w-4 h-4 text-[#00b087]" />
                          <span className="text-sm text-[#9798a1]">Battery</span>
                        </div>
                        <div className="font-semibold text-[#000000]">11.24V</div>
                      </div>

                      <div>
                        <div className="text-sm text-[#9798a1] mb-2">Status</div>
                        <Badge className="bg-[#00b087] hover:bg-[#008767] text-white">Active</Badge>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-[#9798a1]" />
                          <span className="text-sm text-[#9798a1]">Location</span>
                        </div>
                        <div className="text-sm font-medium text-[#000000]">
                          Faculty of Engineering
                          <br />
                          Universiti Malaya
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls */}
              <div className="lg:col-span-2 space-y-6">
                {/* Toggle Controls */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-4 gap-6">
                      <div>
                        <div className="text-sm text-[#9798a1] mb-3">Water Jet (Inlet)</div>
                        <Switch
                          checked={waterJetInlet}
                          onCheckedChange={setWaterJetInlet}
                          className="data-[state=checked]:bg-[#9333ea]"
                        />
                      </div>

                      <div>
                        <div className="text-sm text-[#9798a1] mb-3">Water Jet (Outlet)</div>
                        <Switch
                          checked={waterJetOutlet}
                          onCheckedChange={setWaterJetOutlet}
                          className="data-[state=checked]:bg-[#9333ea]"
                        />
                      </div>

                      <div>
                        <div className="text-sm text-[#9798a1] mb-3">Blower</div>
                        <Switch
                          checked={blower}
                          onCheckedChange={setBlower}
                          className="data-[state=checked]:bg-[#9333ea]"
                        />
                      </div>

                      <div>
                        <div className="text-sm text-[#9798a1] mb-3">Camera Quality</div>
                        <div className="bg-[#e5e7eb] px-3 py-2 rounded-md text-sm font-medium text-[#000000]">
                          Medium
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white">
                    <Scan className="w-4 h-4 mr-2" />
                    Scan
                  </Button>
                  <Button className="bg-[#9333ea] hover:bg-[#7c3aed] text-white">
                    <Camera className="w-4 h-4 mr-2" />
                    Capture Image
                  </Button>
                </div>

                {/* Angle Controls */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-[#9798a1]">Tilt Angle</span>
                          <span className="font-semibold text-[#000000]">{tiltAngle[0]}</span>
                        </div>
                        <Slider
                          value={tiltAngle}
                          onValueChange={setTiltAngle}
                          max={180}
                          step={1}
                          className="[&_[role=slider]]:bg-[#00b087] [&_[role=slider]]:border-[#00b087]"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-[#9798a1]">Pan Angle</span>
                          <span className="font-semibold text-[#000000]">{panAngle[0]}</span>
                        </div>
                        <Slider
                          value={panAngle}
                          onValueChange={setPanAngle}
                          max={180}
                          step={1}
                          className="[&_[role=slider]]:bg-[#00b087] [&_[role=slider]]:border-[#00b087]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Table */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#e5e7eb]">
                            <th className="text-left py-3 text-sm text-[#9798a1] font-medium">Timestamp</th>
                            <th className="text-left py-3 text-sm text-[#9798a1] font-medium">Angle (Pan, Tilt)</th>
                            <th className="text-left py-3 text-sm text-[#9798a1] font-medium">Image</th>
                            <th className="text-left py-3 text-sm text-[#9798a1] font-medium">Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-4 text-sm text-[#000000]">
                              2025-06-30
                              <br />
                              14:52:30.98600
                              <br />
                              0+00:00
                            </td>
                            <td className="py-4 text-sm text-[#000000]">90, 95</td>
                            <td className="py-4 text-sm text-[#000000]">-</td>
                            <td className="py-4 text-sm text-[#000000]">Normal Condition</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
