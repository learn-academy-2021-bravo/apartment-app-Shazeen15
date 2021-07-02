import React, { Component } from "react";
import { Button, NavLink } from "reactstrap";

export default class LandingPage extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route } = this.props;
    return (
      <>
        <section className="landing-page">
          <div className="lp-links">
            {!logged_in && (
              <NavLink href={new_user_route}>
                <Button>Sign Up</Button>
              </NavLink>
            )}
          </div>

          <div className="lp-links">
            {!logged_in && (
              <NavLink href={sign_in_route}>
                <Button>Sign In</Button>
              </NavLink>
            )}
          </div>

          <div className="lp-links">
            <NavLink href="/allapartmentsindex">
              <Button>Apartments</Button>
            </NavLink>
          </div>
        </section>
      </>
    );
  }
}
