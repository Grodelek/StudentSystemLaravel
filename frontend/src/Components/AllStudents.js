import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/students')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setStudents(data.students);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <h1>Students</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <li key={student.id || student.index}>
                                {student.name} {student.surname} ({student.index})
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
