"use client"

import { useState } from "react"

interface Device {
  id: string
  machineId: string
  locationId: string
  status: "active" | "inactive" | "Not functional"
}

export default function IotDeviceOperator() {
  const [devices, setDevices] = useState<Device[]>([
    { id: "1", machineId: "swe1", locationId: "1", status: "active" },
    { id: "2", machineId: "fns2", locationId: "12", status: "Not functional" },
    { id: "3", machineId: "1", locationId: "1", status: "active" },
    { id: "4", machineId: "sdf", locationId: "12", status: "inactive" },
    { id: "5", machineId: "swe2", locationId: "14", status: "active" },
    { id: "6", machineId: "swe3", locationId: "15", status: "active" },
  ])

  const [newDevice, setNewDevice] = useState<{
    machineId: string
    locationId: string
    status: "active" | "inactive" | "Not functional"
  }>({
    machineId: "",
    locationId: "",
    status: "active",
  })

  const handleAddDevice = () => {
    if (newDevice.machineId && newDevice.locationId) {
      const device: Device = {
        id: Date.now().toString(),
        machineId: newDevice.machineId,
        locationId: newDevice.locationId,
        status: newDevice.status,
      }
      setDevices([...devices, device])
      setNewDevice({ machineId: "", locationId: "", status: "active" })
    }
  }

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
      <div className="w-full mx-auto space-y-6">
        {/* Add Device Section */}
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-gray-900 dark:text-white text-lg font-semibold">Add Device</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="machineId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Machine Id
                </label>
                <input
                  id="machineId"
                  type="text"
                  value={newDevice.machineId}
                  onChange={(e) => setNewDevice({ ...newDevice, machineId: e.target.value })}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter machine ID"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Location
                </label>
                <select
                  id="location"
                  value={newDevice.locationId}
                  onChange={(e) => setNewDevice({ ...newDevice, locationId: e.target.value })}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="" className="text-gray-500 dark:text-gray-400">
                    Select Location
                  </option>
                  <option value="1" className="text-gray-900 dark:text-white">
                    Location 1
                  </option>
                  <option value="12" className="text-gray-900 dark:text-white">
                    Location 12
                  </option>
                  <option value="14" className="text-gray-900 dark:text-white">
                    Location 14
                  </option>
                  <option value="15" className="text-gray-900 dark:text-white">
                    Location 15
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Status
                </label>
                <select
                  id="status"
                  value={newDevice.status}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, status: e.target.value as "active" | "inactive" | "Not functional" })
                  }
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active" className="text-gray-900 dark:text-white">
                    Active
                  </option>
                  <option value="inactive" className="text-gray-900 dark:text-white">
                    Inactive
                  </option>
                  <option value="Not functional" className="text-gray-900 dark:text-white">
                    Not functional
                  </option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAddDevice}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800"
            >
              Add Device
            </button>
          </div>
        </div>

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
