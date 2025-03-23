
import { addToBag, addToFavorite, favoriteArray } from "./bagWindow.js"
import {  cardsArray } from "./sneakersCards.js"

cardsArray.forEach(cardObject => {

    const modalBlock = document.createElement('div')
    modalBlock.classList.add('info-sneakers-block')
    modalBlock.dataset.infoModal = JSON.stringify(cardObject)
    document.querySelector('.modals-block').append(modalBlock)
    
    const infoSneakersBlock__container = document.createElement('div')
    infoSneakersBlock__container.classList.add('info-sneakers-block__container')
    document.querySelector('.info-sneakers-block').append(infoSneakersBlock__container)

    document.querySelector('.modals-block').innerHTML += 
    `<div class="info-sneakers-block" data-info-modal = '${JSON.stringify(cardObject)}'>
        <div class="info-sneakers-block__container">
            <div class="modal-sneaker-card">
                <div class="modal-sneaker-card__container">
    
                        <div class="preview-image-block">
                            <div class="preview-image-block__container">
                                <div class="image-block">
                                    <img src="media/sneakers/${cardObject.image}.png" alt="">
                                </div>
                                <div class="image-block" style="filter: brightness(0.8);">
                                    <img src="media/sneakers/${cardObject.image}.png" alt="">
                                </div>
                                <div class="image-block" style="filter: brightness(0.6);">
                                    <img src="media/sneakers/${cardObject.image}.png" alt="">
                                </div>
                                <div class="image-block" style="filter: brightness(0.4);">
                                    <img src="media/sneakers/${cardObject.image}.png" alt="">
                                </div>
                                <div class="image-block" style="filter: brightness(0.2);">
                                    <img src="media/sneakers/${cardObject.image}.png" alt="">
                                </div>
                            </div>
                        </div>
    
                        <div class="viewed-image-block">
                            <img class="viewed-image" src="media/sneakers/${cardObject.image}.png" alt="sneaker">
                        </div>
    
                        <div class="info-model-sneaker-block">
                            <div class="info-text">
                                <h1>${cardObject.name}</h1>
    
                                <p>${cardObject.description}</p>
                            </div>
    
                            <div class="add-to-bag-block">
                                <div class="sizes-block">
                                    <p>Size</p>
    
                                    <div class="sizes-block__container" data-sizes-block="${cardObject.idProduct} data-size-active="">
                                        <button class="size-button" data-sneaker-size="38">38</button>
                                        <button class="size-button" data-sneaker-size="39">39</button>
                                        <button class="size-button" data-sneaker-size="40">40</button>
                                        <button class="size-button" data-sneaker-size="41">41</button>
                                        <button class="size-button" data-sneaker-size="42">42</button>
                                        <button class="size-button" data-sneaker-size="43">43</button>
                                        <button class="size-button" data-sneaker-size="44">44</button>
                                        <button class="size-button" data-sneaker-size="45">45</button>
                                    </div>
                                </div>
    
                                <div class="bag-buttons">
                                    <button class="bag-button">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_67_190)">
                                                <path d="M29.4 36.25H10.65C9.60687 36.2498 8.57756 36.0113 7.64059 35.5529C6.70361 35.0944 5.88373 34.4279 5.24348 33.6044C4.60322 32.7809 4.1595 31.822 3.94617 30.8009C3.73284 29.7798 3.75553 28.7235 4.0125 27.7125L7.8125 12.2C7.88094 11.9227 8.04231 11.6771 8.26975 11.5043C8.49718 11.3314 8.77696 11.2417 9.0625 11.25H30C30.2757 11.2374 30.5479 11.3164 30.774 11.4747C31.0001 11.6329 31.1675 11.8616 31.25 12.125L35.975 27.325C36.298 28.3574 36.3724 29.4515 36.1921 30.5181C36.0118 31.5848 35.5819 32.5937 34.9375 33.4625C34.3036 34.335 33.4703 35.0433 32.507 35.5282C31.5437 36.0131 30.4784 36.2606 29.4 36.25ZM10 13.75L6.3875 28.3125C6.22663 28.955 6.21374 29.6256 6.3498 30.2738C6.48586 30.922 6.76732 31.5309 7.17295 32.0545C7.57858 32.5781 8.0978 33.0027 8.69145 33.2964C9.2851 33.5901 9.93769 33.7452 10.6 33.75H29.35C30.0303 33.7511 30.7011 33.5908 31.3074 33.2822C31.9136 32.9736 32.438 32.5256 32.8375 31.975C33.2485 31.4212 33.5227 30.7781 33.6378 30.0982C33.753 29.4182 33.7057 28.7207 33.5 28.0625L29.1 13.75H10Z" fill="white  "/>
                                                <path d="M25 21.25C24.6685 21.25 24.3505 21.1183 24.1161 20.8839C23.8817 20.6495 23.75 20.3315 23.75 20V10C23.75 9.00544 23.3549 8.05161 22.6517 7.34835C21.9484 6.64509 20.9946 6.25 20 6.25C19.0054 6.25 18.0516 6.64509 17.3483 7.34835C16.6451 8.05161 16.25 9.00544 16.25 10V20C16.25 20.3315 16.1183 20.6495 15.8839 20.8839C15.6495 21.1183 15.3315 21.25 15 21.25C14.6685 21.25 14.3505 21.1183 14.1161 20.8839C13.8817 20.6495 13.75 20.3315 13.75 20V10C13.75 8.3424 14.4085 6.75269 15.5806 5.58058C16.7527 4.40848 18.3424 3.75 20 3.75C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10V20C26.25 20.3315 26.1183 20.6495 25.8839 20.8839C25.6495 21.1183 25.3315 21.25 25 21.25Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_67_190">
                                                    <rect width="40" height="40" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Add to Bag</p>
                                    </button>
    
                                    <button class="favorite-button">
                                        <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="favorite-svg-path" d="M27.5 6C24.3753 6 22.0109 7.81897 20 9.71973C18.0838 7.70271 15.6247 6 12.5 6C8.09936 6 5 9.75318 5 13.8458C5 16.0414 5.90657 17.6232 6.89936 19.1083L18.5553 32.9699C19.8641 34.3434 20.1106 34.3434 21.4194 32.9699L33.1015 19.1083C34.2687 17.6232 35 16.0414 35 13.8458C35 9.75323 31.9006 6 27.5 6ZM31.25 18.7234L20 32.0381L8.75 18.6685C7.40471 16.8133 6.875 15.5616 6.875 13.8458C6.875 10.6487 9.17657 7.77059 12.5 7.7436C15.2338 7.72128 18.3322 10.4906 20 12.5783C21.6238 10.5632 24.7662 7.7436 27.5 7.7436C30.7353 7.7436 33.125 10.6487 33.125 13.8458C33.125 15.5616 32.7059 16.9062 31.25 18.7234Z" 
                                            fill="black" stroke="black"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
    
    
                </div>
    
                <p class="modal-button-back">BACK</p>
            </div>
        </div> 
    </div>
    `
})


const sneakersCards = document.querySelectorAll('.sneaker-card')
const sneakersModals = document.querySelectorAll('.info-sneakers-block')
const modalButtonsBack = document.querySelectorAll('.modal-button-back')

sneakersCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const infoCardJSONParse = JSON.parse(card.getAttribute('data-info-card'))
        
        sneakersModals.forEach(modal => {
            const infoModalJSONParse = JSON.parse(modal.getAttribute('data-info-modal'))

            if (infoModalJSONParse.idProduct === infoCardJSONParse.idProduct) {
                modal.classList.toggle('modal-visible')
            }

        })

    })
})



// image pointer

document.querySelectorAll('.image-block').forEach(image => {
    
    image.addEventListener('pointerenter', () => {
        document.querySelectorAll('.viewed-image').forEach(viewImg => {
            viewImg.attributes.style = null
        })
        document.querySelectorAll('.viewed-image').forEach(viewImg => {
            viewImg.setAttribute('style', image.getAttribute('style'))
        })
        
    })
})



// size Add

// information OBJECT for saving the model
export const addModelArray = {
    modelJSONparse: null,
    size: null,
}

const sizeButtons = document.querySelectorAll('.size-button')

document.querySelectorAll('.info-sneakers-block').forEach(modal => {
    modal.addEventListener('click', (eModal) => {
      
        const JSONParse = JSON.parse(modal.getAttribute('data-info-modal'))

        addModelArray.modelJSONparse = JSONParse
        addModelArray.size = eModal.target.getAttribute('data-sneaker-size')


        document.querySelectorAll('[data-sneaker-size]').forEach(sizeBtn => {
                if (sizeBtn.getAttribute('data-sneaker-size') === addModelArray.size) {
                    sizeBtn.style.background = 'black'
                    sizeBtn.style.color = 'white'
                } else {
                    sizeBtn.style.background = 'white'
                    sizeBtn.style.color = 'black'
                }
            })

        eModal.stopPropagation()
    })
})



// btn Add











function backModalButton () {
    sneakersModals.forEach(modal => {
        if (modal.classList.contains('modal-visible')) {
            modal.classList.toggle('modal-visible')
        }

    })
    
    // viewed image back
    document.querySelectorAll('.viewed-image').forEach(viewImg => {
        viewImg.setAttribute('style', null)
    })

    // add size back
    addModelArray.modelJSONparse = null
    addModelArray.size = null

    document.querySelectorAll('[data-sneaker-size]').forEach(sizeBtn => {
        sizeBtn.style.background = 'white'
        sizeBtn.style.color = 'black'
    })
}

document.querySelectorAll('.bag-button').forEach(bagBtn => {
    bagBtn.addEventListener('click', (e) => {

        addModelArray.modelJSONparse === null || addModelArray.size === null
        ? alert('Please choose the size')
        : addToBag (), backModalButton ()





        
        e.stopPropagation()
    })

    
})

document.querySelectorAll('.favorite-button').forEach(favBtn => {
    favBtn.addEventListener('click', (e) => {


            addModelArray.modelJSONparse === null || addModelArray.size === null
            ? alert('Please choose the size')
            : addToFavorite (e)



        e.stopPropagation()
    })

    
})



modalButtonsBack.forEach(btn => {
    btn.addEventListener('click', (e) => {
        backModalButton ()

        e.stopPropagation()
    })
})



