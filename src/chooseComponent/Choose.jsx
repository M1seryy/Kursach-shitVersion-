import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ChooseCss from "../chooseComponent/choose.css";
import Events from "../ToDoListEvents/ToDoListEvents";
import Reg from "../RegistrationForm/Reg";
import List from "../ToDoList/List";
import Form from "../form/Form";
export const Choose = () => {
  return (
    <div id="mainDiv">
      <header id="header">
        <div class="logo">Family To Do app</div>
        <nav>
          <ul class="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="sign-in">
          <button class="btn-contact">Sign in</button>
        </a>
      </header>
      <section id="home">
        <div class="content">
          <h1 id="choseList">Chose Lists:</h1>
          <a id="all" href="/list2">
            Список всіх подій
          </a>
          <a id="eventList" href="/event">
            Список подій
          </a>
        </div>
      </section>

      <Routes>
        <Route path="/event" element={<Events />} />
        <Route path="/list2" element={<List />} />
      </Routes>
    </div>
  );
};

export default Choose;
