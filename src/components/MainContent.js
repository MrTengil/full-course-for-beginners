import React from "react";
// import ToDo from "./ToDo.js";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./JSON/jokesData";
import contactsData from "./JSON/contactsData";
import vschoolProducts from "./JSON/vschoolProducts";
import Product from "./Product";

function MainContent() {
  return (
    <div className="Main-Content">
      {contactsData.map((item) => (
        <ContactCard {...item} key={item.id} />
      ))}
      {vschoolProducts.map((item) => (
        <Product {...item} key={item.id} />
      ))}

      {jokesData.map((item) => (
        <Joke {...item} key={item.id} />
      ))}
    </div>
  );
}

export default MainContent;
