import React, { Component } from "react";
import { NavItem, NavLink } from "reactstrap";

export default class AllApartments extends Component {
  render() {
    const { allapartments } = this.props;
    console.log(allapartments);
    return (
      <div>
        <NavLink href="/">Home</NavLink>
        <h2>All Apartments</h2>
        {allapartments.map((apartment) => {
          return (
            <div key={apartment.id}>
              <h2>{apartment.apartment_name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
