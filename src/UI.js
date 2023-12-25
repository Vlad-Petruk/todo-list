import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";
import { TodoFactory, SectionFactory } from "./factories";

// Maybe try to work with this function all the way, with sections(today,week, month) 
// maybe tre to update function to be able to add todos and create and add projects as well

let defaultTodo = TodoFactory('Open me...','i know how you feel... but keep going, just one step at a time','11/12/12','top',);
 
// Initial sample data for navigation items and corresponding content
const defaultSectionId = 'All todos';
let sections = [
  { id: defaultSectionId, title: 'All todos', todos: [defaultTodo] },
];

const domLoader = () =>{
    const navigation = document.getElementById('navigation');
    const content = document.getElementById('content');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const sectionTitle = createAndAppendElement('div', 'section-title',null, null, content)
    

    // Function to render navigation items
    function renderNavigation(sections) {
      navigation.innerHTML = '';
      const createProjectBtn = createAndAppendElement('button', 'create-project-btn', null, 'Create project', navigation);
      createProjectBtn.addEventListener('click', ()=>{
        openSectionCreateModal();
      })
      sections.forEach(section => {
        const item = document.createElement('div');
        item.classList.add('nav-element')
        // if (section.id === defaultSectionId){
        //   item.classList.add('project-separator');
        // }
        const itemTitle = createAndAppendElement('div','item-title',null, section.title,item)
        if(section.id !== defaultSectionId) {
          const deleteTodoBtn = createAndAppendElement('div', 'delete-section-btn', null, '&times;', item);
          deleteTodoBtn.addEventListener('click', ()=>{
            deleteSection(section.id);
            // showContent({ id: defaultSectionId, title: 'All todos', todos: [] });
            // onload()
          });
        }
        // item.textContent = section.title;
        item.addEventListener('click', () => showContent(section));
        navigation.appendChild(item);
        
      });
    }
  
    // Function to show content for a selected section
    function showContent(section) {
      const children = content.children;

      for (const child of children) {
          if (child.id !== 'section-title') {
              child.innerHTML = '';
          }
      }
      const contentElement = document.createElement('div');
      // Title
      sectionTitle.innerHTML = '';
      sectionTitle.innerHTML = section.title;
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
          const buttonsElement = createAndAppendElement('div', 'buttons-el', null, null, todoContainer);
          if(todo.title !== 'Open me...') {
            
            const dueDateinfo = createAndAppendElement('div', 'due-date-info', null, todo.dueDate, buttonsElement)
            const deleteTodoBtn = createAndAppendElement('button', 'delete-todo-btn', null, '&times;', buttonsElement);
            deleteTodoBtn.addEventListener('click', ()=>deleteTodo(index));
          }
          contentElement.appendChild(todoContainer)
          
        });
      }
  
      content.appendChild(contentElement);
    }

    // Helper function to create and append elements
    function createAndAppendElement(type, id, name, innerHTML, parentEl, labelText, options) {
      const element = document.createElement(type);
      element.setAttribute("name", name);
      element.setAttribute("id", id);

      if (type !== "button") {
          const label = document.createElement("label");
          label.setAttribute("for", id);
          label.textContent = labelText;
          parentEl.appendChild(label);
      }

      element.innerHTML = innerHTML;

        if (options) {
            for (const option of options) {
                const optionElement = document.createElement("option");
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                element.appendChild(optionElement);
            }
        }

        parentEl.appendChild(element);
        return element;
    }

    function openSectionCreateModal () {
      modal.style.display = 'block';
      const modalTitle = createAndAppendElement('h2', 'modal-title', null, 'Section form', modalContent);
      const sectionForm = createAndAppendElement('form', 'todo-form', null, null, modalContent);
      const sectionTitle = createAndAppendElement('input', 'title', 'title', null, sectionForm, 'Title');
      
      const todoSubmitBtn = createAndAppendElement("button", "section-submit", null, 'Submit', sectionForm, "Submit");
    
      todoSubmitBtn.addEventListener("click", ()=>{
        let newSection = SectionFactory(sectionTitle.value, sectionTitle.value);
        if(sectionTitle.value === ''){
          alert('Please enter the title');
        } else {
        let sectionsFromStorage = getFromLocalStorage('sections')
        sectionsFromStorage.value.push(newSection);
        addToLocalStorage('sections', sectionsFromStorage.value)
        closeModal();
        onload();
        
        showContent(sectionsFromStorage.value.find(section => section.id === sectionTitle.value))
      }
      })

      createCloseModalBtn();
    }
    
    function openTodoCreateModal(){
      const modalTitle = document.createElement('h2');
      modalTitle.innerHTML = 'Create Todo';
      modalContent.appendChild(modalTitle);
      // Here should be form element with submitAll todos button
      modal.style.display = 'block';
      // const todoForm = document.getElementById('todo-form');
      const todoForm = document.createElement("form");
      todoForm.id = "todo-form";

      // Create and append elements for Title, Description, Due Date, Priority, and Submit button
      const todoTitle = createAndAppendElement("input", "title", "title", null, todoForm, "Title");
      const todoDescription = createAndAppendElement("textarea", "description", "description", null, todoForm, "Description");
      const todoDueDate = createAndAppendElement("input", "dueDate", "dueDate", null, todoForm, "Due Date");
      todoDueDate.type = 'date';
      const todoPriority = createAndAppendElement("select", "priority", "priority", null, todoForm, "Priority", [
          { value: "low", text: "Low" },
          { value: "medium", text: "Medium" },
          { value: "top", text: "Top" },
      ]);
      const todoSubmitBtn = createAndAppendElement("button", "todo-submit", null, 'Submit', todoForm, "Submit");
      todoSubmitBtn.addEventListener("click", ()=>{
        let newTodo = TodoFactory(todoTitle.value, todoDescription.value, todoDueDate.value,todoPriority.value);
        console.log(newTodo);
        if(sectionTitle.innerHTML === defaultSectionId) {
          populateSection('All todos',newTodo);
        } else {
          populateSection(sectionTitle.textContent, newTodo);
          populateSection('All todos',newTodo);
        }
        
        closeModal();
        let sectionsFromStorage = getFromLocalStorage('sections')
        showContent(sectionsFromStorage.value.find(section => section.id === sectionTitle.innerHTML));
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

// Function to delete a specific section
    function deleteSection(sectionId) {
      let sectionsFromStorage = getFromLocalStorage('sections');

      // Find the index of the section to delete
      const sectionIndex = sectionsFromStorage.value.findIndex((sec) => sec.id === sectionId);
      
      if (sectionIndex !== -1) {
        // Check if the section is not 'All todos' or there is more than one section
        if (sectionId !== defaultSectionId || sectionsFromStorage.value.length > 1) {
         
          sectionsFromStorage.value.splice(sectionIndex, 1); // Remove the section
          
          addToLocalStorage('sections', sectionsFromStorage.value);
          console.log(sections.find(section => section.id === defaultSectionId))
          onload()
          content.innerHTML='';
          domLoader()
          // showContent({ id: defaultSectionId, title: 'All todos', todos: [] });
        }
      }
      // onload();
      // showContent(sections.find(section => section.id === defaultSectionId))
    }

    // Function to delete a specific todo
    function deleteTodo(index) {
      let sectionsFromStorage = getFromLocalStorage('sections');
      const section = sectionsFromStorage.value.find((sec) => sec.id === sectionTitle.innerHTML);

      if (section) {
        const todoToDelete = section.todos[index];
        // Check if the todo is in 'All todos'
        const isAllTodos = section.id === defaultSectionId;

        // Remove the todo from the specific section
        section.todos.splice(index, 1);
        addToLocalStorage('sections', sectionsFromStorage.value);

        // Remove the todo from 'All todos' if not the default todo
        if (!isAllTodos || todoToDelete.title !== 'Open me...') {
          const allTodosSection = sectionsFromStorage.value.find((sec) => sec.id === defaultSectionId);
          if (allTodosSection) {
            const allTodosIndex = allTodosSection.todos.findIndex((todo) => todo.title === todoToDelete.title);
            if (allTodosIndex !== -1) {
              allTodosSection.todos.splice(allTodosIndex, 1);
              addToLocalStorage('sections', sectionsFromStorage.value);
            }
          }
        }
        onload();
        showContent(section); // Update the content after deleting the todo
      }
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
  
    
    
    function populateSection(sectionId, todo) {
      let sectionsFromStorage = getFromLocalStorage('sections')
      sectionsFromStorage.value.find(section => section.id === sectionId).todos.push(todo);
      addToLocalStorage('sections', sectionsFromStorage.value)
      // Refresh the navigation and content to see the changes
      onload();
      if(sectionTitle.innerHTML === defaultSectionId){
        let sectionsFromStorage = getFromLocalStorage('sections')
      showContent(sectionsFromStorage.value.find(section => section.id === sectionId));
      }
    }
  
    const onload = () =>{
      let sectionsFromStorage = getFromLocalStorage('sections')
      if(sectionsFromStorage !== null) {
      renderNavigation(sectionsFromStorage.value);
    } else {renderNavigation(sections)}
    }

    onload(); 
    
    let sectionsFromStorage = getFromLocalStorage('sections')
    if(sectionsFromStorage !== null) {
    showContent(sectionsFromStorage.value.find(section => section.id === defaultSectionId));
  } else {
    addToLocalStorage('sections',sections)
    showContent(sections.find(section => section.id === defaultSectionId))
  }

  return{
    renderNavigation,
    showContent,
    openTodoDetailsModal,
    closeModal,
    populateSection,
    onload
  }
}

export {
  domLoader,
  sections,
}