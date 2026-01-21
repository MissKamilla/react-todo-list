import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props;
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
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
