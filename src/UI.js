import { TodoFactory, ProjectFactory } from "./factories";

// Maybe try to work with this function all the way, with sections(today,week, month) 
// maybe tre to update function to be able to add todos and create and add projects as well

let todo = TodoFactory('MyTodo','sdfgsdg','11/12/12','top');
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
      { id: 'today', title: 'Today', content: [] },
      { id: 'week', title: 'This Week', content: [] },
      { id: 'all', title: 'All Todos', content: [] },
    ];
  
    // Function to render navigation items
    function renderNavigation() {
      sections.forEach(section => {
        const item = document.createElement('div');
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
  
      // Check if there is content in the section
      if (section.content.length === 0) {
        const noTodosMessage = document.createElement('p');
        noTodosMessage.textContent = 'No todos for this section.';
        contentElement.appendChild(noTodosMessage);
      } else {
        // Iterate over the array and create elements for each todo item
        section.content.forEach((todo, index) => {
          const todoElement = document.createElement('div');
          todoElement.textContent = todo.title; // Assuming each todo has a 'title' property
          todoElement.addEventListener('click', () => openModal(todo, index));
          contentElement.appendChild(todoElement);
        });
      }
  
      content.appendChild(contentElement);
    }
  
    // Function to open modal with todo details
    function openModal(todo, index) {
      modalContent.innerHTML = `<p>Todo Details:</p><p>Title: ${todo.title}</p><p>Details: ${todo.details || 'No details available'}</p>`;
      modal.style.display = 'block';
  
      // Close modal when the close button is clicked
      const closeModalBtn = document.getElementById('close-modal');
      closeModalBtn.addEventListener('click', () => closeModal());
  
      // Optional: Add functionality to update or delete todo in the modal
      // const updateBtn = document.createElement('button');
      // updateBtn.textContent = 'Update';
      // updateBtn.addEventListener('click', () => updateTodoDetails(index));
      // modalContent.appendChild(updateBtn);
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
    renderNavigation();
    
    // Add this function to the existing script.js file
function addSampleData() {
    // Example of adding sample data to the 'today' section
    sections.find(section => section.id === 'today').content = [
      { title: 'Complete Assignment', details: 'Finish the todo app project.' },
      { title: 'Go for a Run', details: 'Stay active and healthy.' },
    ];
  
    // Refresh the navigation and content to see the changes
    renderNavigation();
    showContent(sections.find(section => section.id === 'today'));
  }
  addSampleData()
    // const navigation = document.getElementById('navigation');
    // const content = document.getElementById('content');
  
    // // Sample data for navigation items and corresponding content
    // const sections = [
    //   { id: 'section1', title: 'All', content: renderTodoOnSection(project1) },
    //   { id: 'section2', title: 'Today', content: 'Content for Section 2' },
    //   { id: 'section3', title: 'Week', content: 'Content for Section 3' },
    //   { id: 'section4', title: 'Important', content: 'Content for Section 4' },
    //   { id: 'section5', title: 'Completed', content: 'Content for Section 5' },
    //   // Add more sections as needed
    // ];


    // function renderNavigation() {
    //   sections.forEach(section => {
    //     const item = document.createElement('div');
    //     item.textContent = section.title;
    //     item.addEventListener('click', () => showContent(section));
    //     navigation.appendChild(item);
    //   });
    // }
  
    // function showContent(section) {
    //   // Hide previous content
    //   content.innerHTML = '';
    //   // Display new content
    //   const contentElement = document.createElement('div');
    //   contentElement.textContent = section.content;
    //   content.appendChild(contentElement);
    // }
  
    // // Initial render
    // renderNavigation();

    // return {
    //     sections,
    //     renderNavigation,
    //     showContent
    // }
}

export {domLoader}