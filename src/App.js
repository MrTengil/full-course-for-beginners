import React from "react";
// import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import todosData from "./components/JSON/todosData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      // count: 0,
    };
    // this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  logMe() {
    console.log("Test");
  }
  // add() {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // }

  handleChange(id) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            console.log("före:", todo.completed);
            todo.completed = !todo.completed;
            console.log("efter:", todo.completed);
          }
          console.log("boj");
          return todo;
        }),
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div>
        <Header />
        {/* <button onClick={this.add}>Click me!</button>
        <h1>{this.state.count}</h1> */}
        {todoItems}
        {/* {/* <MainContent />  */}
        <Footer />
      </div>
    );
  }
}

export default App;
