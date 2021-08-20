import Task from "../Task/Task.component";

const TaskList = ({ tasks, ...otherProps }) => {
  const taskArray = tasks.map((task, index) => (
    <Task
      key={index}
      id={task.id}
      title={task.title}
      isCompleted={task.isCompleted}
      {...otherProps}
    />
  ));
  return <div>{taskArray}</div>;
};

export default TaskList;
