import { TodoFactory, ProjectFactory } from "./factories";

const domLoader = () =>{
    const navigation = document.getElementById('navigation');
    const content = document.getElementById('content');
  
    // Sample data for navigation items and corresponding content
    const sections = [
      { id: 'section1', title: 'Section 1', content: 'Content for Section 1' },
      { id: 'section2', title: 'Section 2', content: 'Content for Section 2' },
      // Add more sections as needed
    ];

    function renderNavigation() {
      sections.forEach(section => {
        const item = document.createElement('div');
        item.textContent = section.title;
        item.addEventListener('click', () => showContent(section));
        navigation.appendChild(item);
      });
    }
  
    function showContent(section) {
      // Hide previous content
      content.innerHTML = '';
      // Display new content
      const contentElement = document.createElement('div');
      contentElement.textContent = section.content;
      content.appendChild(contentElement);
    }
  
    // Initial render
    renderNavigation();

    return {
        sections,
        renderNavigation,
        showContent
    }
}

export {domLoader}