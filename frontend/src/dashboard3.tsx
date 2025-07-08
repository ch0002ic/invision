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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { Eye } from "lucide-react"

export default function Dashboard3() {
  const [waterJetInlet, setWaterJetInlet] = useState(true)
  const [waterJetOutlet, setWaterJetOutlet] = useState(true)
  const [blower, setBlower] = useState(true)
  const [tiltAngle, setTiltAngle] = useState([90])
  const [panAngle, setPanAngle] = useState([90])

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      {/* Floating Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-52 z-30 bg-white rounded-2xl shadow-lg border border-[#f0f2f5] flex flex-col transition-all">
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
          <div className="bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] px-12 py-10">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 pt-0 pb-2 min-h-[44px]">
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
                <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-3 rounded-lg text-base shadow-md">
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
                      className="data-[state=checked]:bg-[#9333ea]"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-[#9798a1] mb-2">Water Jet (Outlet)</span>
                    <Switch
                      checked={waterJetOutlet}
                      onCheckedChange={setWaterJetOutlet}
                      className="data-[state=checked]:bg-[#9333ea]"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-[#9798a1] mb-2">Blower</span>
                    <Switch
                      checked={blower}
                      onCheckedChange={setBlower}
                      className="data-[state=checked]:bg-[#9333ea]"
                    />
                  </div>
                </div>
                {/* Camera Quality */}
                <div className="flex flex-col items-center">
                  <span className="text-sm text-[#9798a1] mb-2">Camera Quality</span>
                  <div className="bg-[#e5e7eb] px-6 py-2 rounded-md text-base font-semibold text-[#292d32]">Medium</div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4 items-end">
                  <Button className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white font-bold px-6 py-2 rounded-lg text-base">
                    <Scan className="w-4 h-4 mr-2" />
                    Scan
                  </Button>
                  <Button className="bg-[#9333ea] hover:bg-[#7c3aed] text-white font-bold px-6 py-2 rounded-lg text-base">
                    <Camera className="w-4 h-4 mr-2" />
                    Capture Image
                  </Button>
                </div>
              </div>

              {/* Angle Controls */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#9798a1]">Tilt Angle</span>
                    <span className="font-bold text-[#292d32] text-base">{tiltAngle[0]}</span>
                  </div>
                  <Slider
                    value={tiltAngle}
                    onValueChange={setTiltAngle}
                    max={180}
                    step={1}
                    className="[&_[role=slider]]:bg-[#00b087] [&_[role=slider]]:border-[#00b087] [&>div]:bg-[#dcfce7] h-2"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#9798a1]">Pan Angle</span>
                    <span className="font-bold text-[#292d32] text-base">{panAngle[0]}</span>
                  </div>
                  <Slider
                    value={panAngle}
                    onValueChange={setPanAngle}
                    max={180}
                    step={1}
                    className="[&_[role=slider]]:bg-[#00b087] [&_[role=slider]]:border-[#00b087] [&>div]:bg-[#dcfce7] h-2"
                  />
                </div>
              </div>

              {/* Data Table */}
              <Card className="shadow-md border border-[#f0f2f5] rounded-xl">
                <CardContent className="p-0">
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
            </div> {/* End Main Card */}
          </div>
        </div>
      </main>
    </div>
  )
}
