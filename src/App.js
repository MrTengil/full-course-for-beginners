import React from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return (
    <div>
      <Header />
      <h1>Good {timeOfDay}!</h1>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
