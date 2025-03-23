import { 
    body,
    btnBurgers,
    menuBurgers,
    headerBlocks,
    linkBlocks,
} from "./elemetsName.js";


function openBurgerMenu () {

    menuBurgers.forEach(menuBurger => {
        menuBurger.getAttribute('data-burger-menu') === 'close'
        ?menuBurger.setAttribute('data-burger-menu', 'open')
        :menuBurger.setAttribute('data-burger-menu', 'close')
    })

    if (body.getAttribute('data-body-name') === 'welcome') {
        headerBlocks.forEach(headerBlock => headerBlock.classList.toggle('menu-is-open'))

        linkBlocks[0].classList.toggle('menu-is-open')
        linkBlocks[1].classList.toggle('menu-is-open')
    }


    menuBurgers.forEach(menuBurger => menuBurger.classList.toggle('menu-is-open'))
    btnBurgers.forEach(btnBurger => btnBurger.classList.toggle('menu-is-open'))


}


btnBurgers.forEach(btnBurger => {
    btnBurger.addEventListener('click', () => {
        document.querySelector('.shop-section').classList.toggle('no-scroll')

        
        openBurgerMenu ()
    })
})




/// Filter button

document.querySelector('.open-filter').addEventListener('click', () => {
    document.querySelector('.form-settings').classList.toggle('active-filter')
    
})

export { openBurgerMenu }