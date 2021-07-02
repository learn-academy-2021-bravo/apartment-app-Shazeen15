import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props;
    console.log(apartment);
    return (
      <div>
        <h2>Apartment Show</h2>
        {apartment && (
          <div>
            <h4>{apartment.apartment_name}</h4>
            <p>{apartment.street}</p>
            <p>{apartment.state}</p>
            <p>{apartment.bedrooms}</p>
            <p>{apartment.bathrooms}</p>
            <p>${apartment.price}</p>
          </div>
        )}
        <div className="lp-links">
          <NavLink to="/allapartmentsindex">
            <Button>Apartments</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
