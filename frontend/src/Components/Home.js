import Navbar from "./Navbar";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="min-h-screen bg-gray-100 py-12 flex flex-col justify-between">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Student Management System</h1>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        Manage student records effortlessly with our intuitive platform. Add, update, delete, and view student details with ease.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Students</h2>
                            <p className="text-gray-600 mb-4">Quickly add new students to your database with just a few clicks.</p>
                            <Link to="api/students/add">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Students</h2>
                            <p className="text-gray-600 mb-4">Easily access the full list of students, along with their details.</p>
                            <Link to="api/students">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subjects</h2>
                            <p className="text-gray-600 mb-4">Easily access the full list of Subjects, along with their details.</p>
                            <Link to="subjects">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <footer className="mt-12 bg-gray-800 text-white py-6">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2025 Student Management System. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}
