const Menu = class Menu {
  
  static montarMenu(){

    const divMenu = document.createElement('div')
    divMenu.classList.add('divMenu')

    const ulMenu = document.createElement('ul')
    ulMenu.classList.add('ulMenu')

    const nomeLoja = document.createElement('li')
    nomeLoja.classList.add('nomeLoja')

    const sobreNos = document.createElement('li')
    sobreNos.classList.add('liComum')

    const produtos = document.createElement('li')
    produtos.classList.add('liComum')

    const input = document.createElement('div')
    input.classList.add('inputPesquisa')

    nomeLoja.innerText = 'Kenzie Shop!'
    sobreNos.innerText = 'Sobre Nós'
    produtos.innerText = 'produtos'
    input.innerHtml    = `<input type="text" placeholder = "Nome do produto" class="inputPesquisa">`

    ulMenu.appendChild(nomeLoja) 
    ulMenu.appendChild(sobreNos)
    ulMenu.appendChild(produtos)
    ulMenu.appendChild(input)
    divMenu.appendChild(ulMenu)
    document.querySelector('.topo').appendChild(divMenu)

  }
}

export {Menu}