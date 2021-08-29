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
      },
      tasks: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:4040/api/tasks/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tasks: data,
        });
      });
  }

  handleChange = (e) => {
    this.setState(() => ({
      form: {
        title: e.target.value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4040/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: this.state.form.title }),
    });

    await fetch("http://localhost:4040/api/tasks/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          form: { title: undefined },
          tasks: data,
        });
      });
  };

  handleRemove = async (id) => {
    await fetch(`http://localhost:4040/api/tasks/${id}`, {
      method: "DELETE",
    });

    await fetch("http://localhost:4040/api/tasks/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          form: { title: undefined },
          tasks: data,
        });
      });
  };

  handleCheck = async (id) => {
    await fetch(`http://localhost:4040/api/tasks/${id}/changestatus`, {
      method: "PUT",
    });

    await fetch("http://localhost:4040/api/tasks/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          form: { title: undefined },
          tasks: data,
        });
      });
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
