/**
 *  * Creates an element with given arguments.
 * 
 * @param {string} elementType The HTML tag name to create (e.g. "div", "button", "h2").
 * @param {string[]} elementClasses elementClasses - Array of CSS classes to add to the element.
 * @param {string} elementTextContent - Text content to insert inside the element.
 * @returns {HTMLElement} The created DOM element.
 */

export function newElement(elementType, elementClasses, elementTextContent) {
  const element = document.createElement(`${elementType}`);
  elementClasses.forEach(className => {
    element.classList.add(className);
  });
  element.textContent = elementTextContent;
  return element
}


/**
 * 
 * @param {*} items 
 * @returns 
 */
export function createMenuList(items){
    const ul = document.createElement('ul');
    ul.classList.add('menu__list');

    items.forEach(item => {
      const li = document.createElement('li');
      const p = newElement('p', ['menu__item'], item);

      li.appendChild(p);
      ul.appendChild(li);
    });

    return ul;
  };

export function createMenuCard(items) {
  const article = document.createElement('article');
  article.classList.add('article');
  

    items.forEach(item => {

      article.appendChild(item);
    });

    return article;
  };


/**
 * Creates a section element, fills it with dynamically generated elements
 * and appends it to the main content container.
 *
 * @param {string} sectionName - CSS class name for the section.
 * @param {Function[]} sectionElements - Array of functions that return DOM elements.
 * Each function will be executed and its returned element will be appended to the section.

 */
export function createSection(sectionName, sectionElements) {
  const section = document.createElement('section');
  section.classList.add(`${sectionName}`);

  sectionElements.forEach(element => {
    section.appendChild(element());
  });
  content.appendChild(section)
} 
