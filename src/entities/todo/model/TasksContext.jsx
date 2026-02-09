import { createContext } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";
export const TaskContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTask,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearindTaskId,
    appearindTaskId,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filteredTask,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearindTaskId,
        appearindTaskId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
