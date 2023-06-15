import * as Yup from "yup";

export const TaskSchema = Yup.object({
  title: Yup.string().min(1).max(50).required("* Please enter the title"),
  description: Yup.string().min(1).required("* Please enter the description"),
});
