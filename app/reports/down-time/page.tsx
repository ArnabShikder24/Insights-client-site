"use client";
import React from 'react';
import 'tippy.js/dist/tippy.css';

const tableData = [
{
    id: 1,
    machineId: "swe1",
    machineType: "Sweing",
    totalDowntime: "0 hours 1 minutes",
    details: "Air Exit Problem: 0 hours 1 minutes, Power Supply Issue: 0 hours 0 minutes"
},
{
    id: 2,
    machineId: "swe2",
    machineType: "Sweing",
    totalDowntime: "3 hours 37 minutes",
    details: "Machine Breakdown: 0 hours 5 minutes, Power Supply Issue: 3 hours 29 minutes, Cutting Tools: 0 hours 1 minutes, Air Exit Problem: 0 hours 1 minutes"
}
];

const DownTime = () => {
    return <div>
        <div className="flex items-center gap-2 text-gray-500"><span>{">"}</span> Reports <span>{">"}</span> DownTime</div>

        <div className="rounded-xl shadow p-4">
                <div className='flex items-center justify-between mb-2'>
                <h2 className="text-xl font-semibold mb-4">Downtime Report</h2>
                <button className="bg-sky-600 py-3 px-2 text-white rounded-md">Download Excel</button>
                </div>
                {/* Your table will go here */}
                <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                        <th>Machine ID</th>
                        <th>Machine Type</th>
                        <th>Total Downtime</th>
                        <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                            <td>{data.machineId}</td>
                            <td>{data.machineType}</td>
                            <td>{data.totalDowntime}</td>
                            <td>{data.details}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
    </div>;
};

export default DownTime;
