import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgUrl} style={{ maxBlockSize: "20px 20px" }} />
      <h3>Name: {props.name} </h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
