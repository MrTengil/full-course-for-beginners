import React from "react";
// import ToDo from "./ToDo.js";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./JokesData";
import ContactsData from "./ContactsData";

function MainContent() {
  return (
    <div className="Main-Content">
      {ContactsData.map((item) => (
        <ContactCard {...item} />
      ))}
      {jokesData.map((item) => (
        <Joke {...item} />
      ))}
    </div>
  );
}

export default MainContent;
