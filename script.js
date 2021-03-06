let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const li = document.querySelector('li')
// const parentDiv = document.querySelector('.parentDiv')

/////// event listeners ////////////

form.addEventListener('click', submit)

ul.addEventListener('click', deleteTask)

// ul.addEventListener('change', checkboxToggle)
ul.addEventListener('change', checkboxToggle)



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

// function addTask(task) {
//   let delButton = document.createElement('button')
//   let li = document.createElement('li')

//   let key = Math.floor(ul.childNodes.length / 2) + 1
//   //// or can do classList.add - example delButton ////
//   li.className = 'liClass parentEle'
//   li.id = `${key}`
//   delButton.id = `${key}`


// ///// two examples of dynamically creating checkboxes /////
//   let checkBox = document.createElement("input");
//   checkBox.setAttribute("type", "checkbox");
//   checkBox.setAttribute("class", "checkbox");
//   checkBox.setAttribute("id", `${key}`);

//   let checkbox = document.createElement("div");
//   checkbox.innerHTML = `<input class="checkbox" type="checkbox" id=${key} >`
//   console.log(li, delButton, checkbox, checkBox)

//   li.innerHTML = task
//   delButton.innerText = 'delete';
// 	delButton.classList.add('delete')
//   console.log(task, delButton)
//   ul.appendChild(li)
//   li.appendChild(checkBox)
//   li.appendChild(delButton)
// }



function addTaskWithBoxes(task) {

  let key = Math.floor(ul.childNodes.length / 2) + 1
  // id : Date.now()

  parentDiv = document.createElement('div')
  parentDiv.className = 'parentDiv'
  parentDiv.id = `${key}`

  let li = document.createElement('li')
  li.innerHTML = task
  li.className = 'liNewClass'
  li.id = `${key}`

  let delButton = document.createElement('button')
  delButton.innerText = 'delete'
  delButton.classList.add('delete')
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
