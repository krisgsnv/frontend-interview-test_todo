import { useSelector } from "react-redux";

import { TaskItem } from "../../widgets/TaskItem";
import { selectAllTasks } from "../../shared/utils/store/reducers/tasksSlice";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </ul>
  );
};
