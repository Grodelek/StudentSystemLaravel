import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RemoveTeacher = () => {
    const { id, teacherId } = useParams();

    const handleRemoveTeacher = () => {
        axios.delete(`/api/subjects/${id}/teachers/${teacherId}`)
            .then(response => {
                console.log(response.data);
                window.location.href = `/subjects/${id}`;  // Redirect to subject detail
            })
            .catch(error => {
                console.error('Error removing teacher:', error);
            });
    };

    return (
        <div>
            <h1>Remove Teacher from Subject</h1>
            <button onClick={handleRemoveTeacher}>Remove Teacher</button>
        </div>
    );
};

export default RemoveTeacher;
