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
      tasks: [
        {
          title: "Lavar platos y recoger toda la casa",
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ form: { title: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { form, tasks } = this.state;
    console.log(form);
    tasks.push(form);
    this.setState({ form: { title: undefined }, tasks: tasks });
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
          <TaskList tasks={this.state.tasks} />
        </header>
      </div>
    );
  }
}

export default App;
