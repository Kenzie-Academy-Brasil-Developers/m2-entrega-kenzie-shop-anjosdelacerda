console.log('oi')


import {Menu} from './models.js'

Menu.montarMenu()



class app {


          static requisicao(){

              fetch('https://m2-kenzie-shop.herokuapp.com/products')
              .then(response => response.json())
              .then((data)=>{

                  data.products.forEach(post => {
                    const id      = post.id
                    const preco   = post.price
                    const nome    = post.productName
                    const promo   = post.promotionStatus
                    const estrela = post.reviews

                    this.template(id,preco,nome,promo,estrela)
                  });

              })

              

          }

          static template(id,preco,nome,promo,estrela){
            const urlimg = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${id}/Image.png`
            const divUp = document.createElement('div')
            divUp.classList.add('divUp')
            const divDown = document.createElement('div')
            divDown.classList.add('divDown')
            const li = document.createElement('li')
            li.classList.add('box')
            

            divUp.innerHTML = `
          <img alt="${nome}" id="${id}" class="imgBox" src="${urlimg}">`

          divDown.innerHTML = `
          <h2 class="nomeDoProduto">${nome}</h2>`
          if(estrela == 5){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            divDown.appendChild(ul)
          } else if (estrela == 4){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            divDown.appendChild(ul)
        
          } else if(estrela == 3){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            divDown.appendChild(ul)
        
          }else if(estrela == 2){
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">
            <img class="estrelaBox" src="img/estrela.png">`
            divDown.appendChild(ul)
          } else {
            const ul = document.createElement('ul')
            ul.classList.add('ulEstrela')
            ul.innerHTML = 
            `<img class="estrelaBox" src="img/estrela.png">`
            divDown.appendChild(ul)
        
          }
          
          if(promo === false){
            const precoNormal = document.createElement('p')
            precoNormal.innerHTML = 
            `<p class="preco"> por: ${preco.productPrice}</p>`
            const divPrice = document.createElement('p')
            divPrice.classList.add('divPrice')
            divPrice.appendChild(precoNormal)
            divDown.appendChild(divPrice)
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
            divDown.appendChild(divPrice)
           
          } 

          const buttonBox = document.createElement('span')
          buttonBox.innerHTML = `<button class="buttonBox id="${id}>Comprar</button>`
          divDown.appendChild(buttonBox)
         
          li.appendChild(divUp)
          li.appendChild(divDown)
          document.querySelector('.ulBox').appendChild(li)
            
          }
        
        }

        app.requisicao()