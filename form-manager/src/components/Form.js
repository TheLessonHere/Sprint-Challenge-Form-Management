import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function UserForm({ errors, touched, isSubmitting }) {

    return (
      <div className="container">
      <Form>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password"  />
        </div>
        <div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
      </Form>
      </div>
    );
  }
  
  const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || "",
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(2, "Username must be at least 2 characters")
        .max(15, "Username cannot be longer than 15 characters")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be 16 characters or longer")
        .required("Password is required"),
    }),
    handleSubmit(values, { resetForm, setSubmitting }) {
    axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
        console.log(res.data.message);
        resetForm();
        setSubmitting(false);
        })
        .catch(err => {
        console.log('Request failed', err);
        setSubmitting(false);
        });
    }
  })(UserForm);
  
  export default FormikForm;