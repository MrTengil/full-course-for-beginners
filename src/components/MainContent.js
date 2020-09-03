import React from "react";
// import ToDo from "./ToDo.js";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./JSON/jokesData";
import contactsData from "./JSON/contactsData";
import vschoolProducts from "./JSON/vschoolProducts";
import todosData from "./JSON/todosData";
import Product from "./Product";
import TodoItem from "./TodoItem";

function MainContent() {
  return (
    <div className="Main-Content">
      {todosData.map((item) => (
        <TodoItem {...item} key={item.id} />
      ))}
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
