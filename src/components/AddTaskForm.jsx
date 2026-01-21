import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { addTask } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field className="todo__field" id="new-task" label="New task title" />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default AddTaskForm;
