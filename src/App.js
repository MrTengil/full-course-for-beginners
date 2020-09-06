import React from "react";
// import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      // todonts: todontsData,
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

  handleChange(id, newState) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = newState;
          // todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
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
