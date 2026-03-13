import "./styles.css";

import { homeSection } from "./components/home.js";
import { menuSection } from "./components/menu.js";
import { aboutSection } from "./components/about.js";


const navigation = document.querySelector('.navigation')

homeSection()

navigation.addEventListener('click', (event) => {
  event.preventDefault()

  switch (event.target.id) {
    case 'home_button':
      content.replaceChildren();
      homeSection()
      break; // Останавливает выполнение, чтобы код не пошел дальше

    case 'menu_button':
      content.replaceChildren();
      menuSection()
      break;

    case 'about_button':
      content.replaceChildren();
      aboutSection()
      break;

    default: // Сработает, если ни один case не подошел
      console.log('Unknown button');
  }

})



