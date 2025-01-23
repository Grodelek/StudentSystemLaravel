import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SubjectDetail = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/subjects/${id}')
            .then(response => {
                setSubject(response.data);
            })
            .catch(error => {
                console.error('Error fetching subject details:', error);
            });
    }, [id]);

    if (!subject) return <p>Loading...</p>;

    return (
        <div>
            <h1>{subject.name}</h1>
            <p>Hours: {subject.hours}</p>
            <p>Lecturer: {subject.lecturer}</p>
            <h2>Teachers:</h2>
            <ul>
                {subject.teachers.map(teacher => (
                    <li key={teacher.id}>{teacher.name}</li>
                ))}
            </ul>
            <button onClick={() => {/* Logic to remove teacher */}}>Remove Teacher</button>
        </div>
    );
};

export default SubjectDetail;
