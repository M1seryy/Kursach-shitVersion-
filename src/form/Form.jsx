import { Routes, Route, Link } from "react-router-dom";

import Events from "../ToDoListEvents/ToDoListEvents";
import "../App.css";
import "../form/form.css";
import Choose from "../chooseComponent/Choose";
import Reg from "../RegistrationForm/Reg";
import { useNavigate } from "react-router-dom";
import List from "../ToDoList/List";
import ReactComp from "../ReactComp/ReactComp";

function Form() {
  const navigate = useNavigate();

  const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour > 12) {
      hour -= 12;
    }
    if (hour == 0) {
      hour = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let nowTime = [hour, min, sec];
    let currentTime = nowTime.join(":");
    document.getElementById("clock").innerHTML = currentTime;
    setInterval(showTime, 1000);
  };

  return (
    <div id="mainDiv">
      <h1 onLoad={setInterval(showTime, 1000)} id="clock"></h1>
      <div class="login-box">
        <h2>Login</h2>

        <div class="user-box">
          <input id="username" type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input id="password" type="password" name="" required="" />
          <label>Password</label>
        </div>

        <button
          id="submit-btn"
          onClick={() => {
            var login = document.getElementById("username").value;
            var pass = document.getElementById("password").value;
            let submitBtn = document.getElementById("submit2");
            if (pass == "1234" && login == "victor") {
              navigate("/choose");
            } else {
              alert("Try again");
              navigate("/app");
            }
          }}
        >
          Login
        </button>
        <a id="reg-btn" href="/reg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Registration
        </a>
      </div>

      <Routes>
        <Route path="/choose" element={<Choose />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/list2" element={<List />} />
        <Route path="/event" element={<Events />} />
        <Route path="/reactComp" element={<ReactComp />} />
      </Routes>
    </div>
  );
}

export default Form;
