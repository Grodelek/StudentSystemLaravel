import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

export default function AllStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/students')
            .then(response => {
                console.log('API response:', response.data);
                setStudents(response.data); // Set students to API response
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
                alert('Student deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting student:', error);
                alert('Failed to delete student');
            });
    };

    const handleUpdate = (student) => {
        setCurrentStudent(student);
        setShowModal(true);
    };

    const saveUpdate = () => {
        if (currentStudent) {
            axios.put(`http://127.0.0.1:8000/api/students/${currentStudent.id}`, currentStudent)
                .then(response => {
                    setStudents(students.map(student => student.id === currentStudent.id ? response.data : student));
                    alert('Student updated successfully');
                    setShowModal(false);
                })
                .catch(error => {
                    console.error('Error updating student:', error);
                    alert('Failed to update student');
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentStudent({ ...currentStudent, [name]: value });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header>
                <Navbar />
            </header>

            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Students</h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {students.length > 0 ? (
                            <ul className="divide-y divide-gray-200">
                                {students.map((student) => (
                                    <li key={student.id} className="py-4 flex items-center justify-between">
                                        <div className="flex-grow">
                                            <p className="text-lg font-semibold text-gray-700">
                                                {student.name} {student.surname} ({student.index})
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Specialization: {student.specialization}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Age: {student.age}
                                            </p>
                                        </div>
                                        <div className="flex space-x-4">
                                            <button
                                                onClick={() => handleUpdate(student)}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(student.id)}
                                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500">No students found.</p>
                        )}
                    </div>
                )}

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Update Student</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentStudent.name || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Surname</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={currentStudent.surname || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Index</label>
                                <input
                                    type="text"
                                    name="index"
                                    value={currentStudent.index || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={currentStudent.specialization || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={currentStudent.age || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                                    Cancel
                                </button>
                                <button
                                    onClick={saveUpdate}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}