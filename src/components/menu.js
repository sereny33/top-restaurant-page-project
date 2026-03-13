import { newElement, createSection,createMenuList } from '../lib/utils.js'


export function menuSection() {
  const sectionElements = [];

  sectionElements.push(() =>
    newElement('h2', ['menu__title'], 'Our Menu')
  );

  sectionElements.push(() =>
    newElement(
      'p',
      ['paragraph', 'menu__description'],
      'Seasonal dishes crafted from fresh, locally sourced ingredients.'
    )
  );

  sectionElements.push(() => newElement('h3', ['menu__category'], 'Starters'));
  sectionElements.push(() =>
    createMenuList([
      'Bruschetta – Grilled bread with tomato, garlic, and basil',
      'Creamy Mushroom Soup – Served with homemade bread',
      'Caprese Salad – Fresh mozzarella, tomatoes, and basil'
    ])
  );

  sectionElements.push(() => newElement('h3', ['menu__category'], 'Main Courses'));
  sectionElements.push(() =>
    createMenuList([
      'Grilled Salmon – Roasted vegetables and lemon butter',
      'Ribeye Steak – Garlic butter and fries',
      'Wild Mushroom Risotto – Creamy arborio rice with parmesan'
    ])
  );

  sectionElements.push(() => newElement('h3', ['menu__category'], 'Desserts'));
  sectionElements.push(() =>
    createMenuList([
      'Tiramisu – Classic Italian dessert',
      'Chocolate Lava Cake – Warm cake with molten center',
      'Vanilla Panna Cotta – Served with berry sauce'
    ])
  );

  sectionElements.push(() => newElement('h3', ['menu__category'], 'Drinks'));
  sectionElements.push(() =>
    createMenuList([
      'Espresso / Cappuccino',
      'Fresh Lemonade',
      'House Red / White Wine'
    ])
  );

  createSection('menu', sectionElements);
}