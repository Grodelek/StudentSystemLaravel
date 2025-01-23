import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from "../Navbar";

const AddTeacher = () => {
    const { id } = useParams();
    const [teachers, setTeachers] = useState([]);
    const [teacherId, setTeacherId] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/teachers')
            .then(response => {
                setTeachers(response.data);
            })
            .catch(error => {
                console.error('Error fetching teachers:', error);
            });
    }, []);

    const handleAddTeacher = () => {
        axios.post(`http://127.0.0.1:8000/api/subjects/${id}/teachers`, { teacher_id: teacherId })
            .then(response => {
                console.log(response.data);
                window.location.href = `/subjects/${id}`;
            })
            .catch(error => {
                console.error('Error adding teacher:', error.response);
                alert('Error adding teacher: ' + error.response.data.message);  // Wyświetli komunikat błędu zwrócony przez API
            });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Add Teacher to Subject</h1>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        value={teacherId}
                        onChange={(e) => setTeacherId(e.target.value)}
                    >
                        <option value="">Select a teacher</option>
                        {teachers.map(teacher => (
                            <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddTeacher}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                        Add Teacher
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;
