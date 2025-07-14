
import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "./components/Layout"

const dashboards = [
	{ name: "Dashboard 1", path: "/dashboard1" },
	{ name: "Dashboard 2", path: "/dashboard2" },
	{ name: "Dashboard 3", path: "/dashboard3" },
	{ name: "Dashboard 4", path: "/dashboard4" },
]

export default function Home() {
	const navigate = useNavigate()

	// Weather API integration
	const [weather, setWeather] = useState({
		temp: null as number | null,
		icon: "",
		main: "",
		city: "Penang",
		country: "MY",
		loading: true,
		desc: "",
	})

	const fetchWeather = async () => {
		setWeather((w) => ({ ...w, loading: true }))
		try {
			const apiKey = "0c152ca23179fadb18e16da545ce1d20" // Updated API key
			const lat = 5.4141
			const lon = 100.3288
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
			const res = await axios.get(url)
			const data = res.data
			setWeather({
				temp: Math.round(data.main.temp),
				icon: data.weather[0].icon,
				main: data.weather[0].main,
				city: data.name || "Penang",
				country: data.sys.country || "MY",
				loading: false,
				desc: data.weather[0].description,
			})
		} catch (e) {
			setWeather((w) => ({ ...w, loading: false }))
		}
	}

	useEffect(() => {
		fetchWeather()
	}, [])

	return (
		<Layout>
			{/* Main Content Area with Weather and Map */}
			<div className="flex items-center justify-center bg-[#fafbff] min-h-full">
				<div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
					{/* Welcome Message */}
					<div className="text-center mb-8 md:mb-0">
						<h1 className="text-3xl font-bold text-[#292d32] mb-4">
							Welcome to Smart Manhole Monitoring
						</h1>
						<p className="text-lg text-[#6b7280] mb-6">
							Monitor and manage your manhole infrastructure with real-time data and analytics
						</p>
						
						{/* Quick Dashboard Navigation */}
						<div className="grid grid-cols-2 gap-4 mb-8">
							{dashboards.map((item) => (
								<Button
									key={item.name}
									onClick={() => navigate(item.path)}
									className="bg-[#1b59f8] hover:bg-[#1548d4] text-white px-6 py-3 rounded-lg font-semibold"
								>
									{item.name}
								</Button>
							))}
						</div>
					</div>
					
					{/* Weather Card */}
					<div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8 flex flex-col items-center min-w-[260px] max-w-xs">
						<div className="flex items-center gap-3 mb-2">
							{weather.loading ? (
								<div className="w-12 h-12 bg-[#f5f7fa] rounded-full animate-pulse" />
							) : (
								<img
									src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
									alt="Weather Icon"
									className="w-12 h-12"
								/>
							)}
							<span className="text-4xl font-bold text-[#292d32]">
								{weather.loading || weather.temp === null ? "--" : `${weather.temp}°C`}
							</span>
						</div>
						<div className="text-lg font-semibold text-[#1b59f8] mb-1">
							{weather.city}, {weather.country}
						</div>
						<div className="text-base text-[#7e7e7e] capitalize">
							{weather.loading ? "Loading..." : weather.desc || weather.main}
						</div>
						<button
							className="mt-4 px-4 py-2 bg-[#f5f7fa] text-[#1b59f8] rounded-full font-semibold text-sm hover:bg-[#e5e7eb] transition"
							onClick={fetchWeather}
							disabled={weather.loading}
						>
							{weather.loading ? "Refreshing..." : "Refresh"}
						</button>
					</div>
					
					{/* Map Card */}
					<div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8 flex flex-col items-center min-w-[320px] max-w-lg w-full">
						<div className="w-full h-56 rounded-xl overflow-hidden mb-4 border border-[#e5e7eb] bg-[#f5f7fa] flex items-center justify-center relative">
							<div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
								<svg width="100%" height="100%" viewBox="0 0 400 220" className="absolute top-0 left-0">
									<circle cx="200" cy="110" r="100" fill="rgba(27,89,248,0.15)" stroke="#1b59f8" strokeWidth="2" />
								</svg>
							</div>
							<iframe
								title="Penang Map"
								src="https://www.openstreetmap.org/export/embed.html?bbox=100.3198%2C5.4041%2C100.3378%2C5.4241&layer=mapnik&marker=5.4141%2C100.3288"
								className="w-full h-full border-0 z-0"
								allowFullScreen
							></iframe>
						</div>
						<div className="flex items-center justify-between w-full">
							<span className="text-lg font-semibold text-[#292d32]">Penang Overview</span>
							<a
								href="https://www.openstreetmap.org/?mlat=5.4141&mlon=100.3288#map=15/5.4141/100.3288"
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 bg-[#1b59f8] text-white rounded-full font-semibold text-sm hover:bg-[#1747c7] transition"
							>
								View Full Map
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
