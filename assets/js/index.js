const hljs = require('highlight.js')

hljs.initHighlightingOnLoad()

// ---
// bulma nav trigger
// ---

// Get all "nav-burger" elements and nav links
const burgers = Array.from(document.querySelectorAll('.navbar-burger'))
const navLinks = Array.from(document.querySelectorAll('.navbar-menu a'))
const catsLink = document.querySelector('.navbar-dropdown-link')

// Check if there are any nav burgers
if (burgers.length > 0) {

  // Add a click event on each of them
  burgers.forEach(function (burger) {
    burger.addEventListener('click', function () {
      // Get the target from the "data-target" attribute
      const target = burger.dataset.target
      const menu = document.getElementById(target)

      // Toggle the class on both the "nav-burger" and the "nav-menu"
      burger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    })
  })
  // little snippet to make the categories link in the mobile menu work similarly
  catsLink.addEventListener('click', function () {
    const target = catsLink.dataset.target
    const menu = document.getElementById(target)

    catsLink.classList.toggle('is-active')
    menu.classList.toggle('is-active')
  })
}

// -----
// active tab logic
// -----

const currentPage = document.querySelector('main > div')
navLinks.forEach(link => {
  if (link.classList.contains(currentPage.id)) link.classList.add('active')
})



