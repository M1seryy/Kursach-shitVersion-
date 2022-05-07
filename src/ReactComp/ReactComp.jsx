import "./reactComp.css";
import React, { useState } from "react";

import { Header } from "./Header";
import { AddToDo } from "./AddToDo";
import { ToDoLIst } from "./ToDoLIst";

function ReactComp() {
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: "first ToDo",
      status: true,
    },

    {
      id: 2,
      title: "second ToDo",
      status: true,
    },

    {
      id: 3,
      title: "third ToDo",
      status: false,
    },
  ]);
  return (
    <div className="App">
      <a id="hrefProdR" href="/list2">
        Products
      </a>
      <a id="hrefEventsR" href="/event">
        Events
      </a>
      <a id="hrefReactCompR" href="/reactComp">
        Tasks
      </a>
      <div className="block">
        <Header />
        <AddToDo todo={todo} setToDo={setToDo} />
        <ToDoLIst todo={todo} setTodo={setToDo} />
      </div>
    </div>
  );
}

export default ReactComp;
