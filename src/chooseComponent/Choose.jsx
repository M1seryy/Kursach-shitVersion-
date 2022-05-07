import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ChooseCss from "../chooseComponent/choose.css";
import Events from "../ToDoListEvents/ToDoListEvents";
import Reg from "../RegistrationForm/Reg";
import List from "../ToDoList/List";
import Form from "../form/Form";
import { useState } from "react";
import { Header } from "../ReactComp/Header";
import ReactComp from "../ReactComp/ReactComp";
export const Choose = () => {
  const [active, setActive] = useState(false);
  const burgerMenu = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div id="mainDiv">
      <header id="header">
        <img onClick={burgerMenu} id="burgerMenu" src="\preview.png" alt="" />
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
      <div className={active ? "manuActive" : "menuNotActive"}>
        <div id="itemsR">
          <h1 id="choseListR">Chose Lists:</h1>
          <a id="all" href="/list2">
            Список всіх подій
          </a>
          <a id="eventList" href="/event">
            Список подій
          </a>
          <a id="react" href="/reactComp">
            React
          </a>
          <div id="burger"></div>
        </div>
      </div>

      <section id="home">
        <div class="content"></div>
      </section>

      <Routes>
        <Route path="/event" element={<Events />} />
        <Route path="/list2" element={<List />} />
        <Route path="/reactComp" element={<ReactComp />} />
      </Routes>
    </div>
  );
};

export default Choose;
