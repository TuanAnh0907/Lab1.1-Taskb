
// var menu = document.getElementById("menu");

// function toggleMenu() {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//     } else {
//         menu.classList.add('hidden');
//     }
// }



const tabs = document.querySelectorAll('[data-tab-target]')

const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})