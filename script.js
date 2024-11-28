
import {data} from "./data.js"

import {templateHTML} from "./template.js"


// selection d'element

const productsContainer = document.querySelector('.produits');
const cartNumber = document.querySelector('.nombre');


let produitAfficher = data  ;


const afficherProduits = (produits) => {
    produits.forEach((product) =>{
        const productHTML = document.createElement('div');
        productHTML.classList.add("carte-produit");
        productHTML.setAttribute("data-id" , product.id);
        productHTML.innerHTML = templateHTML(product);
        productsContainer.appendChild(productHTML);
    })
}

afficherProduits(produitAfficher) ;