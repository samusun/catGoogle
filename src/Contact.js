import { Field, ErrorMessage, Form, Formik } from "formik";
import "./Contact.css";
import styled from "styled-components";
import contact from "./pics/contact.svg";

const Warning = styled.p`
  margin: 0;
  color: lightgoldenrodyellow;
`;

function Contact() {
  return (
    <>
      <img id="contact" src={contact} alt="Logo" />
      <Formik
        initialValues={{ email: "", userName: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        validate={(values) => {
          const errors = {};

          if (values.userName.trim() === "") {
            errors.userName = "Please enter your name";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Please enter a valid email";
          }

          if (values.message.trim() === "") {
            errors.message = "Message cannot be empty";
          }

          return errors;
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="Form">
            <label>
              Name
              <Field name="userName" />
            </label>
            <Warning>
              <ErrorMessage component="span" name="userName" />
            </Warning>
            <label>
              Email
              <Field name="email" />
            </label>
            <Warning>
              <ErrorMessage component="span" name="email" />
            </Warning>
            <label>
              Message ​
              <Field component="textarea" rows="10" cols="50" name="message" />
            </label>
            <Warning>
              <ErrorMessage component="span" name="message" />
            </Warning>
            <input
              disabled={!dirty || isSubmitting || !isValid}
              type="submit"
              id="submitBtn"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
export default Contact;
