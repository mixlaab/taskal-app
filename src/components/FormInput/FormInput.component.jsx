import "./FormInput.styles.scss";

const FormInput = ({ handleChange, handleSubmit, value }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="addtask-container">
        {value ? (
          <input
            placeholder="Add new task"
            value={value}
            type="text"
            name="form"
            className="input"
            onChange={handleChange}
          ></input>
        ) : (
          <input
            placeholder="Add new task"
            value={""}
            type="text"
            name="form"
            className="input"
            onChange={handleChange}
          ></input>
        )}
        <button className="button" />
      </div>
    </form>
  );
};

export default FormInput;
