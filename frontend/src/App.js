import './App.css';
import {BrowseRouter, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import AllStudents from "./Components/AllStudents";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/api/students" element={<AllStudents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
