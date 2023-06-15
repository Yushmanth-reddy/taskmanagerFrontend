import { useNavigate } from "react-router-dom";
import { TaskSchema } from "../../schemas";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  title: "",
  description: "",
};

const AddTaskPage = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: TaskSchema,
      onSubmit: (values, action) => {
        postTask(values);
        action.resetForm();
      },
    });

  const postTask = async (values) => {
    try {
      const res = await axios.post("/tasks/createTask", values);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-task-form">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p htmlFor="title" className="labels">
            Title:
          </p>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title ? (
            <p className="form-error">{errors.title}</p>
          ) : null}
        </div>
        <div>
          <p htmlFor="description" className="labels">
            Description:
          </p>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && touched.description ? (
            <p className="form-error">{errors.description}</p>
          ) : null}
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
