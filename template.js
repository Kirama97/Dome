

export const templateHTML = (product) => {

  return `

   <div class="img">
              <img src='${product.img}' alt="" />
              <div class="icons">
                <div class="first">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-cart-flatbed-suitcase"></i>
                </div>
                <div class="last">
                  <i class="fa-solid fa-star"></i>
                  <p>4.5</p>
                </div>
              </div>
            </div>
            <div class="text">
              <p class="nom">${product.categorie}</p>
              <h3>${product.nom}</h3>
            </div>
  
            <div class="footer">
              <div class="prix">
                <p class="prix-actuel">$ ${product.prix}</p>
              </div>
              <div class="color">
                <div class="item-color"></div>
                <div class="item-color"></div>
                <div class="item-color"></div>
              </div>
            </div>
  `
  
}


export const page_vide = (taper) =>{

 return `
     <div class="page_vide">
       
        <h3> <span>${taper}</span> est introuvable </h3>
        <img src="/assets/404.svg" alt="" srcset="">
     </div>
  `
}