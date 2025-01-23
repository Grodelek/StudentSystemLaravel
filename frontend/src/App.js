import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./Components/Home";
import AllStudents from "./Components/Students/AllStudents";
import StudentsForm from "./Components/Students/StudentsForm";
import SubjectList from "./Components/Subjects/SubjectList";
import AddSubject from "./Components/Subjects/AddSubject";
import SubjectDetail from "./Components/Subjects/SubjectDetail";
import AddTeacher from "./Components/Teachers/AddTeacher";
import RemoveTeacher from "./Components/Teachers/RemoveTeacher";

function App() {
    const [highContrast, setHighContrast] = useState(false);

    const toggleContrast = () => {
        setHighContrast(!highContrast);
    };

    return (
        <div className={highContrast ? 'high-contrast' : ''}>
            <BrowserRouter>
                <button onClick={toggleContrast} className="contrast-toggle">
                    {highContrast ? 'Włącz normalny kontrast' : 'Włącz wysoki kontrast'}
                </button>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/api/students" element={<AllStudents />} />
                    <Route path="/api/students/add" element={<StudentsForm />} />
                    <Route path="/subjects" element={<SubjectList />} />
                    <Route path="/subjects/add" element={<AddSubject />} />
                    <Route path="/subjects/:id" element={<SubjectDetail />} />
                    <Route path="/subjects/:id/teachers/add" element={<AddTeacher />} />
                    <Route path="/subjects/:id/teachers/:teacherId/remove" element={<RemoveTeacher />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
