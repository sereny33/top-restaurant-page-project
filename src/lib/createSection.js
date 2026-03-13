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