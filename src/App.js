import React from "react";
// import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";
import todosData from "./components/JSON/todosData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: 0,
    };
    this.add = this.add.bind(this);
  }
  logMe() {
    console.log("Test");
  }
  add() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  render() {
    // const todoItems = this.state.todos.map((item) => (
    //   <TodoItem key={item.id} {...item} />
    // ));

    return (
      <div>
        <Header />
        <button onClick={this.add}>Click me!</button>
        <h1>{this.state.count}</h1>
        {/* {todoItems} */}
        {/* {/* <MainContent />  */}
        <Footer />
      </div>
    );
  }
}

export default App;
