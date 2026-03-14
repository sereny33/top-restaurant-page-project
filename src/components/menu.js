import {
  newElement,
  createSection,
  createMenuList,
  createMenuCard,
} from "../lib/utils.js";

export function menuSection() {
  const sectionElements = [];

  sectionElements.push(() => newElement("h2", ["menu__title"], "Our Menu"));

  sectionElements.push(() =>
    newElement(
      "p",
      ["paragraph", "menu__description"],
      "Seasonal dishes crafted from fresh, locally sourced ingredients.",
    ),
  );

  sectionElements.push(() =>
    createMenuCard([
      newElement("h3", ["menu__category"], "Starters"),
      createMenuList([
        "Bruschetta – Grilled bread with tomato, garlic, and basil",
        "Creamy Mushroom Soup – Served with homemade bread",
        "Caprese Salad – Fresh mozzarella, tomatoes, and basil",
      ]),
    ]),
  );

  sectionElements.push(() =>
    createMenuCard([
      newElement("h3", ["menu__category"], "Main Courses"),
      createMenuList([
        "Grilled Salmon – Roasted vegetables and lemon butter",
        "Ribeye Steak – Garlic butter and fries",
        "Wild Mushroom Risotto – Creamy arborio rice with parmesan",
      ]),
    ]),
  );

  sectionElements.push(() =>
    createMenuCard([
      newElement("h3", ["menu__category"], "Desserts"),
      createMenuList([
        "Tiramisu – Classic Italian dessert",
        "Chocolate Lava Cake – Warm cake with molten center",
        "Vanilla Panna Cotta – Served with berry sauce",
      ]),
    ]),
  );

  sectionElements.push(() =>
    createMenuCard([
      newElement("h3", ["menu__category"], "Drinks"),
      createMenuList([
        "Espresso / Cappuccino",
        "Fresh Lemonade",
        "House Red / White Wine",
      ]),
    ]),
  );

  createSection("menu", sectionElements);
}
