const cardsArray = [
    {
        name: "Nike Air Max Intrlk 75",
        image: "sneakers_nike_1_img",
        description: "Кроссовки с технологией Max Air для амортизации, эластичными шнурками для удобства и устойчивой резиновой подошвой.",
        info: {
            price: "129",
            brand: "nike",
            type: "athleticShoes",
            gender: "male",
            color: "white",
        }
    },
    {
        name: "Puma Caven 2.0",
        image: "sneakers_puma_4_img",
        description: "Классические кеды с минималистичным дизайном. Подходят для повседневной носки.",
        info: {
            price: "109",
            brand: "puma",
            type: "sheackers",
            gender: "male",
        }
    },
    {
        name: "Adidas VL Court 2.0",
        image: "sneakers_adidas_4_img",
        description: "Универсальные кроссовки для тенниса и повседневной носки.",
        info: {
            price: "147",
            brand: "adidas",
            type: "sheackers",
            gender: "male",
        }
    },
    {
        name: "Nike Air Max Intrlk 75",
        image: "sneakers_nike_3_img",
        description: "Универсальная модель для повседневной носки с акцентом на комфорт и износостойкость.",
        info: {
            price: "129",
            brand: "nike",
            type: "athleticShoes",
            gender: "male",
            color: "black",
        }
    },
    {
        name: "Puma Flyer Runner",
        image: "sneakers_puma_2_img",
        description: "Беговые кроссовки с технологией амортизации.",
        info: {
            price: "177",
            brand: "puma",
            type: "runningShoes",
            gender: "male",
        }
    },
    {
        name: "Tennis shoes GameCourt 2.0",
        image: "sneakers_adidas_1_img",
        description: "Специализированная обувь для корта с усиленной стабильностью.",
        info: {
            price: "159",
            brand: "adidas",
            type: "athleticShoes",
            gender: "male",
        }
    },
    {
        name: "Nike Air Max Pre-Day",
        image: "sneakers_nike_2_img",
        description: "Женская модель с видимой Air-подушкой, вдохновленная ретро-дизайном.",
        info: {
            price: "169",
            brand: "nike",
            type: "athleticShoes",
            gender: "female",
        }
    },
    {
        name: "Puma 180",
        image: "sneakers_puma_3_img",
        description: "Модель для тренировок с поддержкой стопы.",
        info: {
            price: "149",
            brand: "puma",
            type: "sheackers",
            gender: "male",
        }
    },
    {
        name: "Adidas Lite Racer 3.0",
        image: "sneakers_adidas_2_img",
        description: "Легкие кроссовки для бега и тренировок.",
        info: {
            price: "139",
            brand: "adidas",
            type: "athleticShoes",
            gender: "male",
        }
    },
    {
        name: "Nike Air Max Pulse Roam",
        image: "sneakers_nike_1_img",
        description: "Уличные кроссовки с усиленной амортизацией Air Max.",
        info: {
            price: "129",
            brand: "nike",
            type: "athleticShoes",
            gender: "male",
        }
    },
    {
        name: "Puma Skyrocket Lite Running",
        image: "sneakers_puma_1_img",
        description: "Женские беговые кроссовки с облегченной подошвой.",
        info: {
            price: "169",
            brand: "puma",
            type: "runningShoes",
            gender: "female",
        }
    },
    {
        name: "Adidas Galaxy 5",
        image: "sneakers_adidas_3_img",
        description: "Женские беговые кроссовки с амортизацией.",
        info: {
            price: "179",
            brand: "adidas",
            type: "runningShoes",
            gender: "female",
        }
    },
    {
        name: "Puma X-Ray 2 Square",
        image: "sneakers_puma_5_img",
        description: "Женские беговые кроссовки с амортизацией и облегченной подошвой.",
        info: {
            price: "109",
            brand: "puma",
            type: "runningShoes",
            gender: "female",
        }
    },
    {
        name: "Adidas Originals Centennial 85 Lo WG",
        image: "sneakers_adidas_5_img",
        description: "Универсальные кроссовки для повседневной носки.",
        info: {
            price: "149",
            brand: "adidas",
            type: "sneakers",
            gender: "male",
        }
    }
]

function createElement () { 
 
    cardsArray.forEach((card, i) => {
         card.idProduct = `${i+1}`
         const cardJSON = JSON.stringify(card)
          
         document.querySelector('.sneakers-block__container').innerHTML +=
         `<div class="sneaker-card" data-info-card = '${cardJSON}'>
             <div class="sneaker-card__container">
     
                 <div class="image-sneaker">
                     <img src="media/sneakers/${card.image}.png" alt="sneaker">
                 </div>
     
                 <div class="name-sneaker">
                     <p>${card.name}</p>
                 </div>
     
                 <div class="price-sneaker">
                     <p>$${card.info.price}</p>
                 </div>
     
             </div>
         </div>`

     })   

     



    const scriptFilter = document.createElement('script');
    scriptFilter.id = 'filterWindowSneakerJS';
    scriptFilter.src = './scripts/filterSneakers.js';
    scriptFilter.type = 'module';
    document.body.append(scriptFilter);


    const scriptModal = document.createElement('script');
    scriptModal.id = 'modalWindowSneakerJS';
    scriptModal.src = './scripts/modalWindowSneaker.js';
    scriptModal.type = 'module';
    document.body.append(scriptModal);
    
}

createElement ()

export { cardsArray, createElement }