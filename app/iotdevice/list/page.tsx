"use client"

import { useState } from "react"

interface Device {
  id: string
  machineId: string
  locationId: string
  status: "active" | "inactive" | "Not functional"
}

export default function IotDeviceList() {
  const [devices, setDevices] = useState<Device[]>([
    { id: "1", machineId: "swe1", locationId: "1", status: "active" },
    { id: "2", machineId: "fns2", locationId: "12", status: "Not functional" },
    { id: "3", machineId: "1", locationId: "1", status: "active" },
    { id: "4", machineId: "sdf", locationId: "12", status: "inactive" },
    { id: "5", machineId: "swe2", locationId: "14", status: "active" },
    { id: "6", machineId: "swe3", locationId: "15", status: "active" },
  ])

  const handleEdit = (id: string) => {
    console.log("Edit device:", id)
  }

  const handleDelete = (id: string) => {
    setDevices(devices.filter((device) => device.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600 dark:text-green-400"
      case "inactive":
        return "text-red-600 dark:text-red-400"
      case "Not functional":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Device List Section */}
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-gray-900 dark:text-white text-lg font-semibold">Device List</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Machine Id</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Location Id</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device) => (
                    <tr
                      key={device.id}
                      className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors duration-150"
                    >
                      <td className="py-3 px-4 text-gray-900 dark:text-white">{device.machineId}</td>
                      <td className="py-3 px-4 text-gray-900 dark:text-white">{device.locationId}</td>
                      <td className={`py-3 px-4 ${getStatusColor(device.status)}`}>{device.status}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(device.id)}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(device.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white text-xs rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
