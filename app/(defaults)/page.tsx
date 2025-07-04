"use client";
import React from "react";
import "tippy.js/dist/tippy.css";
import { toggleRTL, toggleTheme, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from '@/store/themeConfigSlice';
import { useSelector } from "react-redux";
import type { IRootState } from '@/store';


const tableData = [
    {
        id: 1,
        machineId: 'swe1',
        operatorName: 'Halima Begum',
        taskDetailId: 1,
        taskName: 'Sweing 007',
        status: 'Running',
        completion: 22,
        target: 500,
        date: '04:53:39 PM April 11, 2025',
    },
    {
        id: 2,
        machineId: 'swe2',
        operatorName: 'Karim',
        taskDetailId: 5,
        taskName: 'process 3',
        status: 'Running',
        completion: 163,
        target: 400,
        date: '02:18:00 PM February 4, 2025',
    },
    {
        id: 3,
        machineId: 'fns2',
        operatorName: 'Sabuj Mia',
        taskDetailId: 3,
        taskName: 'Demo Task',
        status: 'Logged out',
        completion: 49,
        target: 100,
        date: '10:02:41 AM November 28, 2024',
    },
];

const tableData2 = [
    {
      id: 1,
      machineId: "swe1",
      alertType: "Power Supply Issue",
      errorCode: 7,
      taskDetailId: "N/A",
      timestamp: "2/26/2025, 10:54:43 AM",
    },
    {
      id: 2,
      machineId: "swe2",
      alertType: "Cutting Tolls",
      errorCode: 9,
      taskDetailId: "N/A",
      timestamp: "2/4/2025, 8:17:03 PM",
    }

];

const tableData3 = [
    {
      id: 1,
      operatorName: "Halima Begum",
      machineId: "swe1",
      taskName: "Sweing 007",
      efficiency: 10.61,
    },
    {
      id: 2,
      operatorName: "Sabuj Mia",
      machineId: "fns2",
      taskName: "Demo task",
      efficiency: 12.25,
    },
    {
      id: 3,
      operatorName: "Karim",
      machineId: "swe2",
      taskName: "process 3",
      efficiency: 5.82,
    },
  ];
  

const tableData4 = [
{
    id: 1,
    taskId: 1,
    taskName: "Sweing 007",
    machineId: "swe1",
    operatorName: "Halima Begum",
    completion: 22,
    target: 500,
    status: "Overdue",
},
{
    id: 2,
    taskId: 3,
    taskName: "Demo task",
    machineId: "fns2",
    operatorName: "Sabuj Mia",
    completion: 49,
    target: 100,
    status: "No Timeline",
},
{
    id: 3,
    taskId: 4,
    taskName: "Test Task",
    machineId: "sdf",
    operatorName: "Eshan",
    completion: 0,
    target: 2222,
    status: "No Timeline",
},
{
    id: 4,
    taskId: 5,
    taskName: "process 3",
    machineId: "swe2",
    operatorName: "Karim",
    completion: 163,
    target: 400,
    status: "No Timeline",
},
{
    id: 5,
    taskId: 6,
    taskName: "process 6",
    machineId: "swe3",
    operatorName: "Eshan",
    completion: 44,
    target: 345,
    status: "No Timeline",
},
];

const Dashboard = () => {
    const { isDarkMode, rtlClass } = useSelector((state: IRootState) => state.themeConfig);

    // columnChartOptions
const columnChart: any = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca', '#e7515a'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: isDarkMode ? '#191e3a' : '#e0e6ed',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            axisBorder: {
                color: isDarkMode ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: rtlClass ? true : false,
            labels: {
                offsetX: rtlClass ? -10 : 0,
            },
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
            y: {
                formatter: function (val: any) {
                    return val;
                },
            },
        },
    },
};

    return <div className="dark:text-white">
            <div className="flex items-center gap-2 text-gray-500 dark:text-white"><span>{">"}</span> Dashboard</div>

            <div className="text-center my-5">
                <h1 className="text-xl">Live Task Status</h1>
            </div>
            <div className="table-responsive mb-5">
            <table>
                <thead>
                    <tr>
                        <th>Machine ID</th>
                        <th>Operator Name</th>
                        <th>Task Detail ID</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th className="text-center">Completion</th>
                        <th className="text-center">Target</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.machineId}</td>
                                <td>
                                    <div className="whitespace-nowrap">{data.operatorName}</div>
                                </td>
                                <td>{data.taskDetailId}</td>
                                <td>{data.taskName}</td>
                                <td>
                                    <span
                                        className={`badge whitespace-nowrap ${
                                            data.status === 'Running'
                                                ? 'badge-outline-success'
                                                : data.status === 'Logged out'
                                                ? 'badge-outline-danger'
                                                : 'badge-outline-primary'
                                        }`}
                                    >
                                        {data.status}
                                    </span>
                                </td>
                                <td className="text-center">{data.completion}</td>
                                <td className="text-center">{data.target}</td>
                                <td>{data.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>

        <div className="text-center my-5">
            <h1 className="text-xl">Live Task Status</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* Left Column: Table */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Alerts & Notifications</h2>
                {/* Your table will go here */}
                <div className="table-responsive">
                <table>
                <thead>
                    <tr>
                    <th>Machine ID</th>
                    <th>Alert Type</th>
                    <th>Error Code</th>
                    <th>Task Detail ID</th>
                    <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData2.map((data) => {
                    return (
                        <tr key={data.id}>
                        <td>{data.machineId}</td>
                        <td>{data.alertType}</td>
                        <td>{data.errorCode}</td>
                        <td>{data.taskDetailId}</td>
                        <td>{data.timestamp}</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
                </div>
            </div>
            {/* Right Column: Graph */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Operator Performance</h2>
                {/* Your table will go here */}
                <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                        <th>Operator Name</th>
                        <th>Machine ID</th>
                        <th>Task Name</th>
                        <th>Efficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData3.map((data) => {
                        return (
                            <tr key={data.id}>
                            <td>{data.operatorName}</td>
                            <td>{data.machineId}</td>
                            <td>{data.taskName}</td>
                            <td>{data.efficiency}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* Left Column: Table */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Task Completion</h2>
                {/* Your graph will go here */}
                {/* <ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} /> */}
            </div>

           
            {/* Right Column: Graph */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Real-Time Production</h2>
                {/* Your graph will go here */}
                {/* <ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} /> */}
            </div>
        </div>

        <div className="text-center my-5">
            <h1 className="text-xl">Task Summary</h1>
        </div>

        <div className="table-responsive mb-5">
        <table>
        <thead>
            <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Machine ID</th>
            <th>Operator Name</th>
            <th>Completion</th>
            <th>Target</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {tableData4.map((data) => {
            return (
                <tr key={data.id}>
                <td>{data.taskId}</td>
                <td>{data.taskName}</td>
                <td>{data.machineId}</td>
                <td>{data.operatorName}</td>
                <td>{data.completion}</td>
                <td>{data.target}</td>
                <td>{data.status}</td>
                </tr>
            );
            })}
        </tbody>
        </table>
            </div>

    </div>;
};

export default Dashboard;
