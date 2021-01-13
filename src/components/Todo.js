import React from "react";
import { Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { DeleteFilled } from "@ant-design/icons";
import "./Todo.css";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          textDecoration: todo.isCompleted ? "line-through" : "",
          color: todo.isCompleted ? "grey" : "",
        }}
        className="todo"
      >
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeTodo(index)}
        >
          {" "}
        </Checkbox>
        {todo.text}
        &nbsp;
      </div>
      <div>
        <Button
          style={{ alignSelf: "end" }}
          type="text"
          size="small"
          onClick={() => removeTodo(index)}
        >
          <DeleteFilled
            style={{
              color: "rgba(0,0,0,.45)",
            }}
          ></DeleteFilled>
        </Button>
      </div>
    </>
  );
};

export default Todo;
