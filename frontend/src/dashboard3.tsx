"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Slider } from "./components/ui/slider"
import { Switch } from "./components/ui/switch"
import {
  Battery,
  AlertTriangle,
  Scan,
  Camera,
  ArrowLeft,
} from "lucide-react"
import Layout from "./components/Layout"
import { useNavigate } from "react-router-dom"

// ✅ Importing images
import EholeImage from "./assets/ehole.png"
import ImageCapture from "./assets/Image Capture.png"

export default function Dashboard3() {
  const navigate = useNavigate()
  const [waterJetInlet, setWaterJetInlet] = useState(true)
  const [waterJetOutlet, setWaterJetOutlet] = useState(true)
  const [blower, setBlower] = useState(true)
  const [tiltAngle, setTiltAngle] = useState([90])
  const [panAngle, setPanAngle] = useState([90])
  const [cameraQuality, setCameraQuality] = useState("Medium")

  const [selectedImage, setSelectedImage] = useState<string | null>(null)


  const handleScan = () => {
    alert(`Scanning at Tilt: ${tiltAngle[0]}°, Pan: ${panAngle[0]}°`)
  }

  const handleCapture = () => {
    alert(`Capturing image at Tilt: ${tiltAngle[0]}°, Pan: ${panAngle[0]}°`)
  }

  const handleReport = () => {
    alert("Creating maintenance report...")
  }

  const handleBackToMonitoring = () => {
    navigate("/dashboard2")
  }

  return (
    <Layout>
      <div className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <Button
              onClick={handleBackToMonitoring}
              variant="ghost"
              className="p-2 hover:bg-[#f8f8fb] self-start"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-8">
              <div className="w-32 h-32 bg-[#f8f8fb] rounded-full flex items-center justify-center overflow-hidden border border-[#e5e7eb]">
                <img
                  src={EholeImage}
                  alt="Device"
                  className="w-65 h-65 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#292d32] mb-4">
                  Control Panel - E-Hole 237001
                </h1>

                <div className="flex gap-16 items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-2 h-6 bg-[#00b087] rounded-sm"></div>
                        ))}
                      </div>
                      <Battery className="w-4 h-4 text-[#00b087]" />
                      <span className="text-sm text-[#9798a1]">Battery</span>
                    </div>
                    <div className="text-lg font-bold text-black">11.24V</div>
                  </div>

                  <div>
                    <div className="text-sm text-[#9798a1] mb-1">Status</div>
                    <div className="bg-[#dcfce7] text-[#16a34a] font-semibold text-sm px-4 py-1 rounded-full inline-block">
                      Active
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-[#9798a1] mb-1">Location</div>
                    <div className="text-sm font-bold text-black leading-tight">
                      Faculty of Engineering<br />Universiti Malaya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleReport}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-2 rounded-lg text-sm shadow-md flex items-center"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Report
          </Button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-12 mb-8">
          <div className="flex gap-12">
            {[{
              label: "Water Jet (Inlet)", checked: waterJetInlet, set: setWaterJetInlet
            }, {
              label: "Water Jet (Outlet)", checked: waterJetOutlet, set: setWaterJetOutlet
            }, {
              label: "Blower", checked: blower, set: setBlower
            }].map(({ label, checked, set }) => (
              <div className="flex flex-col items-center" key={label}>
                <span className="text-sm text-[#9798a1] mb-2">{label}</span>
                <Switch
                  checked={checked}
                  onCheckedChange={set}
                  className="data-[state=checked]:bg-[#00b087]"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-8">
            <div className="w-32">
              <span className="text-sm text-[#9798a1] mb-2 block">Tilt Angle</span>
              <Slider value={tiltAngle} onValueChange={setTiltAngle} max={180} step={1} />
              <span className="text-xs text-[#9798a1] mt-1 block">{tiltAngle[0]}°</span>
            </div>
            <div className="w-32">
              <span className="text-sm text-[#9798a1] mb-2 block">Pan Angle</span>
              <Slider value={panAngle} onValueChange={setPanAngle} max={180} step={1} />
              <span className="text-xs text-[#9798a1] mt-1 block">{panAngle[0]}°</span>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Button
            onClick={handleScan}
            className="bg-[#f6be30] hover:bg-[#f59e0b] text-white font-bold px-4 py-2 rounded-lg text-sm shadow-md flex items-center justify-start w-22"
          >
            <Scan className="w-10 h-4 mr-2" />
            Scan
          </Button>

            <Button
              onClick={handleCapture}
              className="bg-[#1b59f8] hover:bg-[#1548d4] text-white font-bold px-4 py-2 rounded-lg text-sm shadow-md flex items-center justify-start w-22"
            >
              <Camera className="w-8 h-4 mr-2" />
              Capture
            </Button>

          </div>
        </div>

{/* Camera + History */}
<div className="grid grid-cols-[1fr_2fr] gap-8">
  {/* Live Camera */}
  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-[#292d32]">Live Camera</h3>
        <select
          value={cameraQuality}
          onChange={(e) => setCameraQuality(e.target.value)}
          className="border border-[#e5e7eb] rounded-md text-sm px-2 py-1"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="aspect-[4/3] bg-[#f8f8fb] rounded-lg border border-[#e5e7eb] flex items-center justify-center">
        <div className="text-center text-[#9798a1]">
          <Camera className="w-10 h-10 mx-auto mb-1 opacity-50" />
          <p>Live Camera Feed</p>
        </div>
      </div>
    </CardContent>
  </Card>

{/* History Table */}
<Card className="w-full self-stretch -ml-2"> {/* Moves left & stretches vertically */}
  <CardContent className="p-6">
    <h3 className="text-lg font-bold text-[#292d32] mb-4">History</h3>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#e5e7eb]">
            <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Timestamp</th>
            <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Angle (Pan, Tilt)</th>
            <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold w-48">Image</th>
            <th className="text-left py-3 text-sm text-[#bfc8d6] font-semibold">Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 text-sm text-[#292d32]">
              2025-06-30<br />14:52:30.98600<br />0+00:00
            </td>
            <td className="py-4 text-sm text-[#292d32]">90, 95</td>
            <td className="py-4 w-48">
             <img
              src={ImageCapture}
              alt="Captured"
              className="w-36 max-h-40 object-contain rounded border border-[#e5e7eb] cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedImage(ImageCapture)}
            />
            </td>
            <td className="py-4 text-sm text-[#292d32]">Normal Condition</td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>
{selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-5 right-20 bg-[#ffc5c5] hover:bg-[#df0404] text-[#df0404] hover:text-white px-3 py-1 rounded-full transition-colors"
      >
        ✕
      </button>
      <img
        src={selectedImage}
        alt="Zoomed"
        className="w-full max-h-[80vh] object-contain rounded"
      />
  
  </div>
)}

</div>
      </div>
    </Layout>
  )
}