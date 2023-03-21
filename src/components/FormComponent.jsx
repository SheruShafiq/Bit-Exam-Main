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
    { id: "name-field", type: "text", name: "name", label: "Naam" },
    {
      id: "date-field",
      type: "date",
      name: "date",
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
    { id: "email-field", type: "email", name: "email", label: "Email" },
    { id: "tel-field", type: "tel", name: "tel", label: "Telefoon" },
    { id: "github-field", type: "url", name: "github", label: "GitHub" },
    { id: "linkdin-field", type: "url", name: "linkdin", label: "Linkdin" },
    {
      id: "portfolio-field",
      type: "url",
      name: "portfolio",
      label: "Portfolio website",
    },
    {
      id: "opleiding-field",
      type: "text",
      name: "Opleiding",
      label: "Opleiding",
    },
    {
      id: "solicitatiebrief-field",
      type: "file",
      name: "Solicitatie brief",
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
      id: "cv-upload-field",
      type: "file",
      name: "CV uploaden",
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
      id: "found-us-field",
      type: "textarea",
      name: "Hoe heb je ons gevonden?",
      label: "Hoe heb je ons gevonden?",
    },
  ];

  const half = Math.ceil(textFieldProps.length / 2);
  return (
    <>
      <div className="FormMobile">
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

      <div className="FormDesktop">
        <form className="contact__form" onSubmit={sendEmail}>
          <div id="firstHalf">
            {textFieldProps.slice(0, half).map((textField) => (
              <TextField
                // x
                key={textField.id}
                variant="standard"
                placeholder=""
                id="inputField"
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
                  width: "768px",
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
          </div>
          <div id="secondHalf">
            {textFieldProps.slice(half).map((textField) => (
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
                  width: "768px",
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
            {/* These are the submit buttons that switch depending on the state */}
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
          </div>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
