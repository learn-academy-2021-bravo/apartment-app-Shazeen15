import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        {!logged_in && (
          <div>
            <a href={new_user_route}>Sign Up</a>
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
      </>
    );
  }
}
