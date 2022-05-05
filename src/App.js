import { Routes, Route, Link } from "react-router-dom";

import Header from "./header/header";
import Events from "../src/ToDoListEvents/ToDoListEvents";
import "./App.css";
import "./form/form.css";
import react from "react";
import Reg from "./RegistrationForm/Reg";
import { useNavigate } from "react-router-dom";
import List from "./ToDoList/List";
import Clock from "./Clock/Clock";
import Form from "./form/Form";
import { Choose } from "./chooseComponent/Choose";
import ReactComp from "./ReactComp/ReactComp";

function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
