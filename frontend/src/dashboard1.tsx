"use client"

import { useState } from "react"
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

export default function Dashboard1() {
  const [activeFilter, setActiveFilter] = useState("All Manholes")

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
    <div className="min-h-screen bg-[#fafbff] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#e7e7e7] flex flex-col">
        <div className="p-6 border-b border-[#e7e7e7]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1b59f8] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#292d32] text-sm">Smart Manhole</h1>
              <p className="text-xs text-[#9098a3]">Monitoring System</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 bg-[#f9fbff] text-[#1b59f8] hover:bg-[#f9fbff]"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#9098a3] hover:bg-[#f9fbff]">
              <Eye className="w-4 h-4" />
              E-Hole
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#9098a3] hover:bg-[#f9fbff]">
              <FileText className="w-4 h-4" />
              Reporting Case
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium text-[#9098a3] mb-3">Support</p>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#9098a3] hover:bg-[#f9fbff]">
                <HelpCircle className="w-4 h-4" />
                Get Started
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#9098a3] hover:bg-[#f9fbff]">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-[#e7e7e7]">
          <Button variant="ghost" className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2]">
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
            <div>
              <p className="text-sm text-[#9098a3]">Last Updated: 2025-01-15 14:32</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-[#9098a3]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#df0404] rounded-full"></div>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-[#292d32]">Melody Wong</span>
                    <ChevronDown className="w-4 h-4 text-[#9098a3]" />
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white border-[#e7e7e7]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#9098a3] mb-1">Total Manholes</p>
                    <p className="text-2xl font-bold text-[#292d32]">24</p>
                  </div>
                  <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#2563eb] rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e7e7e7]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#9098a3] mb-1">Active Alerts</p>
                    <p className="text-2xl font-bold text-[#292d32]">3</p>
                  </div>
                  <div className="w-10 h-10 bg-[#fee2e2] rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-[#dc2626]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e7e7e7]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#9098a3] mb-1">Normal Status</p>
                    <p className="text-2xl font-bold text-[#292d32]">19</p>
                  </div>
                  <div className="w-10 h-10 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#16a34a] rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e7e7e7]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#9098a3] mb-1">Maintenance Due</p>
                    <p className="text-2xl font-bold text-[#292d32]">2</p>
                  </div>
                  <div className="w-10 h-10 bg-[#ffedd5] rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#ea580c]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-[#e7e7e7]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#292d32]">Taipei City Overview Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-80 bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-lg overflow-hidden">
                    {/* Simplified map representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        {/* Circular city layout */}
                        <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute inset-4 border border-white/20 rounded-full"></div>
                        <div className="absolute inset-8 border border-white/20 rounded-full"></div>

                        {/* Status markers */}
                        <div className="absolute top-12 left-20 w-3 h-3 bg-[#16a34a] rounded-full"></div>
                        <div className="absolute top-20 right-16 w-3 h-3 bg-[#dc2626] rounded-full"></div>
                        <div className="absolute bottom-16 left-24 w-3 h-3 bg-[#ea580c] rounded-full"></div>
                        <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#7e22ce] rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ea580c] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#16a34a] rounded-full"></div>
                      <span className="text-[#9098a3]">Normal (0-25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ea580c] rounded-full"></div>
                      <span className="text-[#9098a3]">Warning (26-60%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#dc2626] rounded-full"></div>
                      <span className="text-[#9098a3]">Critical (61-100%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#7e22ce] rounded-full"></div>
                      <span className="text-[#9098a3]">Maintenance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Weather Forecast */}
              <Card className="bg-white border-[#e7e7e7]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#292d32]">Weather Forecast</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9098a3]">Current</span>
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-[#9098a3]" />
                      <span className="text-sm text-[#292d32]">Light Rain</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9098a3]">Rainfall</span>
                    <span className="text-sm text-[#292d32]">2.5mm/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9098a3]">Risk Level</span>
                    <Badge className="bg-[#ffedd5] text-[#ea580c] hover:bg-[#ffedd5]">Medium</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Active Alerts */}
              <Card className="bg-white border-[#e7e7e7]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-[#292d32]">Active Alerts</CardTitle>
                  <Button variant="ghost" className="text-[#1b59f8] text-sm p-0 h-auto">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Badge
                          className={`text-xs ${
                            alert.type === "Critical"
                              ? "bg-[#fee2e2] text-[#dc2626]"
                              : alert.type === "Warning"
                                ? "bg-[#ffedd5] text-[#ea580c]"
                                : "bg-[#e9d5ff] text-[#7e22ce]"
                          } hover:${
                            alert.type === "Critical"
                              ? "bg-[#fee2e2]"
                              : alert.type === "Warning"
                                ? "bg-[#ffedd5]"
                                : "bg-[#e9d5ff]"
                          }`}
                        >
                          {alert.id}
                        </Badge>
                        <Badge
                          className={`text-xs ${
                            alert.type === "Critical"
                              ? "bg-[#fee2e2] text-[#dc2626]"
                              : alert.type === "Warning"
                                ? "bg-[#ffedd5] text-[#ea580c]"
                                : "bg-[#e9d5ff] text-[#7e22ce]"
                          } hover:${
                            alert.type === "Critical"
                              ? "bg-[#fee2e2]"
                              : alert.type === "Warning"
                                ? "bg-[#ffedd5]"
                                : "bg-[#e9d5ff]"
                          }`}
                        >
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#292d32]">{alert.message}</p>
                      {alert.time && <p className="text-xs text-[#9098a3]">{alert.time}</p>}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Table */}
          <Card className="bg-white border-[#e7e7e7]">
            <CardContent className="p-0">
              {/* Table Filters */}
              <div className="flex items-center justify-between p-6 border-b border-[#e7e7e7]">
                <div className="flex items-center gap-2">
                  <Button
                    variant={activeFilter === "All Manholes" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("All Manholes")}
                    className={activeFilter === "All Manholes" ? "bg-[#292d32] text-white" : ""}
                  >
                    All Manholes
                  </Button>
                  <Button
                    variant={activeFilter === "Critical Only" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("Critical Only")}
                    className={activeFilter === "Critical Only" ? "bg-[#292d32] text-white" : ""}
                  >
                    Critical Only
                  </Button>
                  <Button
                    variant={activeFilter === "Maintenance Due" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("Maintenance Due")}
                    className={activeFilter === "Maintenance Due" ? "bg-[#292d32] text-white" : ""}
                  >
                    Maintenance Due
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#9098a3]">Sort by:</span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="status">Status</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Table */}
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e7e7e7]">
                    <TableHead className="text-[#9098a3] font-medium">ID</TableHead>
                    <TableHead className="text-[#9098a3] font-medium">Location</TableHead>
                    <TableHead className="text-[#9098a3] font-medium">Type</TableHead>
                    <TableHead className="text-[#9098a3] font-medium">Water Threshold (cm)</TableHead>
                    <TableHead className="text-[#9098a3] font-medium">Gas Threshold (ppm)</TableHead>
                    <TableHead className="text-[#9098a3] font-medium">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {manholeData.map((item) => (
                    <TableRow key={item.id} className="border-[#e7e7e7]">
                      <TableCell className="font-medium text-[#292d32]">{item.id}</TableCell>
                      <TableCell className="text-[#292d32]">{item.location}</TableCell>
                      <TableCell className="text-[#9098a3]">{item.type}</TableCell>
                      <TableCell className="text-[#292d32]">{item.waterThreshold}</TableCell>
                      <TableCell className="text-[#292d32]">{item.gasThreshold}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            item.status === "Critical"
                              ? "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]"
                              : "bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]"
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between p-6 border-t border-[#e7e7e7]">
                <p className="text-sm text-[#9098a3]">Showing data 1 to 8 of 256k entries</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="default" size="sm" className="bg-[#1b59f8] text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    4
                  </Button>
                  <span className="text-[#9098a3]">...</span>
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    40
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#e7e7e7] bg-transparent">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
