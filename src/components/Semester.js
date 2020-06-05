import React from "react";
import AddModule from "./AddModule";

class Semester extends React.Component {
  state = { modules: [] };

  addToList = (obj) => {
    this.setState((state) => {
      const modules = state.modules.concat(obj);

      return {
        modules,
      };
    });
  };

  removeModule = (obj) => {
    this.setState((state) => {
      const modules = state.modules.filter((module) => module.id !== obj.id);

      return {
        modules,
      };
    });
  };

  componentDidUpdate() {
    this.props.onListUpdate(this.state.modules);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <AddModule onSubmit={this.addToList} />

        {this.state.modules.map((module) => {
          return (
            <div class="item" key={module.id}>
              <div class="right floated content">
                <input
                  type="submit"
                  value="-"
                  onClick={() => this.removeModule(module)}
                />
              </div>
              <i class="large github middle aligned icon"></i>
              <div class="content">
                <a class="header">{module.modulecode}</a>
                <div class="description">
                  {module.mc} MC, {module.grade} grade
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Semester;
