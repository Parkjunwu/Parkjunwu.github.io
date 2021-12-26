const toDoDiv = document.querySelector(".toDo")

const form = toDoDiv.querySelector("form")
const newToDo = form.querySelector(".to-do-input")
console.log(newToDo)
const toDoLists = toDoDiv.querySelector("ul")
const onToDoSubmit = (e) => {
  e.preventDefault()
  const getArray = () => JSON.parse(localStorage.getItem("toDos")) ?? []
  const toDosArray = getArray()
  const id = Date.now() + ""
  const newThing = {id,text:newToDo.value}
  toDosArray.push(newThing)
  const uploadToDos = JSON.stringify(toDosArray)
  localStorage.setItem("toDos",uploadToDos)
  const li = document.createElement("li")
  // const deleteId = `delete-${id}`
  li.className="toDos"
  li.innerHTML = `<span>${newToDo.value}</span> <input id=${id} value="❌" type="button"/>`;
  toDoLists.appendChild(li)
  document.getElementById(id).addEventListener("click",(e) => {
    console.log(e.target.id)
    e.path[1].remove();
    const getNewArray = getArray()
    console.log(getNewArray)

    const uploadArray = getNewArray.filter(element => element.id !== id)
    console.log(uploadArray)
    localStorage.setItem("toDos",JSON.stringify(uploadArray))
  })
  newToDo.value = ""
}

form.addEventListener("submit",onToDoSubmit)