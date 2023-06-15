import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AddTaskPage from "./pages/addTaskPage/addPage";
import UpdateTaskPage from "./pages/updatetask/updateTask";
import "./App.css";
import ReadTaskPage from "./pages/readTask/readTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addtask" element={<AddTaskPage />} />
          <Route path="/task" element={<ReadTaskPage />} />
          <Route path="/updatetask" element={<UpdateTaskPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
