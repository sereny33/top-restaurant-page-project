export function createSection(sectionName, sectionElements) {
  const section = document.createElement('section');
  section.classList.add(`${sectionName}`);

  sectionElements.forEach(element => {
    section.appendChild(element());
  });
  content.appendChild(section)
} 