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

export default function Dashboard4() {
	const [selectedManhole, setSelectedManhole] = useState<string | null>(null)
	const [activeTab, setActiveTab] = useState("critical")

	const selectedManholeData = manholeData.find((m) => m.id === selectedManhole)

	return (
		<div className="flex min-h-screen bg-[#f7f9fb]">
			{/* Sidebar */}
			<aside className="fixed left-6 top-6 bottom-6 w-56 z-30 bg-white rounded-2xl shadow-lg border border-[#e7e7e7] flex flex-col transition-all h-[92vh] justify-between">
				<div>
					<div className="p-4 border-b border-[#e7e7e7]">
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
					<nav className="flex-1 p-2 mt-2">
						<div className="space-y-1">
							<Button variant="ghost" className="w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base transition-all font-semibold text-[#bfc8d6] hover:text-[#292d32] hover:bg-[#f5f7fa] border-l-4 border-transparent">
								<Home className="w-5 h-5" />
								Home
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 rounded-lg !pl-5 !py-2 !text-base transition-all font-semibold text-[#bfc8d6] hover:text-[#292d32] hover:bg-[#f5f7fa] border-l-4 border-transparent">
								<Zap className="w-5 h-5" />
								E-Hole
							</Button>
							<Button className="w-full justify-start gap-3 bg-[#f5f7fa] text-[#1b59f8] font-bold rounded-lg border-l-4 border-[#1b59f8] !pl-5 !py-2 shadow-none !text-base !font-semibold">
								<FileText className="w-5 h-5" />
								Report
							</Button>
						</div>
						<div className="mt-8">
							<p className="text-xs font-medium text-[#bfc8d6] mb-2">Support</p>
							<div className="space-y-1">
								<Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f5f7fa] rounded-lg !pl-5 !py-2 !text-base">
									<HelpCircle className="w-5 h-5" />
									Get Started
								</Button>
								<Button variant="ghost" className="w-full justify-start gap-3 text-[#bfc8d6] hover:bg-[#f5f7fa] rounded-lg !pl-5 !py-2 !text-base">
									<Settings className="w-5 h-5" />
									Settings
								</Button>
							</div>
						</div>
					</nav>
				</div>
				<div className="p-4">
					<Button variant="ghost" className="w-full justify-start gap-3 text-[#df0404] hover:bg-[#fef2f2] rounded-lg font-semibold !text-base">
						<LogOut className="w-5 h-5" />
						Logout
					</Button>
				</div>
			</aside>

			{/* Main Content Floating Card */}
			<main className="flex-1 flex flex-col ml-[15rem] mr-6 mt-6 mb-6">
				<div className="max-w-[1400px] mx-auto w-full">
					{/* Header */}
					<header className="flex items-center justify-between mb-4 pt-2 pb-2">
						<div></div>
						<p className="text-xs text-[#cfd8e3] font-medium mt-1">Last Updated: 2025-01-15 14:32</p>
						<div className="flex items-center gap-2">
							<Button variant="ghost" size="icon" className="relative p-2 h-9 w-9">
								<Bell className="w-5 h-5 text-[#bfc8d6]" />
								<div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#df0404] rounded-full border-2 border-white"></div>
							</Button>
							<div className="flex items-center gap-2">
								<Avatar className="w-8 h-8">
									<AvatarImage src="/placeholder.svg?height=32&width=32" />
									<AvatarFallback className="bg-[#1b59f8] text-white text-sm">MW</AvatarFallback>
								</Avatar>
								<span className="text-sm font-semibold text-[#292d32]">Melody Wong</span>
								<ChevronDown className="w-4 h-4 text-[#bfc8d6]" />
							</div>
						</div>
					</header>

					{/* Main Card */}
					<div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
						<h2 className="text-2xl font-bold text-[#292d32] mb-8">Reporting Case</h2>

						{/* Filters and Controls */}
						<div className="flex items-center justify-between mb-8">
							<div className="flex gap-3">
								<Button
									variant={activeTab === "critical" ? "default" : "ghost"}
									className={`rounded-full px-6 py-2 text-base font-semibold ${activeTab === "critical" ? "bg-[#292d32] text-white" : "bg-[#f5f7fa] text-[#292d32] border border-[#e7e7e7]"}`}
									onClick={() => setActiveTab("critical")}
								>
									Critical Manholes
								</Button>
								<Button
									variant={activeTab === "maintenance" ? "default" : "ghost"}
									className={`rounded-full px-6 py-2 text-base font-semibold ${activeTab === "maintenance" ? "bg-[#292d32] text-white" : "bg-[#f5f7fa] text-[#292d32] border border-[#e7e7e7]"}`}
									onClick={() => setActiveTab("maintenance")}
								>
									Maintenance Due
								</Button>
							</div>
							<div className="flex items-center gap-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#bfc8d6]" />
									<Input placeholder="Search..." className="pl-12 w-72 border-[#e5e7eb] rounded-full bg-[#f5f7fa]" />
								</div>
								<Button variant="outline" className="gap-2 bg-[#f5f7fa] border-[#e5e7eb] text-[#bfc8d6] rounded-full px-6 py-2 text-base font-semibold">
									Sort by: <span className="font-bold text-[#292d32] ml-1">Newest</span>
									<ChevronDown className="w-4 h-4" />
								</Button>
							</div>
						</div>

						{/* Table */}
						<div className="bg-white rounded-xl border border-[#f0f2f5] shadow-sm overflow-hidden">
							<table className="w-full">
								<thead className="bg-[#f8fafd] border-b border-[#e5e7eb]">
									<tr>
										<th className="text-left p-4 text-base font-bold text-[#bfc8d6]">ID</th>
										<th className="text-left p-4 text-base font-semibold text-[#bfc8d6]">Location</th>
										<th className="text-left p-4 text-base font-semibold text-[#bfc8d6]">Type</th>
										<th className="text-left p-4 text-base font-semibold text-[#bfc8d6]">Water Threshold (cm)</th>
										<th className="text-left p-4 text-base font-semibold text-[#bfc8d6]">Gas Threshold (ppm)</th>
										<th className="text-left p-4 text-base font-semibold text-[#bfc8d6]">Status</th>
									</tr>
								</thead>
								<tbody>
									{manholeData.map((manhole, index) => (
										<tr
											key={manhole.id}
											className="border-b border-[#f0f2f5] hover:bg-[#f5f7fa] cursor-pointer transition-colors"
											onClick={() => setSelectedManhole(manhole.id)}
										>
											<td className="p-4 text-base text-[#292d32] font-bold">{manhole.id}</td>
											<td className="p-4 text-base text-[#292d32] font-semibold">{manhole.location}</td>
											<td className="p-4 text-base text-[#7e7e7e]">{manhole.type}</td>
											<td className="p-4 text-base text-[#7e7e7e]">{manhole.waterThreshold}</td>
											<td className="p-4 text-base text-[#7e7e7e]">{manhole.gasThreshold}</td>
											<td className="p-4">
												<Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5] px-5 py-2 text-base font-semibold rounded-full">{manhole.status}</Badge>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							{/* Pagination */}
							<div className="flex items-center justify-between p-6 border-t border-[#e5e7eb]">
								<p className="text-base text-[#bfc8d6]">Showing data 1 to 8 of 256K entries</p>
								<div className="flex items-center gap-1">
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										{"<"}
									</Button>
									<Button variant="default" size="sm" className="bg-[#1b59f8] text-white rounded-full font-bold text-base px-3 py-1">
										1
									</Button>
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										2
									</Button>
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										3
									</Button>
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										4
									</Button>
									<span className="text-[#bfc8d6] px-2">...</span>
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										40
									</Button>
									<Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#bfc8d6] bg-transparent rounded-full font-bold text-base px-3 py-1">
										{">"}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Modal with overlay blur and improved card */}
			{selectedManhole && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
					<div className="relative bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-2xl w-full px-12 py-10 flex flex-col items-center animate-fadeIn">
						<button
							onClick={() => setSelectedManhole(null)}
							className="absolute right-6 top-6 w-9 h-9 flex items-center justify-center rounded-full bg-[#ffc5c5] hover:bg-[#df0404] transition-colors"
							aria-label="Close"
						>
							<X className="w-5 h-5 text-[#df0404] hover:text-white" />
						</button>
						{selectedManholeData && (
							<div className="flex flex-row gap-10 w-full items-center">
								<div className="flex flex-col items-center justify-center w-1/3">
									<div className="w-44 h-44 bg-[#f8f8fb] rounded-full flex items-center justify-center overflow-hidden border border-[#e5e7eb] mb-4">
										<img
											src="/placeholder.svg?height=200&width=200"
											alt="Manhole Equipment"
											className="object-contain w-36 h-36"
										/>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-[#292d32] mb-4">E-Hole : {selectedManhole}</h3>
									<div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-4">
										<div>
											<p className="text-sm text-[#7e7e7e] mb-1">Battery</p>
											<p className="font-semibold text-[#292d32] text-lg">11.24V</p>
										</div>
										<div>
											<p className="text-sm text-[#7e7e7e] mb-1">Status</p>
											<Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5] px-5 py-2 text-base font-semibold rounded-full">Critical</Badge>
										</div>
										<div className="col-span-2 flex items-center gap-2">
											<p className="text-sm text-[#7e7e7e] mb-1">Location</p>
											<p className="font-semibold text-[#292d32] text-lg ml-2">Seberang Perai</p>
											<Button variant="link" className="text-[#1b59f8] p-0 h-auto text-base font-semibold ml-2 underline underline-offset-2">
												View Map
											</Button>
										</div>
										<div>
											<p className="text-sm text-[#7e7e7e] mb-1">Timestamp</p>
											<p className="text-base text-[#292d32]">2025-06-30 14:52:30.986000+00:00</p>
										</div>
										<div>
											<p className="text-sm text-[#7e7e7e] mb-1">Cover Status</p>
											<p className="font-semibold text-[#292d32] text-lg">Open Manhole</p>
										</div>
									</div>
									<Button className="w-full bg-[#ff8c00] hover:bg-[#ff8c00]/90 text-white font-bold text-base py-3 rounded-lg mt-2 shadow-md">⚡ Maintenance</Button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}
