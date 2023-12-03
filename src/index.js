import { TodoFactory, ProjectFactory } from "./factories";
import { domLoader } from "./UI";

// i need to whrite local storage functions, peghaps in different module
// add date-fns
// create or find the UI: 
// expand the factories with the local storage functions(delete,add,get)
// create onload function with all get from local storage
// learn how to expand todo to see/edit its details
// view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)

document.addEventListener('DOMContentLoaded', function () {
    domLoader();
   });
  
   