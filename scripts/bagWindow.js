
import { addModelArray } from "./modalWindowSneaker.js"

let iBag = 0
let iFav = 0

let amount = 0


// --- card list --- //
function addToBag () {

    iBag++
    amount += Number(addModelArray.modelJSONparse.info.price)

    document.querySelector('.list-model').innerHTML += `

                        <div class="bag-cards">
                            <div class="bag-cards__num">${iBag}</div>

                            <div class="bag-cards__model">
                                <div class="info-block">
                                    <img src="media/sneakers/${addModelArray.modelJSONparse.image}.png" alt="sneaker">
                                    
                                    <div class="model-info">
                                        <div class="model-info__name">
                                            <p>${addModelArray.modelJSONparse.name}</p>
                                            <p>Size: ${addModelArray.size}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="price">$ ${addModelArray.modelJSONparse.info.price}</div>
                            </div>
                        </div>

    `

    document.querySelector('.list-texts').innerHTML += `

                        <li>
                            <p>${addModelArray.modelJSONparse.name}</p>
                            <div></div>
                            <p class>$ ${addModelArray.modelJSONparse.info.price}</p>
                        </li>
    `

    document.querySelector('#amount').textContent = `$ ${amount}`


}



const favoriteArray = []

// --- favorite list --- //
function addToFavorite (e) {
    // console.log(e.target.lastElementChild);
    let favTF = false
    let x = 0
    
    favoriteArray.forEach(likeID => {
        if (likeID === addModelArray.modelJSONparse.idProduct) {
            x++
        }
    })

    if (x === 0) {
        favoriteArray.push(addModelArray.modelJSONparse.idProduct)
        favTF = true
    } else {
        return
    }
    

    iFav++
    amount += Number(addModelArray.modelJSONparse.info.price)

    document.querySelector('.favorite-list-model').innerHTML += `

                        <div class="bag-cards" data-favorite-model-id="${addModelArray.modelJSONparse.idProduct}">
                            <div class="bag-cards__num">${iFav}</div>

                            <div class="bag-cards__model">
                                <div class="info-block">
                                    <img src="media/sneakers/${addModelArray.modelJSONparse.image}.png" alt="sneaker">
                                    
                                    <div class="model-info">
                                        <div class="model-info__name">
                                            <p>${addModelArray.modelJSONparse.name}</p>
                                            <p>Size: ${addModelArray.size}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="price">$ ${addModelArray.modelJSONparse.info.price}</div>
                            </div>
                        </div>

    `

    if (e.target.hasAttribute("fill") && e.target.hasAttribute("stroke")) {
        e.target.setAttribute("fill", "red")
        e.target.setAttribute("stroke", "red")
    } else {
        e.target.lastElementChild.setAttribute("fill", "red")
        e.target.lastElementChild.setAttribute("stroke", "red")      
    }

    console.log(favoriteArray);
    
}


export { addToBag, addToFavorite, favoriteArray }