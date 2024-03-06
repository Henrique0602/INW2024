const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click',()=>{
    //pega o valor do input
    const campoUsuario = document.querySelector("#filmeInput").value
    //cria  um novo li
    const itemLista = document.createElement('li')
    //adiciona o item a lista
    listaFilmes.append(itemLista)
    itemLista.innerHTML = campoUsuario
    //mudar o estilo
    itemLista.style.background = 'red'
    //adicionar uma classe
    itemLista.classList.add('ativo')
    //liga/desliga uma classe
    itemLista.classList.toggle('ativo')
})

//window.onload  - quando a página carregar, faça ....