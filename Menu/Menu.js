/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));

function createMenu() {
  // define new elements
  const menuButton = document.createElement('div');
  const unList = document.createElement('ul');
  const students = document.createElement('li');
  const faculty = document.createElement('li');
  const whatsNew = document.createElement('li');
  const tech = document.createElement('li');
  const music = document.createElement('li');
  const logOut = document.createElement('li');

  // setup structure of elements
  menuButton.appendChild(unList);
  unList.appendChild(students);
  unList.appendChild(faculty);
  unList.appendChild(whatsNew);
  unList.appendChild(tech);
  unList.appendChild(music);
  unList.appendChild(logOut);

  // set class names
  menuButton.classList.add('menu');

  // set text content
  students.textContent = "Students";
  faculty.textContent = "Faculty";
  whatsNew.textContent = "What's New";
  tech.textContent = "Tech Trends";
  music.textContent = "Music";
  logOut.textContent = "Log Out";


  // button events
  header.addEventListener('click', event => {
    // console.log('menu button clicked', event.target);
    // change visibility of the menu button w/ menu-button
    menuButton.classList.toggle('menu--open');
  });

  return menuButton;
}
