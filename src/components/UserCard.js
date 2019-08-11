import React, { Component } from "react";
import ReposContainer from "./ReposContainer";

export default class UserCard extends Component {
  
  state = {
      showRepos: false,
      repos: []
  }

  reposOnDom = (repos) => {
      return (
        <div>
            <ul id="repos-list">
                {repos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
      );
    };
    // reposOnDom = (repos) => {
    //     return (
    //     repos.map(repo => (<div><ReposContainer key={repo.id} repo={repo} /></div>)   
    //     ))
    // } 


    toggleShowRepos = () => this.setState({ showRepos: !this.state.showRepos });

    fetchRepos = event => {
      this.toggleShowRepos();
      fetch(`https://api.github.com/users/${event.target.value}/repos`, {
              "Accept": "application/vnd.github.v3+json"
          },)
        .then(resp => resp.json())
        .then(data => this.setState({ repos: data}));
    };

  render() {
      let user = this.props.user || {};

    return (
      <div>
        <li>
            <h3>{user.login}</h3>
            <button value={user.login} onClick={event => this.fetchRepos(event)}>
                {this.state.showRepos ? "Hide Repos" : "Show Repos"}
            </button>
            <img src={user.avatar_url} alt={user.avatar_url} />
           {/* {this.state.showRepos && <ReposContainer repos={this.state.repos}/>} */}
           {this.state.showRepos && this.reposOnDom(this.state.repos)}
          {/* {this.state.repos !== [] ? this.reposOnDom(this.state.repos) : <></>} */}
        </li>
      </div>
    );
  }
}
