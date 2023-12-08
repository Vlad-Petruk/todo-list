import { TodoFactory, ProjectFactory } from "./factories";

// Maybe try to work with this function all the way, with sections(today,week, month) 
// maybe tre to update function to be able to add todos and create and add projects as well

let todo = TodoFactory('MyTodo','sdfgsdg','11/12/12','top','false');
let todo2 = TodoFactory('MyTodo2','sdfgsdg','11/12/12','top');
let todo3 = TodoFactory('MyTodo3','sdfgsdg','11/12/12','top');
console.log(todo)

let project1 = ProjectFactory('NewProj')
 project1.addTodo(todo);
 project1.addTodo(todo2);
 project1.addTodo(todo3);

 project1.deleteTodo(todo3)
 console.log(project1)


const renderTodoOnSection = (project)=>{
    return project.todos[0].title;
}

const domLoader = () =>{
    const navigation = document.getElementById('navigation');
    const content = document.getElementById('content');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    // Initial sample data for navigation items and corresponding content
    let sections = [
      { id: 'all', title: 'All Todos', content: [] },
      { id: 'today', title: 'Today', content: [] },
      { id: 'week', title: 'This Week', content: [] },
    ];
  
    // Function to render navigation items
    function renderNavigation() {
      sections.forEach(section => {
        const item = document.createElement('div');
        item.classList.add('nav-element')
        item.textContent = section.title;
        item.addEventListener('click', () => showContent(section));
        navigation.appendChild(item);
      });
    }
  
    // Function to show content for a selected section
    function showContent(section) {
      // Hide previous content
      content.innerHTML = '';
      // Display new content
      const contentElement = document.createElement('div');
      const sectionTitle = document.createElement('div');
      sectionTitle.classList.add('section-title')
      sectionTitle.textContent = section.title;
      contentElement.appendChild(sectionTitle);
  
      // Check if there is content in the section
      if (section.content.length === 0) {
        const noTodosMessage = document.createElement('p');
        noTodosMessage.textContent = 'No todos for this section.';
        contentElement.appendChild(noTodosMessage);
      } else {
        // Iterate over the array and create elements for each todo item
        section.content.forEach((todo, index) => {
          const todoContainer = document.createElement('div');
          todoContainer.classList.add('todo')
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = todo.complete;

          checkbox.addEventListener('change', () => {
            todo.complete = checkbox.checked;
            // You can add additional logic here, such as updating the UI or saving to storage
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
  
    // Initial render
    // renderNavigation();
    
    // Add this function to the existing script.js file
function addSampleData() {
    // Example of adding sample data to the 'today' section
    sections.find(section => section.id === 'today').content = [
      todo, todo2
    ];
  
    // Refresh the navigation and content to see the changes
    renderNavigation();
    showContent(sections.find(section => section.id === 'today'));
  }
  addSampleData()
    
}

export {domLoader}