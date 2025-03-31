/**@type{HTMLFormElement} */
const form = document.querySelector('#form-todo')
const todoList = document.querySelector('#todo-list')

const message = document.querySelector('#message')

// Definir el tipo del evento
/**@type{HTMLInputElement} */
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const bootstrapMessage = bootstrap.Toast.getOrCreateInstance(message)
    // Select the input field with name='todo'
    /**@type{HTMLInputElement} */
    console.log(event.target.elements.todo.value)

    const todo = document.createElement('li')
    todo.classList.add('list-group-item')

    //Checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('form-check-input')

    // Label
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.innerText = event.target.elements.todo.value
    
    checkbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            todo.classList.add('list-group-item-secondary')
        } else {
            todo.classList.remove('list-group-item-secondary')
        }
    });

    todo.append(checkbox, label)
    // Agregar el todo a la lista
    todoList.append(todo)

    // Mostrar el mensaje de éxito
    bootstrapMessage.show()

    event.target.elements.todo.value = ''
});