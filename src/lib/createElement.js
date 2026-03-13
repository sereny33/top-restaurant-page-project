function newElement(elementType, elementClasses, elementTextContent) {
  const element = document.createElement(`${elementType}`);
  elementClasses.forEach(className => {
    element.classList.add(className);
  });
  element.textContent = elementTextContent;
  return element
}

export { newElement }