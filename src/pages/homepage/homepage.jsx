import { useNavigate } from "react-router-dom";
import TaskCard from "../../components/taskCard";
import useFetch from "../../hooks/useFetch";
const Homepage = () => {
  const { data, loading, error, setData } = useFetch("/tasks/allTask");
  const navigate = useNavigate();

  return (
    <>
      <h1>Task manager</h1>
      {data.map((item, index) => (
        <TaskCard key={index} item={item} />
      ))}
      <div
        className="plus"
        onClick={() => {
          navigate("/addtask");
        }}
      >
        +
      </div>
    </>
  );
};

export default Homepage;
