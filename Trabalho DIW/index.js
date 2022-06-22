const botao_geral = document.querySelector('.dot-active')

const botao_owl1 = document.querySelector ('.dot_1')
const filme_1 = document.querySelector('.filme-1')

const botao_owl2 = document.querySelector ('.dot_2')
const filme_2 = document.querySelector('.filme-2')

const botao_owl3 = document.querySelector ('.dot_3')
const filme_3 = document.querySelector('.filme-3')

const botao_owl4 = document.querySelector ('.dot_4')
const filme_4 = document.querySelector('.filme-4')

const texto_1 = document.querySelector('.texto1')
const texto_2 = document.querySelector('.texto2')
const texto_3 = document.querySelector('.texto3')
const texto_4 = document.querySelector('.texto4')



botao_owl1.addEventListener('click',()=>{
    remove2()
    botao_owl1.classList.add('dot-actives')
    adicionar()
    texto_1.classList.remove('none')
    adicionar2()
    filme_1.classList.remove('none')
    remove()
    filme_1.classList.add('active')
})

botao_owl2.addEventListener('click',()=>{
    remove2()
    botao_owl2.classList.add('dot-active')
    adicionar()
    texto_2.classList.remove('none')
    adicionar2()
    filme_2.classList.remove('none')
    remove()
    filme_2.classList.add('active')
})

botao_owl3.addEventListener('click',()=>{
    remove2()
    botao_owl3.classList.add('dot-active')
    adicionar()
    texto_3.classList.remove('none')
    adicionar2()
    filme_3.classList.remove('none')
    remove()
    filme_3.classList.add('active')
})

botao_owl4.addEventListener('click',()=>{
    remove2()
    botao_owl4.classList.add('dot-active')
    adicionar()
    texto_4.classList.remove('none')
    adicionar2()
    filme_4.classList.remove('none')
    remove()
    filme_4.classList.add('active')
})

function remove(){
    filme_1.classList.remove('active')
    filme_2.classList.remove('active')
    filme_3.classList.remove('active')
    filme_4.classList.remove('active')
}

function remove2(){
    botao_owl1.classList.remove('dot-active')
    botao_owl2.classList.remove('dot-active')
    botao_owl3.classList.remove('dot-active')
    botao_owl4.classList.remove('dot-active')
}

function adicionar(){
    texto_1.classList.add('none')
    texto_2.classList.add('none')
    texto_3.classList.add('none')
    texto_4.classList.add('none')
}

function adicionar2(){
    filme_1.classList.add('none')
    filme_2.classList.add('none')
    filme_3.classList.add('none')
    filme_4.classList.add('none')
}