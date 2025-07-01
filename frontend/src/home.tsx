import { CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom"

const dashboards = [
  { name: "Dashboard 1", path: "/dashboard1" },
  { name: "Dashboard 2", path: "/dashboard2" },
  { name: "Dashboard 3", path: "/dashboard3" },
  { name: "Dashboard 4", path: "/dashboard4" },
  { name: "Dashboard 5", path: "/dashboard5" },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen bg-[#fafbff]">
      <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col justify-between">
        <div>
          <CardHeader className="p-6 border-b border-[#e5e7eb]">
            <CardTitle className="text-lg font-semibold">Smart Manhole</CardTitle>
          </CardHeader>
          <nav className="flex flex-col gap-2 p-4">
            {dashboards.map((item) => (
              <Button key={item.name} className="w-full justify-start" onClick={() => navigate(item.path)}>
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#292d32]">Welcome to the Smart Manhole Home Page</h1>
      </div>
    </div>
  )
}
