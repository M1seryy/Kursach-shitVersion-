import "../ToDoList/List.css";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Events from "../ToDoListEvents/ToDoListEvents";
import Reg from "../RegistrationForm/Reg";
import logo from "../img/delete.png";

const List = () => {
  const navigate = useNavigate();
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
  const clickPress = (event) => {
    if (event.keyCode == 13) {
      let input = document.getElementById("input");

      let ul = document.querySelector(".ul");
      let product = input.value;

      let hr = document.createElement("hr");
      hr.style.border = "2px solid white";
      const li = document.createElement("li");
      li.style.position = "relative";
      li.style.top = "30px";

      let displaymessage = `
        <li>
        <label>${product}</label><br><hr>
        </li>
        `;
      ul.append(li, product, hr, currentTime);
      document.getElementById("input").value = "";
    }
  };
  const move = () => {
    navigate("/list");
  };

  const addProduct = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    let deleteProduct = document.createElement("img");
    deleteProduct.style.width = "20px";
    deleteProduct.style.height = "20px";
    deleteProduct.src = `${logo}`;
    deleteProduct.style.position = "relative";
    deleteProduct.style.left = "220px";
    deleteProduct.onclick = deleteTask;
    let borderList = document.createElement("div");
    borderList.style.width = "500px";
    borderList.style.height = "110px";
    borderList.style.backgroundColor = "#" + randomColor;
    borderList.style.color = "black";
    borderList.style.border = "3px solid black";
    borderList.style.marginTop = "50px";
    borderList.style.textAlign = "center";
    borderList.style.borderRadius = "20px";
    borderList.style.position = "relative";
    borderList.style.right = "100px";
    borderList.style.id = "ToDoBlocks";

    let mainBlock = document.getElementById("div");
    mainBlock.style.fontFamily = "cursive";
    mainBlock.style.fontSize = "20px";
    mainBlock.style.color = "white";

    let array = [];

    let input = document.getElementById("input");
    let ul = document.querySelector(".ul");

    let product = input.value;

    let hr = document.createElement("hr");

    hr.style.border = "2px solid white";
    const li = document.createElement("li");

    li.style.position = "relative";
    li.style.top = "30px";

    let displaymessage = `
            <li>
            <label>${product}</label><br><hr>
            </li>
            `;
    if (product != "") {
      ul.append(borderList);
      borderList.append(li, product, hr, currentTime, deleteProduct);
      input.style.borderColor = "lightblue";
      input.placeholder = "";
      input.style.color = "black";
      document.getElementById("input").value = "";
    } else {
      input.style.borderColor = "red";
      input.placeholder = "Area IS empty";
      input.style.color = "black";
    }
  };
  const deleteTask = () => {
    document.querySelector(".ul").classList.add("changedClass");
  };
  const allclear = () => {
    document.getElementById("list").innerHTML = `<ul class="ul"></ul>`;
  };

  return (
    <div id="div">
      <a id="hrefProd" href="/list2">
        Products
      </a>
      <a id="hrefEvents" href="/event">
        Events
      </a>
      <a id="hrefReactComp" href="/reactComp">
        Tasks
      </a>
      <div id="productItems">
        <h1 id="h1">Products</h1>
        <input
          id="input"
          onKeyDown={clickPress}
          className="input"
          type="text"
        />
        <button id="submit" onClick={addProduct} className="submit">
          Submit
        </button>
        <button id="clear" onClick={allclear} className="clear">
          Clear
        </button>
        <div id="list">
          <ul className="ul"></ul>
        </div>
      </div>
    </div>
  );
};

export default List;

/*



document.getElementById('submit').addEventListener('click',addProduct);
 
function clickPress(event){
   if (event.keyCode == 13) {
       let input = document.querySelector('.input'); 
       let ul = document.querySelector('.ul');
       let product = input.value;
   
       let hr = document.createElement("hr");
       hr.style.border = "2px solid black";
       const li = document.createElement("li");
       li.style.position ="relative";
       li.style.top = "30px";

      let displaymessage = `
      <li>
      <label>${product}</label><br><hr>
      </li>
      `;
       ul.append(li,product,hr);
       document.getElementById('input').value = "";
     
   }
 }

function allclear()
{
   document.getElementById("list").innerHTML = `<ul class="ul"></ul>`;
}
document.getElementById('clear').addEventListener('click',allclear);
*/
