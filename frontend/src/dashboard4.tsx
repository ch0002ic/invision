"use client"

import { useState, useEffect } from "react"
import { X, Search, Wrench, ChevronLeft,
  ChevronRight, } from "lucide-react"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import Layout from "./components/Layout"
import { Input } from "./components/ui/input"
import eholeImage from "./assets/ehole.png"

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" }
]

type Manhole = {
  id: string
  location: string
  type: string
  waterThreshold: number
  gasThreshold: number
  reportDate: string
  status: string
  batteryVoltage?: string
  timestamp?: string
  coverStatus?: string
}

const manholeData: Manhole[] = [
  {
    id: "237002",
    location: "Seberang Perai",
    type: "Standard",
    waterThreshold: 2000,
    gasThreshold: 350,
    reportDate: "2025-06-30",
    status: "Critical",
    batteryVoltage: "11.24V",
    timestamp: "2025-06-30 14:52:30.986000+00:00",
    coverStatus: "Open Manhole",
  },
  {
    id: "237111",
    location: "Universiti Malaya",
    type: "Standard",
    waterThreshold: 960,
    gasThreshold: 330,
    reportDate: "2025-06-29",
    status: "Critical",
    batteryVoltage: "10.89V",
    timestamp: "2025-06-29 13:45:20.456000+00:00",
    coverStatus: "Open Manhole",
  },
  {
    id: "237005",
    location: "Butterworth",
    type: "Standard",
    waterThreshold: 800,
    gasThreshold: 310,
    reportDate: "2025-06-28",
    status: "Critical",
    batteryVoltage: "11.00V",
    timestamp: "2025-06-28 13:59:10.123000+00:00",
    coverStatus: "Open Manhole",
  },
  {
    id: "237006",
    location: "Jelutong",
    type: "Standard",
    waterThreshold: 900,
    gasThreshold: 320,
    reportDate: "2025-06-27",
    status: "Critical",
    batteryVoltage: "11.10V",
    timestamp: "2025-06-27 14:30:00.000000+00:00",
    coverStatus: "Open Manhole",
  },
  {
    id: "237007",
    location: "Bayan Lepas",
    type: "Standard",
    waterThreshold: 950,
    gasThreshold: 305,
    reportDate: "2025-06-26",
    status: "Critical",
    batteryVoltage: "10.95V",
    timestamp: "2025-06-26 12:15:45.123000+00:00",
    coverStatus: "Closed",
  },
  {
    id: "237777",
    location: "Butterworth",
    type: "Standard",
    waterThreshold: 977,
    gasThreshold: 353,
    reportDate: "2025-06-20",
    status: "Critical",
    batteryVoltage: "10.95V",
    timestamp: "2025-06-20 12:15:45.123000+00:00",
    coverStatus: "Closed",
  },
  {
    id: "237876",
    location: "Penang Hill",
    type: "Standard",
    waterThreshold: 988,
    gasThreshold: 315,
    reportDate: "2025-06-27",
    status: "Critical",
    batteryVoltage: "10.95V",
    timestamp: "2025-06-27 12:15:45.123000+00:00",
    coverStatus: "Closed",
  },
  {
    id: "237636",
    location: "Mak Mandin",
    type: "Standard",
    waterThreshold: 985,
    gasThreshold: 307,
    reportDate: "2025-06-27",
    status: "Critical",
    batteryVoltage: "10.79V",
    timestamp: "2025-06-27 12:15:45.123000+00:00",
    coverStatus: "Closed",
  }
]

export default function SmartManholeDashboard() {
  const [selectedManhole, setSelectedManhole] = useState<Manhole | null>(null)
  const [sortOrder, setSortOrder] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [mapVisible, setMapVisible] = useState(false)

  const itemsPerPage = 8

  const filteredAndSortedManholes = manholeData
    .filter((m) => m.id.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.reportDate)
      const dateB = new Date(b.reportDate)
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime()
    })

  const totalPages = Math.ceil(filteredAndSortedManholes.length / itemsPerPage)

  const paginatedManholes = filteredAndSortedManholes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, sortOrder])

  return (
    <Layout>
      <div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-[#292d32]">Reporting Case</h1>
          <div className="flex flex-col md:flex-row gap-0.5	 items-center">
		{/* Table Filters */}
			<div className="flex items-center justify-between p-4">
			<div className="flex items-center gap-2">
		 <Button
				variant="outline"
				size="sm"

				className="rounded-full px-4 py-1 text-xs font-semibold bg-black text-white"
				>
				All
				</Button>

				<Button
				variant="outline"
				size="sm"
				className="rounded-full px-4 py-1 text-xs font-semibold bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
				>
				Critical
				</Button>
				<Button
				variant="outline"
				size="sm"
				className="rounded-full px-4 py-1 text-xs font-semibold bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
				>
				Maintenance
				</Button>
				<Button
				variant="outline"
				size="sm"
				className="rounded-full px-4 py-1 text-xs font-semibold bg-[#f7f9fb] text-[#292d32] border border-[#e7e7e7]"
				>
				Completed
				</Button>
			</div>
			</div>

    		{/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search E-Hole ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3 py-1.5 text-xs font-semibold text-[#6b7280] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1 text-xs text-[#6b7280] font-semibold">
              <span>Sort by:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-md text-xs font-semibold text-[#6b7280] px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f8fafd] border-b border-[#e7e9ec]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Location</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Water Threshold</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Gas Threshold</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Report Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#6b7280]">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedManholes.map((manhole) => (
                <tr
                  key={manhole.id}
                  onClick={() => setSelectedManhole(manhole)}
                  className="border-b border-[#f0f2f5] hover:bg-[#f9f9fb] cursor-pointer"
                >
                  <td className="py-3 px-4 text-sm font-bold text-[#292d32]">{manhole.id}</td>
                  <td className="py-3 px-4 text-sm text-[#292d32]">{manhole.location}</td>
                  <td className="py-3 px-4 text-sm text-[#292d32]">{manhole.type}</td>
                  <td className="py-3 px-4 text-sm text-[#292d32]">{manhole.waterThreshold}</td>
                  <td className="py-3 px-4 text-sm text-[#292d32]">{manhole.gasThreshold}</td>
                  <td className="py-3 px-4 text-sm text-[#292d32]">{manhole.reportDate}</td>
                  <td className="py-3 px-4">
                    <Badge className="bg-[#ffc5c5] text-[#df0404] px-3 py-1 text-sm font-semibold rounded-full">
                      {manhole.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

                  {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-[#f0f2f5]">
            <p className="text-xs text-[#bfc8d6]">Showing data 1 to 8 of 8 entries</p>
            <div className="flex items-center gap-1">
              <Button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full font-bold text-xs px-4 py-2 h-9 ${
                    currentPage === page
                      ? "bg-[#1b59f8] text-white"
                      : "border-[#e7e7e7] bg-transparent"
                  }`}
                >
                  {page}
                </Button>
              ))}
              {totalPages > 5 && (
                <>
                  <span className="text-[#bfc8d6] text-xs px-2">...</span>
                  <Button
                    onClick={() => setCurrentPage(totalPages)}
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full font-bold text-xs px-4 py-2 h-9 ${
                      currentPage === totalPages
                        ? "bg-[#1b59f8] text-white"
                        : "border-[#e7e7e7] bg-transparent"
                    }`}
                  >
                    {totalPages}
                  </Button>
                </>
              )}
              <Button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="border-[#e7e7e7] bg-transparent rounded-full text-xs px-3 py-2 h-9 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedManhole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-[#f0f2f5] max-w-xl w-full mx-4 px-8 py-8">
            <button
              onClick={() => setSelectedManhole(null)}
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#ffc5c5] hover:bg-[#df0404] transition-colors group"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-[#df0404] group-hover:text-white" />
            </button>

            <div className="flex flex-row gap-6 items-start">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-32 h-32 bg-[#f8f8fb] rounded-full flex items-center justify-center overflow-hidden border border-[#e5e7eb]">
                  <img
                    src={eholeImage}
                    alt="Manhole Equipment"
                    className="object-contain w-24 h-24"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-[#292d32]">E-Hole : {selectedManhole.id}</h3>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-[#7e7e7e] mb-1">🔋 Battery</p>
                    <p className="font-semibold text-base text-[#292d32]">{selectedManhole.batteryVoltage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#7e7e7e] mb-1">Status</p>
                    <Badge className="bg-[#ffc5c5] text-[#df0404] px-3 py-1 text-sm font-semibold rounded-full">
                      {selectedManhole.status}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-[#7e7e7e] mb-1">Location</p>
                  <p className="font-semibold text-base text-[#292d32]">
                    {selectedManhole.location}
                    <button
                      onClick={() => setMapVisible(true)}
                      className="text-blue-500 underline text-sm ml-2"
                    >
                      View Map
                    </button>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7e7e7e] mb-1">Timestamp</p>
                  <p className="text-sm text-[#292d32]">{selectedManhole.timestamp}</p>
                </div>

                <div>
                  <p className="text-xs text-[#7e7e7e] mb-1">Cover Status</p>
                  <p className="font-semibold text-[#292d32] text-base">{selectedManhole.coverStatus}</p>
                </div>

                <div className="pt-2">
                  <Button className="bg-[#7e22ce] text-white rounded-md px-4 py-2 font-semibold flex items-center">
                    <Wrench className="w-4 h-4 mr-2" /> Maintenance
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Map Modal (for Universiti Malaya) */}
{mapVisible && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
    <div className="relative bg-white rounded-xl overflow-hidden w-full max-w-3xl h-[500px] flex flex-col">
      
		<button
		onClick={() => setMapVisible(false)}
		className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#ffc5c5] hover:bg-[#df0404] transition-colors group"
		aria-label="Close"
		>
		<X className="w-4 h-4 text-[#df0404] group-hover:text-white" />
		</button>


      {/* Embedded Map */}
      <iframe
        title="E-hole @ Universiti Malaya"
        src="https://www.openstreetmap.org/export/embed.html?bbox=101.6494%2C3.1171%2C101.6594%2C3.1271&layer=mapnik&marker=3.1221%2C101.6544"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
      />

      {/* Red Dot Label */}
      <div className="absolute bottom-2 left-2 bg-white/80 px-3 py-1 rounded text-sm text-black font-medium">
        🔴 E-Hole Location: Universiti Malaya (3.1221, 101.6544)
      </div>

    </div>
  </div>
)}

    </Layout>
  )
}
