import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

const SubjectList = () => {
    const [subjects, setSubjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Funkcja do pobierania przedmiotów z API
    const fetchSubjects = (page) => {
        axios.get(`http://127.0.0.1:8000/api/subjects?page=${page}`)
            .then(response => {
                setSubjects(response.data.data);  // Otrzymujemy dane z "data"
                setCurrentPage(response.data.current_page);  // Numer bieżącej strony
                setTotalPages(response.data.last_page);  // Łączna liczba stron
            })
            .catch(error => {
                console.error('Error fetching subjects:', error);
            });
    };

    // Załaduj dane przedmiotów na pierwszej stronie
    useEffect(() => {
        fetchSubjects(currentPage);
    }, [currentPage]);

    // Funkcja do obsługi kliknięcia na poprzednią stronę
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Funkcja do obsługi kliknięcia na następną stronę
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">Subjects</h1>
                <Link
                    to="/subjects/add"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4 inline-block"
                >
                    Add New Subject
                </Link>

                <ul className="space-y-4">
                    {subjects.map(subject => (
                        <li key={subject.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center justify-between">
                                <Link to={`/subjects/${subject.id}`} className="text-xl font-semibold text-gray-800 hover:underline">
                                    {subject.name}
                                </Link>

                                <Link
                                    to={`/subjects/${subject.id}/teachers/add`}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 ml-4"
                                >
                                    Assign Teacher
                                </Link>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full">{subject.name}</span>
                                <span className="text-gray-500 text-sm">{subject.created_at}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Paginacja */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubjectList;
