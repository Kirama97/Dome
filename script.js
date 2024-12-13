
import {data} from "./data.js"

import {templateHTML ,page_vide , generateDialogHTML} from "./template.js"


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

input.addEventListener('keyup' , (e) =>{

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



// Action pour afficher un produit

let elementEnCour  = null ; 

const afficheUnProduit = () => {

  const cartes = document.querySelectorAll(".carte-produit"); 

  cartes.forEach((carte) => {
        
    carte.addEventListener('click' , () => {
       

        const dialog = document.querySelector('dialog');
        const dialogContenu = document.querySelector('.dialog-menu');

          // Vérifie si le dialogue contient déjà une section pour éviter les doublons
        const section = dialogContenu || document.createElement("section");

        if (!dialogContenu) {
            section.classList.add("dialog-menu");
            dialog.appendChild(section);
          }

        //  verifier la correspondance

        elementEnCour = data.filter( (i) => i.id == carte.dataset.id)[0];

        if (elementEnCour) {
            // Affiche la boîte de dialogue et met à jour son contenu
            dialog.showModal();
            dialog.scrollTo(0, 0);
            section.innerHTML = generateDialogHTML(elementEnCour);
          } else {
            console.error("Aucun élément correspondant trouvé dans les données.");
          }

        console.log(section)
        

    })


  })



}


afficheUnProduit()
