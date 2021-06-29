import React from "react";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";

class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <React.Fragment>
        {logged_in && (
          <Header
            logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
        )}
        {!logged_in && (
          <LandingPage
            new_user_route={new_user_route}
            sign_in_route={sign_in_route}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
