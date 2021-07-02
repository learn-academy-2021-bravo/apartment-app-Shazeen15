import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, Row, Col } from "reactstrap";
export default class ApartmentIndex extends Component {
  render() {
    const { allapartments } = this.props;
    return (
      <div>
        <div className="allapartindex">
          {allapartments &&
            allapartments.map((apartment) => {
              return (
                <Row key={apartment.id}>
                  <Col sm="20">
                    <Card body>
                      <CardTitle tag="h5">{apartment.apartment_name}</CardTitle>
                      <p>{apartment.street}</p>
                      <p>{apartment.state}</p>
                      <p>{apartment.bedrooms}</p>
                      <p>{apartment.bathrooms}</p>
                      <p>${apartment.price}</p>
                      <Link to={`/allapartmentshow/${apartment.id}`}>
                        <Button>More Info Here</Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>
      </div>
    );
  }
}
