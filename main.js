//todolist
const mainContainer = document.querySelector(".container");
const inputText = document.querySelector(".input");
const runBtn = document.querySelector(".run");
const light = document.querySelector(".lightmode");
const body = document.querySelector(".body");
const title = document.querySelector(".title");
const title2 = document.querySelector(".title2");

//darkmode
light.addEventListener("click", lightMode);

function lightMode(){
  if(light.innerText === "Light"){
    body.style.transition = ".4s";
    light.style.transition = ".4s";
    title.style.transition = ".4s";
    title2.style.transition = ".4s";
    title.style.color = "black";
    title2.style.color = "black";
    light.innerText = "Dark";
    light.style.backgroundColor = "black";
    light.style.color = "white"
    body.style.backgroundColor = "#EAF2F8";
    body.style.color = "black"
    inputText.style.backgroundColor = "white";
    inputText.style.color = "black";
    runBtn.style.backgroundColor = "white";
    runBtn.style.color = "black";
  }else if(light.innerText === "Dark"){
    body.style.transition = ".4s";
    light.style.transition = ".4s";
    title.style.transition = ".4s";
    title2.style.transition = ".4s";
    title.style.color = "white";
    title2.style.color = "white";
    light.innerText = "Light";
    light.style.backgroundColor = "white";
    light.style.color = "black";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    inputText.style.backgroundColor = "white";
    inputText.style.color = "black";
    runBtn.style.backgroundColor = "white";
    runBtn.style.color = "black";
  }
}

runBtn.addEventListener("click",addTodo);

function addTodo(){
  //div
  const container2 = document.createElement("div");
  container2.classList.add("container2");
  //li
  const list = document.createElement("li");
  list.classList.add("listinput");
  list.innerText = inputText.value;
  container2.appendChild(list);
  //add
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("done-button");
  doneBtn.innerText = "done";
  //add function
  doneBtn.addEventListener("click", add);
  function add(){
    list.style.textDecoration = "line-through";
    list.style.color = "gray";
    list.style.transition = "1s"
  }
  container2.appendChild(doneBtn);
  //del
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerText = "del";
  container2.appendChild(delBtn);
  //del function
  delBtn.addEventListener("click", del);
  function del(){
    container2.remove();
  }
  
  mainContainer.appendChild(container2);
  if(list.innerText === ""){
  alert("NO LIST! ADD LIST FIRST!");
  container2.remove();
  }else{
    list.innerText = inputText.value;
    inputText.value = "";
  }
}