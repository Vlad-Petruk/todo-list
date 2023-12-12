import { TodoFactory, ProjectFactory } from "./factories";

// Maybe try to work with this function all the way, with sections(today,week, month) 
// maybe tre to update function to be able to add todos and create and add projects as well

let defaultTodo = TodoFactory('Open me...','i know how you feel... but keep going, just one step at a times','11/12/12','top',);
let todo2 = TodoFactory('MyTodo2','sdfgsdg','11/12/12','top');
let todo3 = TodoFactory('MyTodo3','sdfgsdg','11/12/12','top');
console.log(defaultTodo)

let project2 = ProjectFactory('newProj','NewProj')
//  project1.addTodo(todo);
//  project1.addTodo(todo2);
//  project1.addTodo(todo3);

 console.log(project2)
 

// Initial sample data for navigation items and corresponding content
let sections = [
  { id: 'all', title: 'All Todos', todos: [defaultTodo] },
  // { id: 'today', title: 'Today', todos: [] },
  // { id: 'week', title: 'This week', todos: [] },
  // { id: 'important', title: 'Important', todos: [] },
  // { id: 'completed', title: 'Completed', todos: [] },
];

// sections.push(project2)

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
        modalContent
        // Here should be form element with submitAll button
        modal.style.display = 'block';
    
        // Close modal when the close button is clicked
        const closeButton = document.createElement('div');
        closeButton.className = 'close';
        closeButton.innerHTML = '&times;';
  
        // Attach the event listener to close the modal
        closeButton.addEventListener('click', () => closeModal());
  
        // Append the close button to the modal content
        modalContent.appendChild(closeButton);
    
        // Optional: Add functionality to update or delete todo in the modal
        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', () => updateTodoDetails(index));
        modalContent.appendChild(updateBtn);
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
          
          todoElement.textContent = todo.title; // Assuming each todo has a 'title' property
          todoElement.addEventListener('click', () => openModal(todo, index));

          todoContainer.appendChild(checkbox);
          todoContainer.appendChild(todoElement);
          contentElement.appendChild(todoContainer)
          
        });
      }
  
      content.appendChild(contentElement);
    }
  
    // Function to open modal with todo details
    function openModal(todo, index) {
      modalContent.innerHTML = `
      <p>Todo Details:</p>
      <p>Title: ${todo.title}</p>
      <p>Descrption: ${todo.description || 'No details available'}</p>
      <p>Due date: ${todo.dueDate}<p>
      <p>Priorty: ${todo.priority}
      `;
      modal.style.display = 'block';
  
      // Close modal when the close button is clicked
      const closeButton = document.createElement('div');
      closeButton.className = 'close';
      closeButton.innerHTML = '&times;';

      // Attach the event listener to close the modal
      closeButton.addEventListener('click', () => closeModal());

      // Append the close button to the modal content
      modalContent.appendChild(closeButton);
  
      // Optional: Add functionality to update or delete todo in the modal
      const updateBtn = document.createElement('button');
      updateBtn.textContent = 'Update';
      updateBtn.addEventListener('click', () => updateTodoDetails(index));
      modalContent.appendChild(updateBtn);
    }
  
    // Function to close the modal
    function closeModal() {
      modal.style.display = 'none';
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
  
  // addSampleData('newProj', project2, todo3);

  renderNavigation();
  showContent(sections.find(section => section.id === 'all'));

  return{
    renderNavigation,
    showContent,
    openModal,
    closeModal,
    populateSection
  }
}

export {
  domLoader,
  sections,
}