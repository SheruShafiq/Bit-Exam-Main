import React from "react";
import emailjs from "@emailjs/browser";
import "../styles/FormStyles.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

function FormComponent() {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [isLoading, SetIsLoading] = React.useState(false);
  const handleButtonClick = () => {};

  const sendEmail = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    try {
      // await emailjs.sendForm(
      //   "service_nh0au8c",
      //   "template_k07o36l",
      //   e.target,
      //   "WaOT6BUTbyQbhGR8B"
      // );
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
      console.log("Email sent");
      SetIsLoading(false);
      setError("error");
      navigate("/result", { error: error });
    } catch (error) {
      setError(error);
      navigate("/result", { error: error });
    }
  };
  const textFieldProps = [
    { type: "text", name: "name", id: "name", label: "Naam" },
    {
      type: "date",
      name: "date",
      id: "date",
      label: "Geboortedatum",
      focused: true,
      sx: {
        "& .MuiInputBase-input": {
          textAlignLast: "center",
        },

        width: "100%",
        marginTop: "2rem",
        color: "white",
        "& .MuiInput-underline:after": {
          borderBottomColor: " rgb(255,255,255, 0.1)",
          borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:before": {
          borderBottomWidth: "1px",
          borderBottomColor: " rgb(255,255,255, 0.3)",
        },
      },
      InputLabelProps: {
        style: { fontFamily: "Poppins", color: "white", fontSize: "20px" },
      },
      inputProps: {
        style: {
          fontFamily: "Poppins",
          color: "white",
          marginTop: "1rem",
        },
      },
    },
    { type: "email", name: "email", id: "email", label: "Email" },
    { type: "tel", name: "tel", id: "tel", label: "Telefoon" },
    { type: "url", name: "github", id: "github", label: "GitHub" },
    { type: "url", name: "linkdin", id: "linkdin", label: "Linkdin" },
    {
      type: "url",
      name: "portfolio",
      id: "portfolio",
      label: "Portfolio website",
    },
    {
      type: "text",
      name: "Opleiding",
      id: "Opleiding",
      label: "Opleiding",
    },
    {
      type: "file",
      name: "Solicitatie brief",
      id: "Solicitatiebrief",
      label: "Solicitatie brief",

      sx: {
        "& .MuiInputBase-input": {
          textAlignLast: "end",
        },

        width: "100%",
        marginTop: "1rem",
        color: "white",
        "& .MuiInput-underline:after": {
          borderBottomColor: " rgb(255,255,255, 0.1)",
          borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:before": {
          borderBottomWidth: "1px",
          borderBottomColor: " rgb(255,255,255, 0.3)",
        },
      },
    },
    {
      type: "file",
      name: "CV uploaden",
      id: "CVuploaden",
      label: "CV uploaden",

      sx: {
        "& .MuiInputBase-input": {
          textAlignLast: "end",
        },

        width: "100%",
        marginTop: "1rem",
        color: "white",
        "& .MuiInput-underline:after": {
          borderBottomColor: " rgb(255,255,255, 0.1)",
          borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:before": {
          borderBottomWidth: "1px",
          borderBottomColor: " rgb(255,255,255, 0.3)",
        },
      },
    },
    {
      type: "textarea",
      name: "Hoe heb je ons gevonden?",
      id: "Hoehebjeonsgevonden?",
      label: "Hoe heb je ons gevonden?",
    },
  ];

  return (
    <div className="Form">
      <form className="contact__form" onSubmit={sendEmail}>
        {textFieldProps.map((textField) => (
          <TextField
            // x
            key={textField.id}
            variant="standard"
            placeholder=""
            InputLabelProps={{
              style: { fontFamily: "Poppins", color: "white" },
            }}
            inputProps={{
              style: {
                fontFamily: "Poppins",
                color: "white",
                marginTop: "0.5rem",
              },
            }}
            sx={{
              input: { color: "white" },
              width: "100%",
              marginTop: "1rem",
              color: "white",
              "& .MuiInput-underline:after": {
                borderBottomColor: " rgb(255,255,255, 0.3)",
                borderBottomWidth: "1px",
              },
              "& .MuiInput-underline:before": {
                borderBottomWidth: "1px",
                borderBottomColor: " rgb(255,255,255, 0.3)",
              },
            }}
            {...textField}
          />
        ))}
        <div id="inputFields">
          <input
            type="submit"
            value="Verzenden"
            id="submitForm"
            onClick={handleButtonClick}
          />
          {isLoading ? (
            <div id="submitFormProcessing">
              <CountUp delay={1} end={100} />
              <p> % </p>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
