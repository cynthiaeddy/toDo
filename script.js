let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const li = document.querySelector('li')
let checkbox = document.querySelector('.checkbox');
let todo_input




/////// event listeners ////////////
// c.addEventListener("change", function() {
//   l.style.textDecoration = c.checked ? "line-through" : "none";
// })
form.addEventListener('click', submit)

ul.addEventListener('click', deleteTask)

ul.addEventListener('click', checkboxToggle)


////// grab input value, then pass to addTask function ///////
function submit(e) {
  e.preventDefault()
  console.log('click', input.value, e.target.value)
  if (input.value != '') {
    addTaskWithBoxes(input.value)
    input.value = ''
  }
}
////// create task and assign li and children keys ///////

function addTask(task) {
  let delButton = document.createElement('button')
  let li = document.createElement('li')

  let key = Math.floor(ul.childNodes.length / 2) + 1
  //// or can do classList.add - example delButton ////
  li.className = 'liClass parentEle'
  li.id = `${key}`
  delButton.id = `${key}`


///// two examples of dynamically creating checkboxes /////
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "checkbox");
  checkBox.setAttribute("id", `${key}`);

  let checkbox = document.createElement("div");
  checkbox.innerHTML = `<input class="checkbox" type="checkbox" id=${key} >`
  console.log(li, delButton, checkbox, checkBox)

  li.innerHTML = task
  delButton.innerText = 'delete';
	delButton.classList.add('delete')
  console.log(task, delButton)
  ul.appendChild(li)
  li.appendChild(checkBox)
  li.appendChild(delButton)
}

function deleteTask (e)  {
  if(e.target.classList.contains('delete')) {
  ul.removeChild(e.target.parentElement);
}
}


function addTaskWithBoxes(task) {
  // todo_input = task.querySelector("input[name='todo']")

  console.log(todo_input)
  let key = Math.floor(ul.childNodes.length / 2) + 1

  parentDiv = document.createElement('div')
  parentDiv.className = 'parentDiv'
  parentDiv.id = `${key}`

  let li = document.createElement('li')
  li.innerHTML = task

  li.className = 'liNewClass'
  li.id = `${key}`

  let delButton = document.createElement('button')
  delButton.innerText = 'delete'
  delButton.id = `${key}`
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "checkbox");
  checkBox.setAttribute("id", `${key}`);


  ul.appendChild(parentDiv)
  parentDiv.appendChild(li)
  parentDiv.appendChild(checkBox)
  parentDiv.appendChild(delButton)

}


function checkboxToggle(e) {


  var listItem = this.parentNode;

  console.log(e.target, e.target.parentElement)
  let childEle = e.target
  let parentEle = e.target.parentElement
  // var editInput = parentEle.querySelector('input[type=text]');
  let lineThrough = listItem.querySelector('li[class=liNewClass]')
  // let doIt = lineThrough.innerText

  console.log('parentEle', parentEle, 'lineThrough', lineThrough)


  lineThrough.style.textDecoration = childEle.checked ? "line-through" : "none";
  // if (childEle.checked) {
  //   lineThrough.style.textDecoration = 'line-through'

  // } else {
  //   lineThrough.style.textDecoration = 'none'
  // }

  // if (childEle.checked) {
  //   lineThrough.classList.add('line')

  // } else {
  //   lineThrough.classList.remove('line')
  // }
  //
  // // lineThrough.classList('line') = childEle.checked ? true: false;

  // doIt.style.textDecoration = 'linethrough'
  // doIt.classList.add('line')
  // lineThrough.classList.add('line')

  // var todo_name = todo.querySelector(".tasks #item" + todo_item_id + " .todo-name");
  // console.log(parentDiv.contains('li'))

  // // console.log(childEle.id === parentEle.id, parentEle.innerText, parentDiv.classList.contains('liNewClass'))
  // console.log(childEle.checked)
  // // if (childEle.checked) {
  //   lineThrough.classList.add('line')

    //   if (!parentEle.contains('button')) {
      //     // console.log(parentEle.closest('.liClass'))
      // doIt.classList.add('line')
    // } else {

    //   lineThrough.classList.remove('line')
    //   // li.appendChild(lineThrough)


  // }
  // if (!childEle.checked) {
  //   lineThrough.classList.remove('line')


  // }
    // li.appendChild(lineThrough)

  // li.appendChild(lineThrough)

  // }
  // if (checkbox.checked) {
  //   console.log('checked')
  //   // editBtn.innerHTML = "delete";
  //   // inputItem.setAttribute("disabled", "");
  //   input.style.textDecoration = "line-through";
  // } else {
  //   // editBtn.innerHTML = "edit";
  //   input.style.textDecoration = "";
  // }

}
