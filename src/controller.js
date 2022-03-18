

const Controller = class Controller {
    static star(estrela){
        const liAdd = document.createElement('li')
        if(estrela == 5){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            liAdd.appendChild(ul)
            liAdd.classList.add('liAdd')
          } else if (estrela == 4){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            liAdd.appendChild(ul)
            liAdd.classList.add('liAdd')
        
          } else if(estrela == 3){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            liAdd.appendChild(ul)
            liAdd.classList.add('liAdd')
        
          }else if(estrela == 2){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            liAdd.appendChild(ul)
            liAdd.classList.add('liAdd')
          } else {
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">`
            liAdd.appendChild(ul)
            liAdd.classList.add('liAdd')
        
          }

         
          document.querySelector('.divTemp').appendChild(liAdd)

    }

    static price(preco,promo){
        if(promo === false){
            const precoNormal = document.createElement('p')
            precoNormal.innerHTML = 
            `<p class="preco"> por: ${preco.productPrice}</p>`
            const divPrice = document.createElement('p')
            divPrice.classList.add('divPrice')
            divPrice.appendChild(precoNormal)
            document.querySelector('.precoTemp').appendChild(divPrice)
          } else{
            const precoNormal = document.createElement('p')
            precoNormal.classList.add('precoCoberto')
            precoNormal.innerHTML = 
            `<p class="preco" id="precoCoberto"> de: ${preco.productPrice}</p>`
            const precoPromo = document.createElement('p')
            precoPromo.innerHTML = 
            `<p class="preco" id="precoDesconto"> por: ${preco.productPromotionPrice} </p>`
            const divPrice = document.createElement('p')
            divPrice.classList.add('divPrice')
            divPrice.appendChild(precoNormal)
            divPrice.appendChild(precoPromo)
            document.querySelector('.precoTemp').appendChild(divPrice)
           
          } 
    }
}

export {Controller}