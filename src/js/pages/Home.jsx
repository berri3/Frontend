import React from "react";


export default class Home extends React.Component {
    /*login = [];
    login = this.props.location.state.login;*/

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            username: "",
            password: "",
            isLoggedIn: false
        };
    }
  render() {
    return (
      <div>
        <h1>
        	Home
        </h1>
          <p>This page is visible to everyone</p>
      </div>
    );
  }
}