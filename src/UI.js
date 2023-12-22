import { TodoFactory, ProjectFactory } from "./factories";

// Maybe try to work with this function all the way, with sections(today,week, month) 
// maybe tre to update function to be able to add todos and create and add projects as well

let defaultTodo = TodoFactory('Open me...','i know how you feel... but keep going, just one step at a time','11/12/12','top',);
 
// Initial sample data for navigation items and corresponding content
let sections = [
  { id: 'all', title: 'All Todos', todos: [defaultTodo] },
];

const domLoader = () =>{
    const navigation = document.getElementById('navigation');
    const content = document.getElementById('content');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Function to render navigation items
    function renderNavigation() {
      navigation.innerHTML = '';
      sections.forEach(section => {
        const item = document.createElement('div');
        item.classList.add('nav-element')
        if (section.id === 'completed'){
          item.classList.add('project-separator');
        }
        item.textContent = section.title;
        item.addEventListener('click', () => showContent(section));
        navigation.appendChild(item);
      });
    }
  
    // Function to show content for a selected section
    function showContent(section) {

      content.innerHTML = '';
      const contentElement = document.createElement('div');
      // Title
      const sectionTitle = document.createElement('div');
      sectionTitle.classList.add('section-title')
      sectionTitle.textContent = section.title;
      contentElement.appendChild(sectionTitle);
      //Button 
      const addTodoButton = document.createElement('button');
      addTodoButton.type= 'button';
      addTodoButton.innerHTML = "Add Todo";
      addTodoButton.classList.add('add-todo-button')
      contentElement.appendChild(addTodoButton);
      addTodoButton.addEventListener('click',()=>{
        openTodoCreateModal();
      })

      // Check if there is content in the section
      if (section.todos.length === 0) {
        const noTodosMessage = document.createElement('p');
        noTodosMessage.textContent = 'No todos for this section.';
        contentElement.appendChild(noTodosMessage);
      } else {
        // Iterate over the array and create elements for each todo item
        section.todos.forEach((todo, index) => {
          const todoContainer = document.createElement('div');
          todoContainer.classList.add('todo')
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = todo.complete;

          checkbox.addEventListener('change', () => {
            todo.complete = checkbox.checked;
            // You can add additional logic here, such as updating the UI or saving to storage
            if (checkbox.checked){
            todoElement.classList.add('crossed-out');
            } else {
              todoElement.classList.remove('crossed-out');
            }
          });
          
          const todoElement = document.createElement('div');
          
          todoElement.textContent = todo.title; 
          todoElement.addEventListener('click', () => openTodoDetailsModal(todo, index));

          todoContainer.appendChild(checkbox);
          todoContainer.appendChild(todoElement);
          contentElement.appendChild(todoContainer)
          
        });
      }
  
      content.appendChild(contentElement);
    }

    function openTodoCreateModal(){
      const modalTitle = document.createElement('h2');
      modalTitle.innerHTML = 'Create Todo';
      modalContent.appendChild(modalTitle);
      // Here should be form element with submitAll button
      modal.style.display = 'block';
      // const todoForm = document.getElementById('todo-form');
      const todoForm = document.createElement("form");
      todoForm.className = "todo-form";
      todoForm.id = "todo-form";

      // Helper function to create and append form elements
      function createAndAppendElement(type, name, id, labelText, options) {
        const element = document.createElement(type);
        element.setAttribute("name", name);
        element.setAttribute("id", id);

        if (type !== "button") {
            const label = document.createElement("label");
            label.setAttribute("for", id);
            label.textContent = labelText;
            todoForm.appendChild(label);
        }

          if (options) {
              for (const option of options) {
                  const optionElement = document.createElement("option");
                  optionElement.value = option.value;
                  optionElement.textContent = option.text;
                  element.appendChild(optionElement);
              }
          }

          todoForm.appendChild(element);
          return element;
      }

      // Create and append elements for Title, Description, Due Date, Priority, and Submit button
      const todoTitle = createAndAppendElement("input", "title", "title", "Title");
      const todoDescription = createAndAppendElement("textarea", "description", "description", "Description");
      const todoDueDate = createAndAppendElement("input", "dueDate", "dueDate", "Due Date");
      const todoPriority = createAndAppendElement("select", "priority", "priority", "Priority", [
          { value: "low", text: "Low" },
          { value: "medium", text: "Medium" },
          { value: "top", text: "Top" },
      ]);
      const todoSubmitBtn = createAndAppendElement("button", null, "todo-submit", "Submit");
      todoSubmitBtn.innerHTML='Submit';
      todoSubmitBtn.addEventListener("click", ()=>{
        let newTodo = TodoFactory(todoTitle.value, todoDescription.value, todoDueDate.value,todoPriority.value);
        console.log(newTodo);
        sections[0].todos.push(newTodo);
        closeModal();
        showContent(sections.find(section => section.id === 'all'));
      })
      modalContent.appendChild(todoForm);
  
      createCloseModalBtn();
      createUpdateModalBtn();
    }
    // Function to open modal with todo details
    function openTodoDetailsModal(todo, index) {
      modalContent.innerHTML = `
      <p>Todo Details:</p>
      <p>Title: ${todo.title}</p>
      <p>Descrption: ${todo.description || 'No details available'}</p>
      <p>Due date: ${todo.dueDate}<p>
      <p>Priorty: ${todo.priority}
      `;
      modal.style.display = 'block';
  
      createCloseModalBtn();
      createUpdateModalBtn();
    }
  
    function createCloseModalBtn(){
      // Close modal when the close button is clicked
      const closeButton = document.createElement('div');
      closeButton.className = 'close';
      closeButton.innerHTML = '&times;';

      // Attach the event listener to close the modal
      closeButton.addEventListener('click', () => closeModal());

      // Append the close button to the modal content
      modalContent.appendChild(closeButton);
    }


    // Function to close the modal
    function closeModal() {
      modal.style.display = 'none';
      
      modalContent.innerHTML = '';
      
    }
  
    function createUpdateModalBtn (){
      // Optional: Add functionality to update or delete todo in the modal
      const updateBtn = document.createElement('button');
      updateBtn.textContent = 'Update';
      updateBtn.addEventListener('click', () => updateTodoDetails(index));
      modalContent.appendChild(updateBtn);
    }

    // Function to update todo details (optional)
    function updateTodoDetails(index) {
      // Add your logic to update todo details
      // You can use prompt, input fields, or another modal for updating
      // Then update the sections array and close the modal
      closeModal();
    }
  
    
    
    function populateSection(sectionId, project, todo) {
      project.addTodo(todo)
      sections.find(section => section.id === sectionId).todos = project.todos;
    
      // Refresh the navigation and content to see the changes
      renderNavigation();
      showContent(sections.find(section => section.id === sectionId));
    }
  

  renderNavigation();
  showContent(sections.find(section => section.id === 'all'));

  return{
    renderNavigation,
    showContent,
    openTodoDetailsModal,
    closeModal,
    populateSection
  }
}

export {
  domLoader,
  sections,
}