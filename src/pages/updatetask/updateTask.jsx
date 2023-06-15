import { useNavigate, useSearchParams } from "react-router-dom";
import { TaskSchema } from "../../schemas";
import { useFormik } from "formik";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const UpdateTaskPage = () => {
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("id");
  const { data, loading, error, setData } = useFetch(
    `/tasks/readTask/${taskId}`
  );
  //   console.log(data);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: data,
      enableReinitialize: true,
      validationSchema: TaskSchema,
      onSubmit: (values, action) => {
        updateTask(values);
        action.resetForm();
      },
    });

  const updateTask = async (values) => {
    try {
      const res = await axios.put(`/tasks/updateTask/${taskId}`, values);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-task-form">
      <h2>Update Task</h2>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTaskPage;
