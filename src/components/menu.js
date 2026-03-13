import { newElement } from '../lib/createElement.js'
import { createSection } from "../lib/createSection.js";

export function menuSection() {
  const sectionElements = [];

  sectionElements.push(() => newElement('h2', ['menu__title'], 'Our Menu.'));
  sectionElements.push(() => newElement('p', ['paragraph', 'menu__descripption'], 'Our menu changes with the seasons to bring you the freshest local ingredients.'))
  sectionElements.push(() => newElement('button', ['button', 'cta-button', 'secondary-cta-button'], 'Explore the menu'))


  createSection('menu', sectionElements);

}