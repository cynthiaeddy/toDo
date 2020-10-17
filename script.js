let input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')


// const deletes = document.querySelectorAll('.delete')

form.addEventListener('click', submit)



function submit(e) {
  e.preventDefault()
  console.log('click')
  if (input.value != '') {
    addTask(input.value)
    input.value = ''
  }
}
addTask = (task) => {
  let delButton = document.createElement('button')
  let li = document.createElement('li')
  li.innerHTML = task
  delButton.innerText = 'delete';
	delButton.className = 'delete';
  console.log(task, delButton)
  ul.appendChild(li)
  li.appendChild(delButton)

}

// function addTask(task) {
// 	const toTo = {
// 		task,
// 		checked: false,
// 		id: Date.now()
// 	};

// 	let li = document.createElement('li');
// 	let btnDelete = document.createElement('button');
// 	let btnComplete = document.createElement('button');
// 	btnDelete.innerHTML = 'delete';
// 	li.innerHTML = task;
// 	console.log(li.innerHTML, task, toDo);
// 	ul.appendChild(li, btnDelete, btnComplete);
// }

// add tasks
// function addTask(task) {
// 	let ul = document.querySelector('ul');
// 	let li = document.createElement('li');
// 	li.innerHTML = task;
// 	ul.appendChild(li);
// 	// document.querySelector('.tasksBoard').style.display = 'block';
// }
