"use client"

import type React from "react"
import { useState } from "react"

interface Operator {
  id: string
  operatorId: string
  name: string
  position: string
  picture?: string
  rfidTag: string
}

const OperatorManagement: React.FC = () => {
  const [operators, setOperators] = useState<Operator[]>([
    { id: "1", operatorId: "A000001", name: "Halima Begum", position: "Operator", rfidTag: "" },
    { id: "2", operatorId: "A000002", name: "Sabuj Mia", position: "Operator", rfidTag: "" },
    { id: "3", operatorId: "2211", name: "Minhaj", position: "Test", rfidTag: "" },
    { id: "4", operatorId: "A000003", name: "Karim", position: "operator", rfidTag: "" },
    { id: "5", operatorId: "A000004", name: "Eshan", position: "operator", rfidTag: "" },
  ])

  const [newOperator, setNewOperator] = useState<{
    name: string
    employeeId: string
    position: string
    picture: string
    rfidTag: string
  }>({
    name: "",
    employeeId: "",
    position: "",
    picture: "",
    rfidTag: "",
  })


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Operator Management</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Operator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={newOperator.name}
              onChange={(e) => setNewOperator({ ...newOperator, name: e.target.value })}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Employee ID
            </label>
            <input
              id="employeeId"
              type="text"
              value={newOperator.employeeId}
              onChange={(e) => setNewOperator({ ...newOperator, employeeId: e.target.value })}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter employee ID"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Position
            </label>
            <input
              id="position"
              type="text"
              value={newOperator.position}
              onChange={(e) => setNewOperator({ ...newOperator, position: e.target.value })}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter position"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="picture" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Picture
            </label>
            <input
              id="picture"
              type="text"
              value={newOperator.picture}
              onChange={(e) => setNewOperator({ ...newOperator, picture: e.target.value })}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter picture URL"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rfidTag" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rfid Tag
            </label>
            <input
              id="rfidTag"
              type="text"
              value={newOperator.rfidTag}
              onChange={(e) => setNewOperator({ ...newOperator, rfidTag: e.target.value })}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter RFID tag"
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Add Operator
        </button>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Locations</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Operator ID</th>
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Operator Name</th>
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Operator Position</th>
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {operators.map((operator) => (
              <tr
                key={operator.id}
                className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors duration-150"
              >
                <td className="py-3 px-4 text-gray-900 dark:text-white">{operator.operatorId}</td>
                <td className="py-3 px-4 text-gray-900 dark:text-white">{operator.name}</td>
                <td className="py-3 px-4 text-gray-900 dark:text-white">{operator.position}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
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
      </section>
    </div>
  )
}

export default OperatorManagement
