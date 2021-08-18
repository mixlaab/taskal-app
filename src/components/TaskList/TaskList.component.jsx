import Task from "../Task/Task.component";

const TaskList = ({ tasks }) => {
  const taskArray = tasks.map((task, index) => (
    <Task key={index} title={task.title} />
  ));
  return <div>{taskArray}</div>;
};

export default TaskList;
