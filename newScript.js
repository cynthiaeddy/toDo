let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
// const li = document.querySelector('li')
let toDoItems = []
// const parentDiv = document.querySelector('.parentDiv')

/////// event listeners ////////////

form.addEventListener('click', submit)

ul.addEventListener('click', deleteTask)

// ul.addEventListener('change', checkboxToggle)
ul.addEventListener('change', checkboxToggle)



////// grab input value, then pass to addTask function ///////

function addToDo(text) {
  const toDo = {
    text,
    checked: false,
    id: Date.now()
  }
  // toDoItems.push(toDo)
  // console.log(toDoItems)

  renderToDo(toDoItems)
}

function submit(e) {
  e.preventDefault()
  console.log('click', input.value, e.target.value)
  if (input.value != '') {
    addToDo(input.value)
    input.value = ''
    input.focus()
  }
}
////// create task and assign li and children keys ///////


function renderToDo(toDo) {
  console.log(toDo)

  const isChecked = toDo.checked ? 'done' : ""

  let li = document.createElement('li')
  // li.innerHTML = task
  // li.className = 'liNewClass'

  li.setAttribute('class', `todo-item ${isChecked}`);
  // Set the data-key attribute to the id of the todo
  li.setAttribute('data-key', toDo.id);
  // Set the contents of the `li` element create

  li.innerHTML = `
  <input id="${toDo.id}" type="checkbox"/>
  <label for="${toDo.id}" class="tick"></label>
  <span>${toDo.text}</span>
  <button class="delete-todo">
  delete</button>
`;
  ul.appendChild(li)
}

function deleteTask(e) {
  if(e.target.classList.contains('delete')) {
  ul.removeChild(e.target.parentElement);
}
}

function checkboxToggle(e) {
  let parentDiv = document.querySelector('.parentDiv')

  let myLi = parentDiv.querySelectorAll(":scope > .liNewClass");
  console.log(parentDiv, myLi)

  let newLineThrough
  console.log(li)
console.log(e.target.parentElement, e.target.parentElement.li,e.target.classList.contains('liNewClass'))
  const listItem = this.parentNode;
  let childEle = e.target
  let childId = e.target.id
  console.log(childId)
  // const item = listItem.querySelector(`li[id= ${childId}]`);
  // console.log(item)


  let lineThrough = listItem.querySelector("li[class='liNewClass']")
  // lineThrough.id = childId
  console.log(lineThrough)


  if (lineThrough.id === e.target.parentElement.id) {
    newLineThrough = lineThrough

    if (childEle.checked) {
      newLineThrough.style.textDecoration = 'line-through'
    } else {
      newLineThrough.style.textDecoration = 'none'
    }

    // function toggleDone(key){
    //   const index = todoItems.findIndex(item => item.id === Number(key));
    //   todoItems[index].checked = !todoItems[index].checked ;
    //   const item = document.querySelector(`[data-key ='${key}']`);

    //   if (todoItems[index].checked){
    //     item.classList.add('done');
    //   }else {
    //     item.classList.remove('done');
    //   }

    // };
    // lineThrough.style.textDecoration = childEle.checked ? "line-through" : "none";

  }
}
// function checkboxToggle(e) {
//   let newLineThrough

//   const listItem = this.parentNode;
//   let childEle = e.target
//   let childId = e.target.id
//   console.log(listItem, childEle, childId)

//   let lineThrough = listItem.querySelector('li[class=liNewClass]')
//   lineThrough.id = childId
//   console.log(lineThrough.id, childEle.id, listItem.querySelector('li[id="childId"]'))


//   if (lineThrough.id === childEle.id) {
//     newLineThrough = lineThrough

//     if (childEle.checked) {
//       newLineThrough.style.textDecoration = 'line-through'
//     } else {
//       newLineThrough.style.textDecoration = 'none'
//     }


//     // lineThrough.style.textDecoration = childEle.checked ? "line-through" : "none";

//   }
// }
