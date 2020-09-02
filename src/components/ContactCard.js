import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgUrl} alt={`${props.name}`} />
      <h3>Name: {props.name} </h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
