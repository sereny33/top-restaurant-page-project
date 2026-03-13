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
