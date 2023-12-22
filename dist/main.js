(()=>{"use strict";const e=(e,t,n,o,d)=>({title:e,description:t,dueDate:n,priority:o,complite:d});let t=[{id:"all",title:"All Todos",todos:[e("Open me...","i know how you feel... but keep going, just one step at a time","11/12/12","top")]}];document.addEventListener("DOMContentLoaded",(function(){(()=>{const n=document.getElementById("navigation"),o=document.getElementById("content"),d=document.getElementById("modal"),i=document.getElementById("modal-content");function c(){n.innerHTML="",t.forEach((e=>{const t=document.createElement("div");t.classList.add("nav-element"),"completed"===e.id&&t.classList.add("project-separator"),t.textContent=e.title,t.addEventListener("click",(()=>l(e))),n.appendChild(t)}))}function l(n){o.innerHTML="";const c=document.createElement("div"),u=document.createElement("div");u.classList.add("section-title"),u.textContent=n.title,c.appendChild(u);const m=document.createElement("button");if(m.type="button",m.innerHTML="Add Todo",m.classList.add("add-todo-button"),c.appendChild(m),m.addEventListener("click",(()=>{!function(){const n=document.createElement("h2");n.innerHTML="Create Todo",i.appendChild(n),d.style.display="block";const o=document.createElement("form");function c(e,t,n,d,i){const c=document.createElement(e);if(c.setAttribute("name",t),c.setAttribute("id",n),"button"!==e){const e=document.createElement("label");e.setAttribute("for",n),e.textContent=d,o.appendChild(e)}if(i)for(const e of i){const t=document.createElement("option");t.value=e.value,t.textContent=e.text,c.appendChild(t)}return o.appendChild(c),c}o.className="todo-form",o.id="todo-form";const a=c("input","title","title","Title"),u=c("textarea","description","description","Description"),m=c("input","dueDate","dueDate","Due Date"),E=c("select","priority","priority","Priority",[{value:"low",text:"Low"},{value:"medium",text:"Medium"},{value:"top",text:"Top"}]),v=c("button",null,"todo-submit","Submit");v.innerHTML="Submit",v.addEventListener("click",(()=>{let n=e(a.value,u.value,m.value,E.value);console.log(n),t[0].todos.push(n),p(),l(t.find((e=>"all"===e.id)))})),i.appendChild(o),s(),r()}()})),0===n.todos.length){const e=document.createElement("p");e.textContent="No todos for this section.",c.appendChild(e)}else n.todos.forEach(((e,t)=>{const n=document.createElement("div");n.classList.add("todo");const o=document.createElement("input");o.type="checkbox",o.checked=e.complete,o.addEventListener("change",(()=>{e.complete=o.checked,o.checked?d.classList.add("crossed-out"):d.classList.remove("crossed-out")}));const d=document.createElement("div");d.textContent=e.title,d.addEventListener("click",(()=>a(e))),n.appendChild(o),n.appendChild(d),c.appendChild(n)}));o.appendChild(c)}function a(e,t){i.innerHTML=`\n      <p>Todo Details:</p>\n      <p>Title: ${e.title}</p>\n      <p>Descrption: ${e.description||"No details available"}</p>\n      <p>Due date: ${e.dueDate}<p>\n      <p>Priorty: ${e.priority}\n      `,d.style.display="block",s(),r()}function s(){const e=document.createElement("div");e.className="close",e.innerHTML="&times;",e.addEventListener("click",(()=>p())),i.appendChild(e)}function p(){d.style.display="none",i.innerHTML=""}function r(){const e=document.createElement("button");e.textContent="Update",e.addEventListener("click",(()=>(index,void p()))),i.appendChild(e)}c(),l(t.find((e=>"all"===e.id)))})()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtEQUN0QjZELEVBQUs1RCxpQ0FDTjRELEVBQUszRCxtQkFFbkJVLEVBQU1rQixNQUFNQyxRQUFVLFFBRXRCeUIsSUFDQUMsR0FDRixDQUVBLFNBQVNELElBRVAsTUFBTWMsRUFBYy9ELFNBQVNZLGNBQWMsT0FDM0NtRCxFQUFZMUIsVUFBWSxRQUN4QjBCLEVBQVl2RCxVQUFZLFVBR3hCdUQsRUFBWTlELGlCQUFpQixTQUFTLElBQU04QyxNQUc1Q3pDLEVBQWFXLFlBQVk4QyxFQUMzQixDQUlBLFNBQVNoQixJQUNQMUMsRUFBTWtCLE1BQU1DLFFBQVUsT0FFdEJsQixFQUFhRSxVQUFZLEVBRTNCLENBRUEsU0FBUzBDLElBRVAsTUFBTWMsRUFBWWhFLFNBQVNZLGNBQWMsVUFDekNvRCxFQUFVakQsWUFBYyxTQUN4QmlELEVBQVUvRCxpQkFBaUIsU0FBUyxLQUF3QnNELFdBUzVEUixPQVJBekMsRUFBYVcsWUFBWStDLEVBQzNCLENBc0JGekQsSUFDQVMsRUFBWW5CLEVBQVNtRCxNQUFLdEMsR0FBMEIsUUFBZkEsRUFBUVosS0FRN0MsRUN0TkVtRSxFQUVELEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvamVjdEZhY3RvcnkgPSAoaWQsIHRpdGxlKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvcyA9IFtdO1xyXG4gIFxyXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICAgIHRvZG9zLnB1c2godG9kbyk7XHJcbiAgICAvLyAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcclxuICAgICAgbGV0IHRvZG9JbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbylcclxuICAgICAgdG9kb3Muc3BsaWNlKHRvZG9JbmRleCwxKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdG9kb3MsXHJcbiAgICAgIGFkZFRvZG8sXHJcbiAgICAgIGRlbGV0ZVRvZG8sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5jb25zdCBUb2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LGNvbXBsaXRlKSA9PiB7XHJcbiAgY29tcGxpdGU6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGR1ZURhdGUsIFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGNvbXBsaXRlXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcbiBleHBvcnQge1Byb2plY3RGYWN0b3J5LCBUb2RvRmFjdG9yeX0iLCJpbXBvcnQgeyBUb2RvRmFjdG9yeSwgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcclxuXHJcbi8vIE1heWJlIHRyeSB0byB3b3JrIHdpdGggdGhpcyBmdW5jdGlvbiBhbGwgdGhlIHdheSwgd2l0aCBzZWN0aW9ucyh0b2RheSx3ZWVrLCBtb250aCkgXHJcbi8vIG1heWJlIHRyZSB0byB1cGRhdGUgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBhZGQgdG9kb3MgYW5kIGNyZWF0ZSBhbmQgYWRkIHByb2plY3RzIGFzIHdlbGxcclxuXHJcbmxldCBkZWZhdWx0VG9kbyA9IFRvZG9GYWN0b3J5KCdPcGVuIG1lLi4uJywnaSBrbm93IGhvdyB5b3UgZmVlbC4uLiBidXQga2VlcCBnb2luZywganVzdCBvbmUgc3RlcCBhdCBhIHRpbWUnLCcxMS8xMi8xMicsJ3RvcCcsKTtcclxuIFxyXG4vLyBJbml0aWFsIHNhbXBsZSBkYXRhIGZvciBuYXZpZ2F0aW9uIGl0ZW1zIGFuZCBjb3JyZXNwb25kaW5nIGNvbnRlbnRcclxubGV0IHNlY3Rpb25zID0gW1xyXG4gIHsgaWQ6ICdhbGwnLCB0aXRsZTogJ0FsbCBUb2RvcycsIHRvZG9zOiBbZGVmYXVsdFRvZG9dIH0sXHJcbl07XHJcblxyXG5jb25zdCBkb21Mb2FkZXIgPSAoKSA9PntcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRlbnQnKTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byByZW5kZXIgbmF2aWdhdGlvbiBpdGVtc1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyTmF2aWdhdGlvbigpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXHJcbiAgICAgICAgaWYgKHNlY3Rpb24uaWQgPT09ICdjb21wbGV0ZWQnKXtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZXBhcmF0b3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHNlY3Rpb24udGl0bGU7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dDb250ZW50KHNlY3Rpb24pKTtcclxuICAgICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIHNob3cgY29udGVudCBmb3IgYSBzZWxlY3RlZCBzZWN0aW9uXHJcbiAgICBmdW5jdGlvbiBzaG93Q29udGVudChzZWN0aW9uKSB7XHJcblxyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAvLyBUaXRsZVxyXG4gICAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGl0bGUnKVxyXG4gICAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBzZWN0aW9uLnRpdGxlO1xyXG4gICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpO1xyXG4gICAgICAvL0J1dHRvbiBcclxuICAgICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBhZGRUb2RvQnV0dG9uLnR5cGU9ICdidXR0b24nO1xyXG4gICAgICBhZGRUb2RvQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcclxuICAgICAgYWRkVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idXR0b24nKVxyXG4gICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcclxuICAgICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBvcGVuVG9kb0NyZWF0ZU1vZGFsKCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBjb250ZW50IGluIHRoZSBzZWN0aW9uXHJcbiAgICAgIGlmIChzZWN0aW9uLnRvZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG5vVG9kb3NNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5vVG9kb3NNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHRvZG9zIGZvciB0aGlzIHNlY3Rpb24uJztcclxuICAgICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChub1RvZG9zTWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBhcnJheSBhbmQgY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRvZG8gaXRlbVxyXG4gICAgICAgIHNlY3Rpb24udG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kbycpXHJcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdG9kby5jb21wbGV0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gYWRkIGFkZGl0aW9uYWwgbG9naWMgaGVyZSwgc3VjaCBhcyB1cGRhdGluZyB0aGUgVUkgb3Igc2F2aW5nIHRvIHN0b3JhZ2VcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkLW91dCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzZWQtb3V0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7IFxyXG4gICAgICAgICAgdG9kb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuVG9kb0RldGFpbHNNb2RhbCh0b2RvLCBpbmRleCkpO1xyXG5cclxuICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XHJcbiAgICAgICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblRvZG9DcmVhdGVNb2RhbCgpe1xyXG4gICAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgbW9kYWxUaXRsZS5pbm5lckhUTUwgPSAnQ3JlYXRlIFRvZG8nO1xyXG4gICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgICAgIC8vIEhlcmUgc2hvdWxkIGJlIGZvcm0gZWxlbWVudCB3aXRoIHN1Ym1pdEFsbCBidXR0b25cclxuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIC8vIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xyXG4gICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICB0b2RvRm9ybS5jbGFzc05hbWUgPSBcInRvZG8tZm9ybVwiO1xyXG4gICAgICB0b2RvRm9ybS5pZCA9IFwidG9kby1mb3JtXCI7XHJcblxyXG4gICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhcHBlbmQgZm9ybSBlbGVtZW50c1xyXG4gICAgICBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KHR5cGUsIG5hbWUsIGlkLCBsYWJlbFRleHQsIG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBcImJ1dHRvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xyXG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICAgICAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dDtcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgZWxlbWVudHMgZm9yIFRpdGxlLCBEZXNjcmlwdGlvbiwgRHVlIERhdGUsIFByaW9yaXR5LCBhbmQgU3VibWl0IGJ1dHRvblxyXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KFwiaW5wdXRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIFwiVGl0bGVcIik7XHJcbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvblwiKTtcclxuICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KFwiaW5wdXRcIiwgXCJkdWVEYXRlXCIsIFwiZHVlRGF0ZVwiLCBcIkR1ZSBEYXRlXCIpO1xyXG4gICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KFwic2VsZWN0XCIsIFwicHJpb3JpdHlcIiwgXCJwcmlvcml0eVwiLCBcIlByaW9yaXR5XCIsIFtcclxuICAgICAgICAgIHsgdmFsdWU6IFwibG93XCIsIHRleHQ6IFwiTG93XCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwibWVkaXVtXCIsIHRleHQ6IFwiTWVkaXVtXCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwidG9wXCIsIHRleHQ6IFwiVG9wXCIgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIGNvbnN0IHRvZG9TdWJtaXRCdG4gPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KFwiYnV0dG9uXCIsIG51bGwsIFwidG9kby1zdWJtaXRcIiwgXCJTdWJtaXRcIik7XHJcbiAgICAgIHRvZG9TdWJtaXRCdG4uaW5uZXJIVE1MPSdTdWJtaXQnO1xyXG4gICAgICB0b2RvU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGxldCBuZXdUb2RvID0gVG9kb0ZhY3RvcnkodG9kb1RpdGxlLnZhbHVlLCB0b2RvRGVzY3JpcHRpb24udmFsdWUsIHRvZG9EdWVEYXRlLnZhbHVlLHRvZG9Qcmlvcml0eS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VG9kbyk7XHJcbiAgICAgICAgc2VjdGlvbnNbMF0udG9kb3MucHVzaChuZXdUb2RvKTtcclxuICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgc2hvd0NvbnRlbnQoc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09ICdhbGwnKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XHJcbiAgXHJcbiAgICAgIGNyZWF0ZUNsb3NlTW9kYWxCdG4oKTtcclxuICAgICAgY3JlYXRlVXBkYXRlTW9kYWxCdG4oKTtcclxuICAgIH1cclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gbW9kYWwgd2l0aCB0b2RvIGRldGFpbHNcclxuICAgIGZ1bmN0aW9uIG9wZW5Ub2RvRGV0YWlsc01vZGFsKHRvZG8sIGluZGV4KSB7XHJcbiAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPlRvZG8gRGV0YWlsczo8L3A+XHJcbiAgICAgIDxwPlRpdGxlOiAke3RvZG8udGl0bGV9PC9wPlxyXG4gICAgICA8cD5EZXNjcnB0aW9uOiAke3RvZG8uZGVzY3JpcHRpb24gfHwgJ05vIGRldGFpbHMgYXZhaWxhYmxlJ308L3A+XHJcbiAgICAgIDxwPkR1ZSBkYXRlOiAke3RvZG8uZHVlRGF0ZX08cD5cclxuICAgICAgPHA+UHJpb3J0eTogJHt0b2RvLnByaW9yaXR5fVxyXG4gICAgICBgO1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBcclxuICAgICAgY3JlYXRlQ2xvc2VNb2RhbEJ0bigpO1xyXG4gICAgICBjcmVhdGVVcGRhdGVNb2RhbEJ0bigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2xvc2VNb2RhbEJ0bigpe1xyXG4gICAgICAvLyBDbG9zZSBtb2RhbCB3aGVuIHRoZSBjbG9zZSBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UnO1xyXG4gICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcblxyXG4gICAgICAvLyBBdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XHJcblxyXG4gICAgICAvLyBBcHBlbmQgdGhlIGNsb3NlIGJ1dHRvbiB0byB0aGUgbW9kYWwgY29udGVudFxyXG4gICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjbG9zZSB0aGUgbW9kYWxcclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIFxyXG4gICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVXBkYXRlTW9kYWxCdG4gKCl7XHJcbiAgICAgIC8vIE9wdGlvbmFsOiBBZGQgZnVuY3Rpb25hbGl0eSB0byB1cGRhdGUgb3IgZGVsZXRlIHRvZG8gaW4gdGhlIG1vZGFsXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICB1cGRhdGVCdG4udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcclxuICAgICAgdXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXBkYXRlVG9kb0RldGFpbHMoaW5kZXgpKTtcclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHVwZGF0ZUJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRvZG8gZGV0YWlscyAob3B0aW9uYWwpXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUb2RvRGV0YWlscyhpbmRleCkge1xyXG4gICAgICAvLyBBZGQgeW91ciBsb2dpYyB0byB1cGRhdGUgdG9kbyBkZXRhaWxzXHJcbiAgICAgIC8vIFlvdSBjYW4gdXNlIHByb21wdCwgaW5wdXQgZmllbGRzLCBvciBhbm90aGVyIG1vZGFsIGZvciB1cGRhdGluZ1xyXG4gICAgICAvLyBUaGVuIHVwZGF0ZSB0aGUgc2VjdGlvbnMgYXJyYXkgYW5kIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVTZWN0aW9uKHNlY3Rpb25JZCwgcHJvamVjdCwgdG9kbykge1xyXG4gICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbylcclxuICAgICAgc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09IHNlY3Rpb25JZCkudG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xyXG4gICAgXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIG5hdmlnYXRpb24gYW5kIGNvbnRlbnQgdG8gc2VlIHRoZSBjaGFuZ2VzXHJcbiAgICAgIHJlbmRlck5hdmlnYXRpb24oKTtcclxuICAgICAgc2hvd0NvbnRlbnQoc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09IHNlY3Rpb25JZCkpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICByZW5kZXJOYXZpZ2F0aW9uKCk7XHJcbiAgc2hvd0NvbnRlbnQoc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09ICdhbGwnKSk7XHJcblxyXG4gIHJldHVybntcclxuICAgIHJlbmRlck5hdmlnYXRpb24sXHJcbiAgICBzaG93Q29udGVudCxcclxuICAgIG9wZW5Ub2RvRGV0YWlsc01vZGFsLFxyXG4gICAgY2xvc2VNb2RhbCxcclxuICAgIHBvcHVsYXRlU2VjdGlvblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBkb21Mb2FkZXIsXHJcbiAgc2VjdGlvbnMsXHJcbn0iLCJpbXBvcnQgeyBUb2RvRmFjdG9yeSwgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcclxuaW1wb3J0IHsgZG9tTG9hZGVyLHNlY3Rpb25zLHJlbmRlck5hdmlnYXRpb24gfSBmcm9tIFwiLi9VSVwiO1xyXG5cclxuLy8gaSBuZWVkIHRvIHdocml0ZSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9ucywgcGVnaGFwcyBpbiBkaWZmZXJlbnQgbW9kdWxlXHJcbi8vIGFkZCBkYXRlLWZuc1xyXG4vLyBjcmVhdGUgb3IgZmluZCB0aGUgVUk6IFxyXG4vLyBleHBhbmQgdGhlIGZhY3RvcmllcyB3aXRoIHRoZSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9ucyhkZWxldGUsYWRkLGdldClcclxuLy8gY3JlYXRlIG9ubG9hZCBmdW5jdGlvbiB3aXRoIGFsbCBnZXQgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbi8vIGxlYXJuIGhvdyB0byBleHBhbmQgdG9kbyB0byBzZWUvZWRpdCBpdHMgZGV0YWlsc1xyXG4vLyB2aWV3IGFsbCB0b2RvcyBpbiBlYWNoIHByb2plY3QgKHByb2JhYmx5IGp1c3QgdGhlIHRpdGxlIGFuZCBkdWVkYXRl4oCmIHBlcmhhcHMgY2hhbmdpbmcgY29sb3IgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvbUxvYWRlcigpO1xyXG4gICAgLy8gcmVuZGVyTmF2aWdhdGlvbigpXHJcbiAgIH0pO1xyXG4gIFxyXG4gICAiXSwibmFtZXMiOlsiVG9kb0ZhY3RvcnkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tcGxpdGUiLCJzZWN0aW9ucyIsImlkIiwidG9kb3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwibW9kYWwiLCJtb2RhbENvbnRlbnQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50Iiwic2hvd0NvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRFbGVtZW50Iiwic2VjdGlvblRpdGxlIiwiYWRkVG9kb0J1dHRvbiIsInR5cGUiLCJtb2RhbFRpdGxlIiwic3R5bGUiLCJkaXNwbGF5IiwidG9kb0Zvcm0iLCJjcmVhdGVBbmRBcHBlbmRFbGVtZW50IiwibmFtZSIsImxhYmVsVGV4dCIsIm9wdGlvbnMiLCJlbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibGFiZWwiLCJvcHRpb24iLCJvcHRpb25FbGVtZW50IiwidmFsdWUiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwidG9kb1RpdGxlIiwidG9kb0Rlc2NyaXB0aW9uIiwidG9kb0R1ZURhdGUiLCJ0b2RvUHJpb3JpdHkiLCJ0b2RvU3VibWl0QnRuIiwibmV3VG9kbyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY2xvc2VNb2RhbCIsImZpbmQiLCJjcmVhdGVDbG9zZU1vZGFsQnRuIiwiY3JlYXRlVXBkYXRlTW9kYWxCdG4iLCJvcGVuVG9kb0NyZWF0ZU1vZGFsIiwibGVuZ3RoIiwibm9Ub2Rvc01lc3NhZ2UiLCJ0b2RvIiwiaW5kZXgiLCJ0b2RvQ29udGFpbmVyIiwiY2hlY2tib3giLCJjaGVja2VkIiwiY29tcGxldGUiLCJ0b2RvRWxlbWVudCIsInJlbW92ZSIsIm9wZW5Ub2RvRGV0YWlsc01vZGFsIiwiY2xvc2VCdXR0b24iLCJ1cGRhdGVCdG4iLCJkb21Mb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9