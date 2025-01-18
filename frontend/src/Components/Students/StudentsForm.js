import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import {redirect, useNavigate} from "react-router-dom";

export default function AllStudents() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [age, setAge] = useState("");
    const [index, setIndex] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/students')
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
            alert("Students Added");
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
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Add Student</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-none"
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
                        className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-none"
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
                        className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-none"
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
                        className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-none"
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
                        className="mt-1 block w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-none"
                        placeholder="Enter student's index"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
