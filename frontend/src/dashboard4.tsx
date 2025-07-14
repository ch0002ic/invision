"use client"

import { useState } from "react"
import { Search, X, Grid, List } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Badge } from "./components/ui/badge"
import Layout from "./components/Layout"

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
		status: "Warning",
	},
	{
		id: "237004",
		location: "Universiti",
		type: "Standard",
		waterThreshold: 800,
		gasThreshold: 300,
		status: "Active",
	},
	{
		id: "237005",
		location: "Universiti",
		type: "Standard",
		waterThreshold: 800,
		gasThreshold: 300,
		status: "Active",
	},
	{
		id: "237006",
		location: "Universiti",
		type: "Standard",
		waterThreshold: 800,
		gasThreshold: 300,
		status: "Warning",
	},
	{ id: "237007", location: "Jelutong", type: "Standard", waterThreshold: 802, gasThreshold: 291, status: "Active" },
	{
		id: "237008",
		location: "Butterworth",
		type: "Standard",
		waterThreshold: 800,
		gasThreshold: 310,
		status: "Critical",
	},
]

const reportData = [
	{
		deviceId: "DEV-237001",
		equipmentType: "Sensor Module",
		issueType: "Connectivity Lost",
		reportedDate: "2024-12-15",
		status: "Critical",
		manholeId: "237001"
	},
	{
		deviceId: "DEV-237002", 
		equipmentType: "Water Level Sensor",
		issueType: "High Water Level",
		reportedDate: "2024-12-14",
		status: "Warning",
		manholeId: "237002"
	},
	{
		deviceId: "DEV-237003",
		equipmentType: "Gas Sensor", 
		issueType: "Calibration Required",
		reportedDate: "2024-12-13",
		status: "Resolved",
		manholeId: "237003"
	},
	{
		deviceId: "DEV-237004",
		equipmentType: "Camera System",
		issueType: "Low Image Quality",
		reportedDate: "2024-12-12",
		status: "Warning",
		manholeId: "237004"
	},
	{
		deviceId: "DEV-237005",
		equipmentType: "Battery Monitor",
		issueType: "Low Battery Alert",
		reportedDate: "2024-12-11",
		status: "Active",
		manholeId: "237005"
	}
]

export default function Dashboard4() {
	const [selectedManhole, setSelectedManhole] = useState<string | null>(null)
	const [activeTab, setActiveTab] = useState("critical")
	const [searchQuery, setSearchQuery] = useState("")
	const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
	const [showAddReport, setShowAddReport] = useState(false)

	const selectedManholeData = manholeData.find((m) => m.id === selectedManhole)
	
	// Filter manholes based on search query and active tab
	const filteredManholes = manholeData.filter((manhole) => {
		const matchesSearch = manhole.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
			manhole.location.toLowerCase().includes(searchQuery.toLowerCase())
		const matchesTab = activeTab === "all" || 
			(activeTab === "critical" && manhole.status === "Critical") ||
			(activeTab === "warning" && manhole.status === "Warning") ||
			(activeTab === "active" && manhole.status === "Active")
		return matchesSearch && matchesTab
	})

	// Filter reports based on search query for table view
	const filteredReports = reportData.filter((report) => {
		const searchLower = searchQuery.toLowerCase()
		return report.deviceId.toLowerCase().includes(searchLower) ||
			report.equipmentType.toLowerCase().includes(searchLower) ||
			report.issueType.toLowerCase().includes(searchLower)
	})

	const handleViewMap = () => {
		const location = selectedManholeData?.location || "Universiti"
		alert(`Opening Map View:\n• Location: ${location}\n• GPS Coordinates: 5.4141°N, 100.3288°E\n• Satellite view with manhole markers\n• Real-time status overlay`)
	}

	const handleMaintenance = () => {
		const manholeId = selectedManhole || "Unknown"
		alert(`Scheduling Maintenance for ${manholeId}:\n• Priority: High\n• Estimated duration: 2-4 hours\n• Required equipment: Cleaning tools, sensors\n• Maintenance team will be notified`)
	}

	return (
		<Layout>
			{/* Main Reporting Case Content */}
			<div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-2xl font-bold text-[#292d32]">Reporting Case</h1>
					<div className="flex items-center gap-4">
						{/* View Mode Toggle */}
						<div className="flex border border-[#e5e7eb] rounded-lg">
							<button
								onClick={() => setViewMode("grid")}
								className={`p-2 rounded-l-lg transition-colors ${
									viewMode === "grid" 
										? "bg-[#1b59f8] text-white" 
										: "bg-white text-[#9798a1] hover:bg-[#f8f9fa]"
								}`}
							>
								<Grid className="w-4 h-4" />
							</button>
							<button
								onClick={() => setViewMode("table")}
								className={`p-2 rounded-r-lg transition-colors ${
									viewMode === "table" 
										? "bg-[#1b59f8] text-white" 
										: "bg-white text-[#9798a1] hover:bg-[#f8f9fa]"
								}`}
							>
								<List className="w-4 h-4" />
							</button>
						</div>
						
						{/* Search */}
						<div className="relative">
							<Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9798a1]" />
							<Input
								placeholder={viewMode === "grid" ? "Search manholes..." : "Search reports..."}
								className="pl-10 w-80 border-[#e5e7eb] rounded-lg"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
						
						{viewMode === "table" && (
							<Button 
								onClick={() => setShowAddReport(true)}
								className="bg-[#1b59f8] hover:bg-[#1548d4] text-white px-6 py-2 rounded-lg font-semibold"
							>
								Add Report
							</Button>
						)}
					</div>
				</div>

				{/* Filter Tabs - only show in grid view */}
				{viewMode === "grid" && (
					<div className="flex gap-4 mb-6">
						<Button
							variant={activeTab === "critical" ? "default" : "outline"}
							onClick={() => setActiveTab("critical")}
							className={`rounded-full px-6 py-2 text-sm font-semibold ${
								activeTab === "critical"
									? "bg-[#292d32] text-white"
									: "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
							}`}
						>
							Critical Cases
						</Button>
						<Button
							variant={activeTab === "warning" ? "default" : "outline"}
							onClick={() => setActiveTab("warning")}
							className={`rounded-full px-6 py-2 text-sm font-semibold ${
								activeTab === "warning"
									? "bg-[#292d32] text-white"
									: "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
							}`}
						>
							Warning Cases
						</Button>
						<Button
							variant={activeTab === "active" ? "default" : "outline"}
							onClick={() => setActiveTab("active")}
							className={`rounded-full px-6 py-2 text-sm font-semibold ${
								activeTab === "active"
									? "bg-[#292d32] text-white"
									: "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
							}`}
						>
							Active Cases
						</Button>
						<Button
							variant={activeTab === "all" ? "default" : "outline"}
							onClick={() => setActiveTab("all")}
							className={`rounded-full px-6 py-2 text-sm font-semibold ${
								activeTab === "all"
									? "bg-[#292d32] text-white"
									: "bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
							}`}
						>
							All Cases
						</Button>
					</div>
				)}

				{/* Grid View */}
				{viewMode === "grid" && (
					<div className="grid grid-cols-4 gap-6">
						{filteredManholes.map((manhole) => (
							<div
								key={manhole.id}
								onClick={() => setSelectedManhole(manhole.id)}
								className="bg-white border border-[#f0f2f5] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
							>
								<div className="flex flex-col items-center text-center">
									<div className="w-20 h-20 bg-[#f8f8fb] rounded-full flex items-center justify-center mb-4 border border-[#e5e7eb]">
										<img
											src="/placeholder.svg?height=60&width=60"
											alt="Manhole"
											className="w-12 h-12 object-contain"
										/>
									</div>
									<h3 className="font-bold text-[#292d32] mb-2">{manhole.id}</h3>
									<p className="text-sm text-[#6b7280] mb-3">{manhole.location}</p>
									<Badge className={`px-3 py-1 text-xs font-semibold rounded-full ${
										manhole.status === "Critical" 
											? "bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5]"
											: manhole.status === "Warning"
											? "bg-[#fff3cd] text-[#856404] hover:bg-[#fff3cd]"
											: "bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7]"
									}`}>
										{manhole.status}
									</Badge>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Table View */}
				{viewMode === "table" && (
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="bg-[#f8fafd] border-b border-[#e7e9ec]">
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569] border-r border-[#e7e9ec]">
										Device ID
									</th>
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569] border-r border-[#e7e9ec]">
										Equipment Type
									</th>
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569] border-r border-[#e7e9ec]">
										Issue Type
									</th>
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569] border-r border-[#e7e9ec]">
										Reported Date
									</th>
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569] border-r border-[#e7e9ec]">
										Status
									</th>
									<th className="text-center py-2 px-3 text-xs font-semibold text-[#626569]">Action</th>
								</tr>
							</thead>
							<tbody>
								{filteredReports.map((report, index) => {
									const statusColors = {
										Critical: "bg-[#ffc5c5] text-[#df0404]",
										Warning: "bg-[#fff3cd] text-[#856404]", 
										Resolved: "bg-[#d4edda] text-[#155724]",
										Active: "bg-[#dcfce7] text-[#16a34a]"
									}
									return (
										<tr
											key={index}
											onClick={() => setSelectedManhole(report.manholeId)}
											className="border-b border-[#f0f2f5] hover:bg-[#f8fafd] cursor-pointer"
										>
											<td className="text-center py-2.5 px-3 text-xs text-[#292d32] border-r border-[#f0f2f5]">
												{report.deviceId}
											</td>
											<td className="text-center py-2.5 px-3 text-xs text-[#292d32] border-r border-[#f0f2f5]">
												{report.equipmentType}
											</td>
											<td className="text-center py-2.5 px-3 text-xs text-[#292d32] border-r border-[#f0f2f5]">
												{report.issueType}
											</td>
											<td className="text-center py-2.5 px-3 text-xs text-[#292d32] border-r border-[#f0f2f5]">
												{report.reportedDate}
											</td>
											<td className="text-center py-2.5 px-3 border-r border-[#f0f2f5]">
												<span className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${statusColors[report.status as keyof typeof statusColors]}`}>
													{report.status}
												</span>
											</td>
											<td className="text-center py-2.5 px-3">
												<Button
													onClick={(e) => {
														e.stopPropagation()
														setSelectedManhole(report.manholeId)
													}}
													variant="ghost"
													size="sm"
													className="text-[#1b59f8] hover:bg-[#f0f4ff] text-xs px-2 py-1 h-auto font-semibold"
												>
													View Details
												</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>

			{/* Modal */}
			{selectedManhole && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
					<div className="relative bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-xl w-full mx-4 px-8 py-8 animate-fadeIn">
						<button
							onClick={() => setSelectedManhole(null)}
							className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#ffc5c5] hover:bg-[#df0404] transition-colors group"
							aria-label="Close"
						>
							<X className="w-4 h-4 text-[#df0404] group-hover:text-white" />
						</button>
						{selectedManholeData && (
							<div className="flex flex-row gap-6 w-full items-start">
								<div className="flex flex-col items-center justify-center w-1/3">
									<div className="w-32 h-32 bg-[#f8f8fb] rounded-full flex items-center justify-center overflow-hidden border border-[#e5e7eb] mb-3">
										<img
											src="/placeholder.svg?height=120&width=120"
											alt="Manhole Equipment"
											className="object-contain w-24 h-24"
										/>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-[#292d32] mb-4">E-Hole : {selectedManhole}</h3>
									<div className="space-y-3">
										<div className="flex items-center gap-8">
											<div className="flex-1">
												<p className="text-xs text-[#7e7e7e] mb-1">• Battery</p>
												<p className="font-semibold text-[#292d32] text-base">11.24V</p>
											</div>
											<div className="flex-1">
												<p className="text-xs text-[#7e7e7e] mb-1">Status</p>
												<Badge className="bg-[#ffc5c5] text-[#df0404] hover:bg-[#ffc5c5] px-3 py-1 text-sm font-semibold rounded-full">Critical</Badge>
											</div>
										</div>
										<div>
											<p className="text-xs text-[#7e7e7e] mb-1">Location</p>
											<div className="flex items-center gap-2">
												<p className="font-semibold text-[#292d32] text-base">Seberang Perai</p>
												<Button 
													onClick={handleViewMap}
													variant="link" 
													className="text-[#1b59f8] p-0 h-auto text-sm font-semibold underline underline-offset-2"
												>
													View Map
												</Button>
											</div>
										</div>
										<div className="flex items-start gap-8">
											<div className="flex-1">
												<p className="text-xs text-[#7e7e7e] mb-1">Timestamp</p>
												<p className="text-sm text-[#292d32]">2025-06-30 14:52:30.986000+00:00</p>
											</div>
											<div className="flex-1">
												<p className="text-xs text-[#7e7e7e] mb-1">Cover Status</p>
												<p className="font-semibold text-[#292d32] text-base">Open Manhole</p>
											</div>
										</div>
									</div>
									<Button 
										onClick={handleMaintenance}
										className="w-full bg-[#ff8c00] hover:bg-[#ff8c00]/90 text-white font-bold text-sm py-2 rounded-lg mt-4 shadow-md flex items-center justify-center gap-2"
									>
										⚡ Maintenance
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Add Report Modal */}
			{showAddReport && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
					<div className="bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-md w-full mx-4 p-6">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-xl font-bold text-[#292d32]">Add New Report</h2>
							<button 
								onClick={() => setShowAddReport(false)}
								className="p-1 hover:bg-[#f0f2f5] rounded"
							>
								<X className="w-5 h-5" />
							</button>
						</div>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-[#292d32] mb-2">Device ID</label>
								<Input placeholder="Enter device ID" className="w-full" />
							</div>
							<div>
								<label className="block text-sm font-medium text-[#292d32] mb-2">Equipment Type</label>
								<select className="w-full p-2 border border-[#e5e7eb] rounded-lg">
									<option>Sensor Module</option>
									<option>Water Level Sensor</option>
									<option>Gas Sensor</option>
									<option>Camera</option>
									<option>Battery Monitor</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#292d32] mb-2">Issue Type</label>
								<select className="w-full p-2 border border-[#e5e7eb] rounded-lg">
									<option>Connectivity Lost</option>
									<option>High Water Level</option>
									<option>Calibration Required</option>
									<option>Hardware Failure</option>
									<option>Low Battery Alert</option>
									<option>Low Image Quality</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#292d32] mb-2">Description</label>
								<textarea 
									className="w-full p-2 border border-[#e5e7eb] rounded-lg h-20"
									placeholder="Describe the issue..."
								></textarea>
							</div>
							<div className="flex gap-2 pt-4 border-t border-[#f0f2f5]">
								<button 
									onClick={() => setShowAddReport(false)}
									className="flex-1 border border-[#e5e7eb] text-[#292d32] py-2 rounded-lg hover:bg-[#f8f9fa]"
								>
									Cancel
								</button>
								<button 
									onClick={() => {
										alert("Report added successfully!")
										setShowAddReport(false)
									}}
									className="flex-1 bg-[#1b59f8] text-white py-2 rounded-lg hover:bg-[#1548d4]"
								>
									Add Report
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	)
}
