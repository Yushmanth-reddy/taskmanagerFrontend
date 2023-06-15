import { useNavigate, useSearchParams } from "react-router-dom";
import { TaskSchema } from "../../schemas";
import { useFormik } from "formik";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const ReadTaskPage = () => {
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("id");
  const { data, loading, error, setData } = useFetch(
    `/tasks/readTask/${taskId}`
  );

  return (
    <div className="add-task-form">
      <h2>Read Task</h2>
      <form>
        <div>
          <p htmlFor="title" className="labels">
            Title:
          </p>
          <input type="text" id="title" name="title" value={data.title} />
        </div>
        <div>
          <p htmlFor="description" className="labels">
            Description:
          </p>
          <textarea
            id="description"
            name="description"
            value={data.description}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ReadTaskPage;
