import "./App.css";
import Todo from "./components/Todo";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import { Typography } from "antd";
import "antd/dist/antd.css";
import { List, Divider } from "antd";

function App() {
  const { Text, Title } = Typography;

  const [todos, setTodos] = useState([]);
  const [completeCounter, setCompleteCounter] = useState();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
    const completeCounter = JSON.parse(localStorage.getItem("completeCounter"));
    if (completeCounter) {
      setCompleteCounter(completeCounter);
    }
  }, []);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]; //lager en ny liste (newTodos), itererer over hver todo og legger teksten til hver til i denne nye listen (kopierer)
    localStorage.setItem("todos", JSON.stringify(newTodos)); //legger todos til i local storage
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted == true) {
      //hvis todo er complete
      newTodos[index].isCompleted = false; //fjern strek
      setCompleteCounter(completeCounter - 1);
    } else {
      newTodos[index].isCompleted = true; //hvis ikke, stryk ut slik at den blir complete
      setCompleteCounter(completeCounter + 1); //øker completeCounter med 1
    }
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    //localStorage.setItem("completeCounter", JSON.stringify(completeCounter));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //fjerner elementet
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos); //setter todos til å være denne nye listen (hvor man har slettet element)
  };

  const numberOfTodos = (index) => {
    const newTodos = [...todos];
    const num = newTodos.length;
    return num;
  };

  const TaskOrTasks = () => {
    if (numberOfTodos() < 2) {
      return <Text style={{ color: "grey" }}>task</Text>;
    } else {
      return <Text style={{ color: "grey" }}>tasks</Text>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="todoContainer">
          <Divider orientation="left">
            <Title level={3}>Todo</Title>
          </Divider>
          <List
            size="medium"
            footer={
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  textTransform: "uppercase",
                }}
              >
                <Text style={{ color: "grey" }}>
                  {numberOfTodos()} {TaskOrTasks()}
                </Text>
              </div>
            }
            dataSource={todos}
            renderItem={(todo, index) => (
              <List.Item>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                ></Todo>
              </List.Item>
            )}
          />
          <TodoForm addTodo={addTodo}></TodoForm>
        </div>
      </header>
    </div>
  );
}

export default App;
