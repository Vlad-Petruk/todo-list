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

let todo = TodoFactory('MyTodo','sdfgsdg','11/12/12','top');
let todo2 = TodoFactory('MyTodo2','sdfgsdg','11/12/12','top');
let todo3 = TodoFactory('MyTodo3','sdfgsdg','11/12/12','top');
console.log(todo)

let project = ProjectFactory('NewProj')
 project.addTodo(todo);
 project.addTodo(todo2);
 project.addTodo(todo3);

 project.deleteTodo(todo3)
 console.log(project)


 export {ProjectFactory, TodoFactory}