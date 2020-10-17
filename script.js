let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const li = document.querySelector('li')



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




function addTask (task) {
  let delButton = document.createElement('button')
  let li = document.createElement('li')
  li.innerHTML = task
  delButton.innerText = 'delete';
	delButton.className = 'delete';
  console.log(task, delButton)
  ul.appendChild(li)
  li.appendChild(delButton)

}


function submit(e) {
  console.log(e.target.classList)
  if (e.target.classList.contains('delete')) {
    console.log('here')
    node.parentNode.removeChild(node)
  }
  e.preventDefault()
  console.log('click')
  if (input.value != '') {
    addTask(input.value)
    input.value = ''
  }
}

