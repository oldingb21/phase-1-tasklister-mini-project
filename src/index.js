const createTask = (task) => {
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', removeTask)
  btn.textContent = 'X'
  li.textContent = `${task} `
  document.querySelector('#tasks').appendChild(li);
  li.appendChild(btn);
}

const removeTask = (e) => {
  e.target.parentNode.remove()
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTask(e.target.new_task_description.value)
    form.reset()
  })
});
