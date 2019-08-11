import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import UsersContainer from "./components/UsersContainer";

export default class App extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
      users: []
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.github.com/search/users?q=${event.target.searchBar.value}`
    )
      .then(resp => resp.json())
      .then(data => {this.setState({
          users: data.items
        });
      });
  };

  render() {
    return (
      <div id="main">
        <h2>GitHub Search</h2>

        <Form
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
          handleSubmit={this.handleSubmit}
        />
        <UsersContainer className="github-container" users={this.state.users} />
      </div>
    );
  }
}
