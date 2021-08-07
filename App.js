import React from "react"
import './App.css';
import { Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup'

const App =()=> {
  const schema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
  });
  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={data   => {
          
          console.log('Submit',data);

        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
