"use client"

import { useState } from "react"
import { Bell, ChevronDown, Search, Settings, Home, Zap, FileText, HelpCircle, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./components/ui/sidebar"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination"

const manholeData = [
  {
    id: "237034",
    location: "Universiti Malaya",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 300,
    status: "Critical",
  },
  {
    id: "237002",
    location: "Seberang Perai",
    type: "Standard",
    waterThreshold: 2000,
    gasThreshold: 350,
    status: "Critical",
  },
  { id: "237020", location: "Air Hitam", type: "Standard", waterThreshold: 800, gasThreshold: 299, status: "Critical" },
  { id: "237056", location: "Kulim", type: "Standard", waterThreshold: 789, gasThreshold: 298, status: "Critical" },
  { id: "237054", location: "Setapak", type: "Standard", waterThreshold: 805, gasThreshold: 301, status: "Critical" },
  { id: "237123", location: "Air Tawar", type: "Standard", waterThreshold: 798, gasThreshold: 295, status: "Critical" },
  { id: "237345", location: "Jelutong", type: "Standard", waterThreshold: 802, gasThreshold: 291, status: "Critical" },
  {
    id: "237666",
    location: "Butterworth",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 310,
    status: "Critical",
  },
]

function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#e5e7eb]">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1b59f8] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div>
            <div className="font-semibold text-[#292d32] text-sm">Smart Manhole</div>
            <div className="text-xs text-[#7e7e7e]">Monitoring System</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-[#7e7e7e] hover:bg-[#f9fbff]">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-[#7e7e7e] hover:bg-[#f9fbff]">
                  <Zap className="w-4 h-4" />
                  <span>E-Hole</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-[#eff0f6] text-[#1b59f8] font-medium">
                  <FileText className="w-4 h-4" />
                  <span>Reporting Case</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#9098a3] text-xs font-medium px-3 py-2">Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-[#7e7e7e] hover:bg-[#f9fbff]">
                  <HelpCircle className="w-4 h-4" />
                  <span>Get Started</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-[#7e7e7e] hover:bg-[#f9fbff]">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-[#df0404] hover:bg-[#ffc5c5]">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("critical")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#fafbff]">
        <AppSidebar />

        <div className="flex-1">
          {/* Header */}
          <header className="bg-white border-b border-[#e5e7eb] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#9098a3]">Last Updated: 2025-01-15 14:32</div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-[#7e7e7e]">
                  <Bell className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-[#292d32]">Melody Wong</span>
                  <ChevronDown className="w-4 h-4 text-[#7e7e7e]" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-[#292d32] mb-6">Reporting Case</h1>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <Button
                  variant={activeTab === "critical" ? "default" : "ghost"}
                  className={activeTab === "critical" ? "bg-[#292d32] text-white" : "text-[#7e7e7e]"}
                  onClick={() => setActiveTab("critical")}
                >
                  Critical Manholes
                </Button>
                <Button
                  variant={activeTab === "maintenance" ? "default" : "ghost"}
                  className={activeTab === "maintenance" ? "bg-[#292d32] text-white" : "text-[#7e7e7e]"}
                  onClick={() => setActiveTab("maintenance")}
                >
                  Maintenance
                </Button>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9098a3]" />
                  <Input placeholder="Search..." className="pl-10 w-64 border-[#e5e7eb]" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#7e7e7e]">Sort by:</span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-32 border-[#e5e7eb]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-lg border border-[#e5e7eb] overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f8fafd] border-b border-[#e5e7eb]">
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
                      <TableRow key={item.id} className="border-b border-[#f5f5f5]">
                        <TableCell className="text-[#292d32] font-medium">{item.id}</TableCell>
                        <TableCell className="text-[#292d32]">{item.location}</TableCell>
                        <TableCell className="text-[#7e7e7e]">{item.type}</TableCell>
                        <TableCell className="text-[#7e7e7e]">{item.waterThreshold}</TableCell>
                        <TableCell className="text-[#7e7e7e]">{item.gasThreshold}</TableCell>
                        <TableCell>
                          <Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5]">{item.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-[#9098a3]">Showing data 1 to 8 of 256K entries</div>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" className="text-[#7e7e7e]" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive className="bg-[#292d32] text-white">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="text-[#7e7e7e]">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="text-[#7e7e7e]">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="text-[#7e7e7e]">
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="text-[#7e7e7e]">
                        40
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" className="text-[#7e7e7e]" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
