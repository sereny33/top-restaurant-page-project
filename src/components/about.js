import { newElement, createSection } from '../lib/utils.js'

export function aboutSection() {
  const sectionElements = [];

  sectionElements.push(() =>
    newElement('h2', ['about__title'], 'About Us')
  );

  sectionElements.push(() =>
    newElement(
      'p',
      ['paragraph', 'about__description'],
      'Founded in 1998, our restaurant has been serving unforgettable dining experiences for over two decades.'
    )
  );

  sectionElements.push(() =>
    newElement(
      'p',
      ['paragraph'],
      'We believe that great food starts with fresh ingredients, talented chefs, and a passion for hospitality.'
    )
  );

  sectionElements.push(() =>
    newElement(
      'button',
      ['button', 'cta-button', 'primary-cta-button'],
      'Contact Us'
    )
  );

  createSection('about', sectionElements);
}



