import "./App.css";
import React from "react";
import TaskList from "./components/TaskList/TaskList.component";
import FormInput from "./components/FormInput/FormInput.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: undefined,
        id: 0,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      form: {
        title: e.target.value,
        id: prevState.form.id,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { form, tasks } = this.state;
    form["isCompleted"] = false;
    tasks.push(form);
    this.setState((prevState) => ({
      form: { title: undefined, id: prevState.form.id + 1 },
      tasks: tasks,
    }));
  };

  handleRemove = (id) => {
    let { tasks } = this.state;
    let newTasks = tasks.filter((el) => el.id !== id);
    this.setState({
      tasks: newTasks,
    });
  };

  handleCheck = (id) => {
    let { tasks } = this.state;
    const newTasks = tasks.map((item) =>
      item.id === id
        ? { title: item.title, id: item.id, isCompleted: !item.isCompleted }
        : { title: item.title, id: item.id, isCompleted: item.isCompleted }
    );
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Taskal</h1>
          <FormInput
            value={this.state.form.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TaskList
            tasks={this.state.tasks}
            handleRemove={this.handleRemove}
            handleCheck={this.handleCheck}
          />
        </header>
      </div>
    );
  }
}

export default App;
