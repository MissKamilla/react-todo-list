import Field from "./Field";
import Button from "./Button";
import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TaskContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default AddTaskForm;
