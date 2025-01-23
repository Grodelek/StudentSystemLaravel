import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { redirect, useNavigate } from "react-router-dom";

export default function AllStudents() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [age, setAge] = useState("");
    const [index, setIndex] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/students')
            .then(response => {
                console.log('API response:', response.data);
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/students', {
                name: name,
                surname: surname,
                specialization: specialization,
                age: age,
                index: index
            });
            alert("Student Added");
            navigate("/api/students");
            setName("");
            setSurname("");
            setSpecialization("");
            setAge("");
            setIndex("");
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Add Student</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-lg p-2"
                            placeholder="Enter student's name"
                        />
                    </div>

                    <div>
                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-lg p-2"
                            placeholder="Enter student's surname"
                        />
                    </div>

                    <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                        <input
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-lg p-2"
                            placeholder="Enter student's specialization"
                        />
                    </div>

                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-lg p-2"
                            placeholder="Enter student's age"
                        />
                    </div>

                    <div>
                        <label htmlFor="index" className="block text-sm font-medium text-gray-700">Index</label>
                        <input
                            type="text"
                            id="index"
                            name="index"
                            value={index}
                            onChange={(e) => setIndex(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-lg p-2"
                            placeholder="Enter student's index"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
