import { memo, useContext, useMemo } from "react";
import { TaskContext } from "../../context/TasksContext";

const TodoInfo = (props) => {
  const { styles } = props;
  const { tasks, deleteAllTasks } = useContext(TaskContext);

  const total = tasks.length;
  const hasTasks = total > 0;
  const done = useMemo(
    () => tasks.filter(({ isDone }) => isDone).length,
    [tasks],
  );

  return (
    <div className={styles.info}>
      <div className={styles.totalTasks}>
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className={styles.deleteAllButton}
          type="button"
          onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  );
};
export default memo(TodoInfo);
