import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar";

const AddSubject = () => {
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [lecturer, setLecturer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/subjects', { name, hours, lecturer });
            console.log('Subject added:', response.data);
            window.location.href = '/';  // Redirect to the subject list
        } catch (error) {
            console.error('Error adding subject:', error);
            alert('Error adding subject');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto py-10 px-6">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Add New Subject</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter subject name"
                            />
                        </div>
                        <div>
                            <label htmlFor="hours" className="block text-gray-700 font-medium">Hours:</label>
                            <input
                                id="hours"
                                type="number"
                                value={hours}
                                onChange={(e) => setHours(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter number of hours"
                            />
                        </div>
                        <div>
                            <label htmlFor="lecturer" className="block text-gray-700 font-medium">Lecturer:</label>
                            <input
                                id="lecturer"
                                type="text"
                                value={lecturer}
                                onChange={(e) => setLecturer(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter lecturer name"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                            Add Subject
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSubject;
