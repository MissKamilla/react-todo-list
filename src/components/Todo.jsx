import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    {
      className: "todo__item",
      id: "task-1",
      title: "Купить молоко",
      isDone: false,
    },
    {
      className: "todo__item",
      id: "task-2",
      title: "Погладить кота",
      isDone: true,
    },
  ];

  const deleteAllTasks = () => {
    console.log("Delete all tasks");
  };

  const deleteTask = (taskId) => {
    console.log(`Delete item id: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? "done" : "undone"}`);
  };

  const filterTasks = (query) => {
    console.log(`Search by ${query}`);
  };

  const addTask = () => {
    console.log("Task added!");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};
export default Todo;
