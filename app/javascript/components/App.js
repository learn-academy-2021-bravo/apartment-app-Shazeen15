import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./pages/Dash";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import ApartmentIndex from "./pages/ApartmentIndex";
import AllApartmentShow from "./pages/AllApartmentShow";
import AllApartmentsIndex from "./pages/AllApartmentsIndex";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allapartments: [],
    };
  }

  componentDidMount() {
    this.readAllApartment();
  }

  readAllApartment = () => {
    fetch("http://localhost:3000/apartments")
      .then((res) => res.json())
      .then((payload) => {
        this.setState({ allapartments: payload });
      })
      .catch((errors) => {
        console.log("read errors:", errors);
      });
  };

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
        {logged_in && (
          <Header
            logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
        )}
        <Router>
          <Switch>
            {!logged_in && (
              <Route
                exact
                path="/"
                render={(props) => (
                  <LandingPage
                    new_user_route={new_user_route}
                    sign_in_route={sign_in_route}
                  />
                )}
              />
            )}
            {logged_in && (
              <Route
                exact
                path="/"
                render={(props) => <Dash current_user={current_user} />}
              />
            )}
            <Route
              path="/apartmentindex"
              render={(props) => {
                return <ApartmentIndex />;
              }}
            />
            <Route
              path="/allapartmentsindex"
              render={(props) => {
                return (
                  <AllApartmentsIndex
                    allapartments={this.state.allapartments}
                    new_user_route={new_user_route}
                    sign_in_route={sign_in_route}
                  />
                );
              }}
            />
            <Route
              path="/allapartmentshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let apartment = this.state.allapartments.find(
                  (apartment) => apartment.id === +id
                );
                return <AllApartmentShow apartment={apartment} />;
              }}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
