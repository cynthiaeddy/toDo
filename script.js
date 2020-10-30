let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const li = document.querySelector('li')
const checkbox = document.querySelector('.checkbox');




// const deletes = document.querySelectorAll('.delete')

form.addEventListener('click', submit)
ul.addEventListener('click', removeEvent)

function removeEvent (e)  {
  console.log('ul clicked')
  console.log(e.target.classList.contains('delete'))
  if(e.target.classList.contains('delete')) {
  ul.removeChild(e.target.parentElement);
   li.removeChild(li)
}
}


function addTask(task) {
  let checkDiv = document.createElement("div");
  // checkDiv.className = checkclass;
  checkDiv.innerHTML = `<input class="checkbox" type="checkbox" >`;
  let delButton = document.createElement('button')
  let li = document.createElement('li')
  let key = Math.floor(ul.childNodes.length / 2 )+ 1
  li.className = 'liClass'
  li.id = `${key}`
  // var key = list.childNodes.length / 2 + 1;

  li.innerHTML = task
  delButton.innerText = 'delete';
	delButton.className = 'delete';
  console.log(task, delButton)
  ul.appendChild(li)
  li.appendChild(checkDiv)
  li.appendChild(delButton)
}


function submit(e) {
  console.log(e.target.classList)
  if (e.target.classList.contains('delete')) {
    console.log('here')
    node.parentNode.removeChild(node)
  }
  e.preventDefault()
  console.log('click', input.value, e.target.value)
  if (input.value != '') {
    addTask(input.value)
    input.value = ''
  }
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // editBtn.innerHTML = "delete";
    // inputItem.setAttribute("disabled", "");
    input.style.textDecoration = "line-through";
  } else {
    // editBtn.innerHTML = "edit";
    input.style.textDecoration = "";
  }
});
// }
