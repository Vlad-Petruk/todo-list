const ProjectFactory = (projectTitle) => {
    const todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    //   saveToLocalStorage();
    };

    const deleteTodo = (todo) => {
      let todoIndex = todos.indexOf(todo)
      todos.splice(todoIndex,1);
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



 export {ProjectFactory, TodoFactory}