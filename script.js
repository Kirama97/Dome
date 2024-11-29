
import {data} from "./data.js"

import {templateHTML ,page_vide} from "./template.js"


// selection d'element

const productsContainer = document.querySelector('.produits');
// const cartNumber = document.querySelector('.nombre');


let produitAfficher = data  ;


const afficherProduits = (produits) => {
    produits.forEach((product) =>{
        const productHTML = document.createElement('div');
        productHTML.classList.add("carte-produit");
        productHTML.setAttribute("data-id" , product.id);
        productHTML.innerHTML = templateHTML(product)
        productsContainer.appendChild(productHTML);
    })
}

afficherProduits(produitAfficher) ;

// recherche


const input = document.querySelector(".recherche");

input.addEventListener('keyup' , () =>{

    const taper = input.value ;

    const resultat = data.filter( (element) => element.nom.includes(taper) )
    console.log(resultat)

   
     productsContainer.innerHTML = ""

    if(resultat.length > 0){
        afficherProduits(resultat)
    }else {
        const vide = document.createElement('div');
        vide.innerHTML = page_vide(taper)
        productsContainer.appendChild(vide);
    }
})



