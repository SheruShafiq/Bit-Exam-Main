import React from "react";

function FormInputField(...props) {
  const type = props[0].type;
  const name = props[0].name;
  const id = props[0].id;
  const className = props[0].className;
  const title = props[0].title;
  return (
    <>
      <p id="fieldTitle">{title}</p>
      <input type={type} name={name} id={id} className="inputFields" />
    </>
  );
}

export default FormInputField;
