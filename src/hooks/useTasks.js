import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import taskAPI from "../api/tasksAPI";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [disappearindTaskId, setDisappearingTaskId] = useState(null);
  const [appearindTaskId, setAppearingTaskId] = useState(null);

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all?");

    if (isConfirmed) {
      taskAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      taskAPI.delete(taskId).then(() => {
        setDisappearingTaskId(taskId);
        setTimeout(() => {
          setTasks(tasks.filter((task) => task.id !== taskId));
          setDisappearingTaskId(null);
        }, 400);
      });
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      taskAPI.toggleComplete(taskId, isDone).then(
        setTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }
            return task;
          }),
        ),
      );
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    taskAPI.add(newTask).then((addedTask) => {
      setTasks((prev) => [...prev, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
      setAppearingTaskId(addedTask.id);
      setTimeout(() => {
        setAppearingTaskId(null);
      }, 400);
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();
    taskAPI.getAll().then(setTasks);
  }, []);

  const filteredTask = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
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
  };
};

export default useTasks;
