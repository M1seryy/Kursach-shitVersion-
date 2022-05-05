import "../ToDoListEvents/ToDoListEvents.css";

const Events = () => {
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

      let borderList = document.createElement("div");
      borderList.style.width = "500px";
      borderList.style.height = "110px";
      borderList.style.backgroundColor = "#1BA39C";
      borderList.style.color = "black";
      borderList.style.border = "3px solid black";
      borderList.style.marginTop = "50px";
      borderList.style.textAlign = "center";
      borderList.style.borderRadius = "20px";
      borderList.style.position = "relative";
      borderList.style.right = "60px";
      borderList.style.id = "ToDoBlocks";

      let displaymessage = `
        <li>
        <label>${product}</label><br><hr>
        </li>
        `;
      ul.append(borderList);
      borderList.append(li, product, hr, currentTime);
      document.getElementById("input").value = "";
    }
  };

  const removeToDo = () => {
    let borderList = document.createElement("div");
    borderList.style.width = "300px";
    borderList.style.height = "100px";
    borderList.style.backgroundColor = "white";
    borderList.style.color = "black";
    borderList.style.border = "3px solid black";
    borderList.style.margin = "50px";
    borderList.style.borderRadius = "20px";
    borderList.style.id = "ToDoBlocks";

    let ul = document.querySelector(".ul");

    borderList.style.onClick = removeToDo;

    console.log("Hello");
  };

  const addProduct = () => {
    let mainBlock = document.getElementById("divEvents");
    mainBlock.style.fontFamily = "cursive";
    mainBlock.style.fontSize = "20px";
    mainBlock.style.color = "white";

    let borderList = document.createElement("div");
    borderList.style.width = "500px";
    borderList.style.height = "110px";
    borderList.style.backgroundColor = "#1BA39C";
    borderList.style.color = "black";
    borderList.style.border = "3px solid black";
    borderList.style.marginTop = "50px";
    borderList.style.textAlign = "center";
    borderList.style.borderRadius = "20px";
    borderList.style.position = "relative";
    borderList.style.left = "50px";
    borderList.style.id = "ToDoBlocks";

    let array = [];

    let input = document.getElementById("inputEv");
    let ul = document.querySelector(".ul");

    let product = input.value;

    let hr = document.createElement("hr");

    hr.style.border = "2px solid black";

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
      borderList.append(li, product, hr, currentTime);

      input.style.borderColor = "lightblue";
      input.placeholder = "";
      input.style.color = "black";
      document.getElementById("inputEv").value = "";
    } else {
      input.style.borderColor = "red";
      input.placeholder = "Area IS empty";
      input.style.color = "black";
    }
  };
  const allclear = () => {
    document.getElementById("listEv").innerHTML = `<ul class="ul"></ul>`;
  };

  return (
    <div id="divEvents">
      <a id="hrefProd" href="/list2">
        Products
      </a>
      <a id="hrefEvents" href="/event">
        Events
      </a>
      <a id="hrefReactComp" href="/reactComp">
        Test 2 list
      </a>
      <div id="items">
        <h1 id="h1Ev">Events</h1>
        <input
          id="inputEv"
          onKeyDown={clickPress}
          className="input"
          type="text"
        />
        <button id="submitEv" onClick={addProduct} className="submit">
          Submit
        </button>
        <button id="clearEv" onClick={allclear} className="clear">
          Clear
        </button>
        <div id="listEv">
          <ul className="ul"></ul>
        </div>
      </div>
    </div>
  );
};

export default Events;

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
 <div id="divEvents">
     <h1 id="h1">Events</h1>
    <input id="inputEvents" onKeyDown={clickPress} className="input" type="text"/>
    <button id="submitEvents" onClick={addProduct} className="submit"  >Submit</button>
    <button id="clearEvents" onClick={allclear} className="clear"  >Clear</button>
   <div id="list">
    <ul className="ul"></ul>
   </div>
 </div>
 

function allclear()
{
   document.getElementById("list").innerHTML = `<ul class="ul"></ul>`;
}
document.getElementById('clear').addEventListener('click',allclear);
*/
