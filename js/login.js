const leftDiv = document.querySelector(".left")
const loginForm = leftDiv.querySelector(".login-form")
const toDoList = leftDiv.querySelector(".toDoList")
const toDo = leftDiv.querySelector(".toDo")
const lists = leftDiv.querySelector("ul")

const user = localStorage.getItem("user")
console.log(user)

if(!user){
  leftDiv.classList.add("login-left")
  toDoList.classList.add('not-login')
  toDo.classList.add('not-login')
} else {
  loginForm.className="not-login";
  toDoList.innerText = user+"'s To Do List"
  const getArray = () => JSON.parse(localStorage.getItem("toDos")) ?? []
  const onDeleteHandler = (e) => {
    console.log(e.target.id)
    e.path[1].remove();
    const getNewArray = getArray()
    console.log(getNewArray)
    const uploadArray = getNewArray.filter(element => element.id+"" !== e.target.id)
    console.log(uploadArray)
    localStorage.setItem("toDos",JSON.stringify(uploadArray))
  }
  const getList = getArray()
  getList.forEach((element) => {
    const li = document.createElement("li");
    li.className="toDos";
    // const deleteId = `delete-${element.id}`
    li.innerHTML = `<span>${element.text}</span> <input id=${element.id} value="❌" type="button"/>`;
    lists.appendChild(li)
    document.getElementById(element.id+"").addEventListener("click",onDeleteHandler)
  });
}

const onLoginHandler = (e) => {
  e.preventDefault()
  const id = loginForm.querySelector("input:first-child")
  // console.log(id.value)
  localStorage.setItem("user",id.value)
  loginForm.className="not-login"
  leftDiv.classList.remove("login-left")
  toDoList.classList.remove('not-login')
  toDo.classList.remove('not-login')
}

loginForm.addEventListener("submit",onLoginHandler)

//배열로 하니까 삭제 하면 index 가 바뀌어. 그럼 삭제나 업데이트 할때 안맞아짐. 그래서 객체로 만들어야함. 순서 맞출라면 정렬 써야할듯