'use client';
import { useState } from 'react';

export default function AddOrEditOperator() {
    const [form, setForm] = useState({
        employeeId: '',
        operatorName: '',
        picture: null as File | null,
        rfidNum: '',
        position: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Submitted!\n' + JSON.stringify(form, null, 2));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Add or Edit Operator</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Employee ID</label>
                    <input
                        type="text"
                        name="employeeId"
                        value={form.employeeId}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Operator Name</label>
                    <input
                        type="text"
                        name="operatorName"
                        value={form.operatorName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Picture</label>
                    <input
                        type="file"
                        name="picture"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">RFID Number</label>
                    <input
                        type="text"
                        name="rfidNum"
                        value={form.rfidNum}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Position</label>
                    <input
                        type="text"
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}