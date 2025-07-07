import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
function SignupScreen() {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    Email: "",
    Password: "",
    confirmpassword: "",
    phoneNumber: "",
    gender: "",
    userType: "",
    termsAccepted: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    Email: "",
    Password: "",
    confirmpassword: "",
    phoneNumber: "",
    gender: "",
    userType: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type == "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const isFormValid = () => {
    return (
      Object.values(formErrors).every((error) => error === null) &&
      Object.values(formValues).every(
        (values) => values !== "" && values !== false
      )
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form>
              <br />
              <h3 className="text-center">Signup Here</h3>

              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your First Name"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="lastname" className="mt-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="Email" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email Address"
                  name="Email"
                  value={formValues.Email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="PhoneNumber" className="mt-2">
                <Form.Label>PhoneNumber</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your PhoneNumber"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="pass1" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={formValues.Password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="pass1" className="mt-2">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Confirm your Password"
                  name="confirmpassword"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                />
              </Form.Group>

              <div key={`inline-radio`} className="mb-3 mt-2">
                <Form.Check
                  inline
                  label="Student"
                  name="userType"
                  value={formValues.userType}
                  onChange={handleChange}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Professional"
                  name="userType"
                  value={formValues.userType}
                  onChange={handleChange}
                  type="radio"
                  id={`inline-radio-2`}
                />
              </div>

              <Form.Select
                className="mt-3"
                aria-label="Select Gender"
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
              >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>

              <Form.Group className="mt-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  name="termsAccepted"
                  value={formValues.termsAccepted}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="mt-3"
                variant="success"
                disabled={!isFormValid()}
              >
                Register
              </Button>
            </Form>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupScreen;
