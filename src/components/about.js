import { newElement } from '../lib/createElement.js'
import { createSection } from "../lib/createSection.js";

export function aboutSection() {
  const sectionElements = [];

  sectionElements.push(() => newElement('h2', ['about__title'], 'Our Story (The Soul)'));
  sectionElements.push(() => newElement('p', ['about__description'], 'At The Golden Hearth, we believe food is a language. We source every ingredient from local artisans to ensure that every bite tells a story of quality and passion.'))


  createSection('about', sectionElements);

}



