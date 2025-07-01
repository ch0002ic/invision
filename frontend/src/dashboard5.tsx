"use client"

import { useState } from "react"
import { Bell, Search, ChevronDown, X, Settings, Home, Zap, FileText, HelpCircle, LogOut } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/dialog"

const manholeData = [
  {
    id: "237001",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237002",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237003",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237004",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237005",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237006",
    location: "Universiti",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  { id: "237007", location: "Jelutong", type: "Standard", waterThreshold: 802, gasThreshold: 291, status: "Critical" },
  {
    id: "237008",
    location: "Butterworth",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 310,
    status: "Critical",
  },
]

export default function Dashboard5() {
  const [selectedManhole, setSelectedManhole] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("critical")

  const selectedManholeData = manholeData.find((m) => m.id === selectedManhole)

  return (
    <div className="flex h-screen bg-[#f8f8fb]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#e7e7e7] flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-[#e7e7e7]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1b59f8] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#292d32] text-sm">Smart Manhole</h1>
              <p className="text-xs text-[#7e7e7e]">Monitoring System</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#7e7e7e] hover:bg-[#f9fbff]">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#7e7e7e] hover:bg-[#f9fbff]">
              <Zap className="w-4 h-4" />
              E-Hole
            </Button>
            <Button
              variant="default"
              className="w-full justify-start gap-3 bg-[#eff0f6] text-[#1b59f8] hover:bg-[#eff0f6]"
            >
              <FileText className="w-4 h-4" />
              Report
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium text-[#7e7e7e] mb-3">Support</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#7e7e7e] hover:bg-[#f9fbff]">
                <HelpCircle className="w-4 h-4" />
                Get Started
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#7e7e7e] hover:bg-[#f9fbff]">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#e7e7e7]">
          <Button variant="ghost" className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#ffc5c5]">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#e7e7e7] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#7e7e7e]">Last Updated: 2025-01-15 14:32</div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-[#7e7e7e]">
                <Bell className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-[#1b59f8] text-white text-xs">MW</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-[#292d32]">Melody Wong</span>
                    <ChevronDown className="w-4 h-4 text-[#7e7e7e]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="bg-[#e7e7e7] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#292d32] mb-6">Reporting Case</h2>

            {/* Filters and Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "critical" ? "default" : "outline"}
                  className={
                    activeTab === "critical" ? "bg-[#292d32] text-white" : "bg-white text-[#7e7e7e] border-[#b5b7c0]"
                  }
                  onClick={() => setActiveTab("critical")}
                >
                  Critical Manholes
                </Button>
                <Button
                  variant={activeTab === "maintenance" ? "default" : "outline"}
                  className={
                    activeTab === "maintenance" ? "bg-[#292d32] text-white" : "bg-white text-[#7e7e7e] border-[#b5b7c0]"
                  }
                  onClick={() => setActiveTab("maintenance")}
                >
                  Maintenance Due
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7e7e7e]" />
                  <Input placeholder="Search..." className="pl-10 bg-white border-[#b5b7c0] w-64" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 bg-white border-[#b5b7c0] text-[#7e7e7e]">
                      Sort by: Newest
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Newest</DropdownMenuItem>
                    <DropdownMenuItem>Oldest</DropdownMenuItem>
                    <DropdownMenuItem>Critical First</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] border-b border-[#e7e7e7]">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">ID</th>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">Location</th>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">Type</th>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">Water Threshold (ppm)</th>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">Gas Threshold (ppm)</th>
                    <th className="text-left p-4 text-sm font-medium text-[#7e7e7e]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {manholeData.map((manhole, index) => (
                    <tr
                      key={manhole.id}
                      className="border-b border-[#e7e7e7] hover:bg-[#f9fbff] cursor-pointer"
                      onClick={() => setSelectedManhole(manhole.id)}
                    >
                      <td className="p-4 text-sm text-[#292d32]">{manhole.id}</td>
                      <td className="p-4 text-sm text-[#292d32]">{manhole.location}</td>
                      <td className="p-4 text-sm text-[#292d32]">{manhole.type}</td>
                      <td className="p-4 text-sm text-[#292d32]">{manhole.waterThreshold}</td>
                      <td className="p-4 text-sm text-[#292d32]">{manhole.gasThreshold}</td>
                      <td className="p-4">
                        <Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5]">{manhole.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex items-center justify-between p-4 border-t border-[#e7e7e7]">
                <p className="text-sm text-[#7e7e7e]">Showing data 1 to 8 of 256K entries</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    {"<"}
                  </Button>
                  <Button variant="default" size="sm" className="bg-[#1b59f8] text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    4
                  </Button>
                  <span className="text-[#7e7e7e] px-2">...</span>
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    40
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#b5b7c0] text-[#7e7e7e] bg-transparent">
                    {">"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedManhole} onOpenChange={() => setSelectedManhole(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-[#292d32]">E-Hole : {selectedManhole}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-[#df0404] hover:bg-[#ffc5c5]"
              onClick={() => setSelectedManhole(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogHeader>

          {selectedManholeData && (
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Manhole Equipment"
                  className="w-full h-48 object-cover rounded-lg bg-[#f5f5f5]"
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#7e7e7e] mb-1">Battery</p>
                    <p className="font-semibold text-[#292d32]">11.24V</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#7e7e7e] mb-1">Status</p>
                    <Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5]">Critical</Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#7e7e7e] mb-1">Location</p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#292d32]">Seberang Perai</p>
                    <Button variant="link" className="text-[#1b59f8] p-0 h-auto text-sm">
                      View Map
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#7e7e7e] mb-1">Timestamp</p>
                    <p className="text-sm text-[#292d32]">2025-06-30 14:52:30.986000+00:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#7e7e7e] mb-1">Cover Status</p>
                    <p className="font-semibold text-[#292d32]">Open Manhole</p>
                  </div>
                </div>

                <Button className="w-full bg-[#ff8c00] hover:bg-[#ff8c00]/90 text-white">⚡ Maintenance</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
