import './App.css';
import {BrowseRouter, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import AllStudents from "./Components/Students/AllStudents";
import StudentsForm from "./Components/Students/StudentsForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/api/students" element={<AllStudents/>}/>
          <Route path="/api/add/students" element={<StudentsForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
