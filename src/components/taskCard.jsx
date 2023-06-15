import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ item }) => {
  const [task, setTask] = useState(item);
  const navigate = useNavigate();

  const handleDeleteTask = async (taskId) => {
    try {
      const res = await axios.delete(`/tasks/deleteTask/${taskId}`);
      console.log(res);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateStatus = async (taskId) => {
    const updatedTasks = {
      ...task,
      isComplete: !task.isComplete ? true : false,
    };
    setTask(updatedTasks);
    try {
      const res = await axios.put(`/tasks/updateTask/${taskId}`, updatedTasks);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="task">
        <div
          onClick={() => {
            navigate(`/task?id=${task._id}`);
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="task-actions">
          <button
            className={`status-button ${
              task.isComplete ? "completed" : "pending"
            }`}
            onClick={() => handleUpdateStatus(task._id)}
          >
            {task.isComplete ? "Completed" : "Pending"}
          </button>
          <button
            className="delete-button"
            onClick={() => {
              navigate(`/updatetask?id=${task._id}`);
            }}
          >
            Update
          </button>
          <button
            className="delete-button"
            onClick={() => handleDeleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
