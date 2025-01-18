import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

export default function AllStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <h1>Students</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <li key={student.id}>
                                {student.name} {student.surname} ({student.index})
                                - Specialization: {student.specialization}, Age: {student.age}
                            </li>
                        ))
                    ) : (
                        <p>No students found.</p>
                    )}
                </ul>
            )}
        </div>
    );
}
