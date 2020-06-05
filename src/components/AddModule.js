import React from "react";

class AddModule extends React.Component {
  state = { id: 0, modulecode: "", mc: "", grade: "5.0" };

  handleModuleCode = (e) => {
    this.setState({ modulecode: e.target.value });
  };
  handleMC = (e) => {
    this.setState({ mc: e.target.value });
  };
  handleGrade = (e) => {
    this.setState({ grade: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.modulecode === "" || this.state.mc === "") {
      alert("Please fill in all fields.");
    } else {
      this.props.onSubmit(this.state);
      this.setState({
        id: this.state.id + 1,
        modulecode: "",
        mc: "",
        grade: "5.0",
      });
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form>
          <label>Module Code: </label>
          <div className="text container">
            <input
              type="text"
              value={this.state.modulecode}
              onChange={this.handleModuleCode}
              required
            />
          </div>

          <br />
          <label>MC: </label>
          <div className="text contaienr">
            <input
              type="text"
              value={this.state.mc}
              onChange={this.handleMC}
              required
            />
          </div>
          <br />
          <label>Grade: </label>
          <div className="text container">
            <select
              name="grade"
              value={this.state.grade}
              onChange={this.handleGrade}
            >
              <option value="5.0">A+/A</option>
              <option value="4.5">A-</option>
              <option value="4.0">B+</option>
              <option value="3.5">B</option>
              <option value="3.0">B-</option>
              <option value="2.5">C+</option>
              <option value="2.0">C</option>
              <option value="1.5">D+</option>
              <option value="1.0">D</option>
              <option value="0.0">F</option>
              <option value="S">S</option>
              <option value="U">U</option>
            </select>
          </div>
          <br />
          <input type="submit" value="ADD" onClick={this.onFormSubmit} />
        </form>
      </div>
    );
  }
}

export default AddModule;
