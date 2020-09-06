import React from "react";

function TodoItem(props) {
  console.log("R");
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={(event) =>
          props.handleChange(props.item.id, event.currentTarget.checked)
        }
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
