import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        apartment_name: "",
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        pets: "",
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createApartment(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="main-body">
        <h2>Add a New Apartment</h2>
        <br />
        <div className="form">
          <Form>
            <FormGroup>
              <Label for="apartment_name" id="apartment_name">
                Apartment Name?
              </Label>
              <Input
                type="text"
                name="apartment_name"
                onChange={this.handleChange}
                value={this.state.form.apartment_name}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="street" id="street">
                Street
              </Label>
              <Input
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.form.street}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="city" id="city">
                City
              </Label>
              <Input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.form.city}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="state" id="state">
                state
              </Label>
              <Input
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.form.state}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="manager" id="manager">
                manager
              </Label>
              <Input
                type="text"
                name="manager"
                onChange={this.handleChange}
                value={this.state.form.manager}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="email" id="email">
                email
              </Label>
              <Input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="price" id="price">
                price
              </Label>
              <Input
                type="text"
                name="price"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="bedrooms" id="bedrooms">
                bedrooms
              </Label>
              <Input
                type="number"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.form.bedrooms}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="bathrooms" id="bathrooms">
                bathrooms
              </Label>
              <Input
                type="number"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.form.bathrooms}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="pets" id="pets">
                pets
              </Label>
              <Input
                type="text"
                name="pets"
                onChange={this.handleChange}
                value={this.state.form.pets}
              />
            </FormGroup>
            <br />
            <Button name="sumbit" onClick={this.handleSubmit}>
              Add New Apartment
            </Button>
          </Form>
        </div>
        {this.state.submitted && <Redirect to="/apartmentindex" />}
      </div>
    );
  }
}
