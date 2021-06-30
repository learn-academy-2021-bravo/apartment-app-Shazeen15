import React, { Component } from "react";

export default class Dash extends Component {
  render() {
    const { current_user } = this.props;
    return (
      <div className="dash">
        <h2>Welcome {current_user.email}</h2>
      </div>
    );
  }
}
