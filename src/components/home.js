import { newElement, createSection } from '../lib/utils.js'

export function homeSection() {
  const sectionElements = [];

  sectionElements.push(() =>
    newElement(
      'h2',
      ['hero__title'],
      'Crafting Culinary Memories Since 1998.'
    )
  );

  sectionElements.push(() =>
    newElement(
      'p',
      ['paragraph', 'hero__description'],
      'Welcome to our restaurant where every dish is crafted with passion and the finest ingredients.'
    )
  );

  sectionElements.push(() =>
    newElement(
      'button',
      ['button', 'cta-button', 'primary-cta-button'],
      'Reserve a Table'
    )
  );

  sectionElements.push(() =>
    newElement(
      'button',
      ['button', 'cta-button', 'secondary-cta-button'],
      'Explore the Menu'
    )
  );

  createSection('hero', sectionElements);
}



