import React from "react";
// import ToDo from "./ToDo.js";
import ContactCard from "./ContactCard";
import Joke from "./Joke";

function MainContent() {
  return (
    <div className="Main-Content">
      {/* {cats.map((item) => (
        <ContactCard {...item} />
      ))} */}

      <Joke {...jokes[0]} />
    </div>
  );
}

var jokes = [
  {
    punchLine:
      "It's hard to explain puns to kleptomaniacs because they always take things literally.",
  },
  {
    question: "What is the best thing about Switzerland?",
    punchLine: "I don't know but the flag is a big plus!",
  },
  {
    question: "Hear about the new restaurant called Karma?",
    punchLine: "There is no menu: You get what you deserve!",
  },
  {
    question: "Why is the moon blue?",
    punchLine: "Because it's not grey!",
  },
];

var cats = [
  {
    name: "Mr Whiskerson",
    imgUrl:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat-768x384.png",
    phone: "+46 729643049",
    email: "MrWhiskerson@gmail.com",
  },
  {
    name: "Killer whale",
    imgUrl:
      "https://www.guinnessworldrecords.com/Images/killer-whale-header_tcm25-576318.jpg",
    phone: "+11414",
    email: "Killer_whale@gmail.com",
  },
  {
    name: "Mr Panda",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/3n8tRry6fYg7sNyhFDPQwR.jpg",
    phone: "+1357789",
    email: "MrPanda@gmail.com",
  },
  {
    name: "Louise Jacobsson",
    imgUrl:
      "https://scontent.farn2-1.fna.fbcdn.net/v/t1.0-9/37121517_1784116471666338_8430916760760221696_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=qAguYYNdQLYAX_a36ze&_nc_ht=scontent.farn2-1.fna&oh=724136d8a1d5b127fd40ef9ac6d32aec&oe=5F7432B6",
    phone: "+46 69 69 69",
    email: "blondTaby@hotmail.com",
  },
];

export default MainContent;
