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
    <div>
      <h1> A school project in React</h1>
      <p>
        In this project i used React techniques like React Router, useContext,
        useState, useEffect, Formik and Styled components. A big thanks to
        thecatapi.com for providing all the cat data in this project.
      </p>
      <p> /Samuel Sundberg</p>
    </div>
  );
}
export default Contact;
