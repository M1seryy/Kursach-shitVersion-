import React, { useRef, useState, useEffect } from "react";
import "../ReactComp/reactComp.css";

export const ReactComp = () => {
  let inputOne = useRef();
  const [nums, setNums] = useState([]);
  const [newNum, setNewNums] = useState();

  let handle = () => {
    setNums([...nums, inputOne.current.value]);
  };

  useEffect(() => {
    console.log("update");
  });
  return (
    <div id="reactCompDiv">
      <a id="hrefProd" href="/list2">
        Products
      </a>
      <a id="hrefEvents" href="/event">
        Events
      </a>
      <a id="hrefReactComp" href="/reactComp">
        Test 2 list
      </a>
      <div id="mainContentDiv">
        <h1 id="logoText">What's the Plan for Today?</h1>
        <input id="inputToDo" ref={inputOne} type="text" />
        <ul id="taskDiv">
          {nums.map((currentNum) => (
            <li>
              <input className="inputToDo" value={currentNum} type="text" />
            </li>
          ))}
        </ul>
        <button id="addBTN" onClick={handle}>
          Add Task
        </button>
      </div>
    </div>
  );
};
export default ReactComp;
