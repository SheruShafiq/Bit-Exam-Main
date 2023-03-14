import React from "react";
import emailjs from "@emailjs/browser";
import "../styles/FormStyles.css";
import FormInputField from "./FormInputField";

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nh0au8c",
      "template_k07o36l",
      e.target,
      "WaOT6BUTbyQbhGR8B"
    );
    console.log("Email sent");
  };
  return (
    <div className="Form">
      <form className="contact__form" onSubmit={sendEmail}>
        <FormInputField type="text" name="name" id="name" title="Naam" />
        <FormInputField
          type="date"
          name="date"
          id="date"
          title="Geboortedatum"
        />
        <FormInputField type="email" name="email" id="email" title="Email" />
        <FormInputField type="tel" name="tel" id="tel" title="Telefoon" />
        <FormInputField type="url" name="github" id="github" title="GitHub" />
        <FormInputField
          type="url"
          name="linkdin"
          id="linkdin"
          title="Linkdin"
        />
        <FormInputField
          type="url"
          name="portfolio"
          id="portfolio"
          title="Portfolio website"
        />
        <FormInputField
          type="text"
          name="Opleiding"
          id="Opleiding"
          title="Opleiding"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
