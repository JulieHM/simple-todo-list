import React from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button } from "antd";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState(""); //Start off with empty state
  const [visibility, setVisibility] = React.useState("none");

  //handleSubmit function used for adding todos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const showInputfield = () => {
    if (visibility === "none") {
      setVisibility("inline");
    } else {
      setVisibility("none");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: visibility }}>
        <Input
          prefix={
            <PlusOutlined
              style={{ color: "rgba(0,0,0,.45)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="new todo"
          type="text"
          className="input"
          size="large"
          // bordered={false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <br></br>
      <br></br>
      <Button
        className="showInputField"
        type="primary"
        shape="circle"
        size="large"
        onClick={() => showInputfield()}
        style={{ backgroundColor: "#C9E4E7", borderColor: "#C9E4E7" }}
      >
        <PlusOutlined></PlusOutlined>
      </Button>
    </form>
  );
};

export default TodoForm;
