import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTask,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTask?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>;
  }

  return (
    <ul className="todo__list">
      {(filteredTask ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          {...task}
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}

      {/* <TodoItem
        className="todo__item"
        id="task-1"
        title="Купить молоко"
        isDone={false}
      />
      <TodoItem
        className="todo__item"
        id="task-2"
        title="Погладить кота"
        isDone
      /> */}
    </ul>
  );
};
export default TodoList;
