const ProjectFactory = (projectTitle) => {
    const todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    //   saveToLocalStorage();
    };

    const deleteTodo = (index) => {
        todos.splice(index,1);
    }
  
    return {
      projectTitle,
      todos,
      addTodo,
      deleteTodo,
    };
  };

const TodoFactory = (title, description, dueDate, priority) => {
    return {
        title,
        description, 
        dueDate, 
        priority
    };
}

let todo = TodoFactory('MyTodo','sdfgsdg','11/12/12','top');
console.log(todo)

let project = ProjectFactory('NewProj')
 project.addTodo(todo);
 console.log(project)