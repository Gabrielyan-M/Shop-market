import { form, submitFormBtn } from "./elemetsName.js";
import { cardsArray, createElement } from "./sneakersCards.js";

const priceCards = cardsArray.map(card => {
    return card.info.price
})
const maxPriceCard = Math.max.apply(null, priceCards)
const minPriceCard = Math.min.apply(null, priceCards)

const formBrandsArray = form.elements.brand
const formTypesArray = form.elements.type
const formGendersArray = form.elements.gender
const formPriceArray = form.elements.price

const formElements = [formBrandsArray, formTypesArray, formGendersArray, formPriceArray]


function filterSneakers () {

    const filterParameters = {
        brand: [],
        type: [],
        gender: [],
        minPrice: '',
        maxPrice: '',
    }
    
    formElements.forEach(elem => {
        elem.forEach(e => {          

            if (e.checked) {
                e.name === 'brand'
                ? filterParameters.brand.push(e.value) : true
                e.name === 'type'
                ? filterParameters.type.push(e.value) : true
                e.name === 'gender'
                ? filterParameters.gender.push(e.value) : true   
            }


            e.id === 'min' 
            ? filterParameters.minPrice = Number(e.value) 
            : filterParameters.maxPrice = Number(e.value)

        })      
    })

  
    filterParameters.minPrice === 0 ? filterParameters.minPrice = minPriceCard : true
    filterParameters.maxPrice === 0 ? filterParameters.maxPrice = maxPriceCard : true
    
    const filteredCards = cardsArray.filter(card => {
        const brandCheck = filterParameters.brand.length > 0 ? filterParameters.brand.includes(card.info.brand)  : true
        const typeCheck = filterParameters.type.length > 0 ? filterParameters.type.includes(card.info.type) : true
        const genderCheck = filterParameters.gender.length > 0 ? filterParameters.gender.includes(card.info.gender) : true
        const priceFilter  = card.info.price >= Number(filterParameters.minPrice) && card.info.price <= Number(filterParameters.maxPrice)
        
        return brandCheck && typeCheck && genderCheck && priceFilter
    })


    const filteredCardsID = filteredCards.map(filterCard => filterCard.idProduct)

    // let productVisible = []


    document.querySelectorAll('.sneaker-card').forEach(sneakerCard => {

        const JSONidProduct = JSON.parse(sneakerCard.getAttribute('data-info-card')).idProduct

        if (sneakerCard.classList.contains('sneaker-card-off')) {
            sneakerCard.classList.remove('sneaker-card-off')
        }


        if (!filteredCardsID.includes(JSONidProduct)) {
            sneakerCard.classList.add('sneaker-card-off')
        }

        // console.log(JSONidProduct);
        



    })





    

    // document.querySelector('.sneakers-block__container').innerHTML = ''
    // createElement (filteredCards)
    
    !(filteredCards.length)
    ? document.querySelector('.sneakers-block__container').innerHTML = `
            <p style='padding-top: 30px;'>Nothing was found.</p>`
    : true
}

submitFormBtn.addEventListener('click', (event) => {
    
    filterSneakers ()
    event.preventDefault()
    
})

export { filterSneakers }