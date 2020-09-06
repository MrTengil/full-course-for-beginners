import React from "react";

function TodoItem(props) {
  console.log("R");
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={(event) => {
          event.stopPropagation();
          event.preventDefault();
          props.handleChange(props.item.id);
        }}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
