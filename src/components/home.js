import { newElement } from '../lib/createElement.js'
import { createSection } from "../lib/createSection.js";

export function homeSection() {
  const sectionElements = [];

  sectionElements.push(() => newElement('h2', ['hero__title'], 'Crafting Culinary Memories Since 1998.'));
  sectionElements.push(() => newElement('button', ['button', 'cta-button', 'primary-cta-button'], 'Reserve a table'))
  sectionElements.push(() => newElement('button', ['button', 'cta-button', 'secondary-cta-button'], 'Explore the menu'))


  createSection('hero', sectionElements);

}



