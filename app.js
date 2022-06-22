const dadosFilmes = {
    "results": [
    {
        "backdrop_path": "/kmCBLNHsNnlDEtghSaF2nabpG2T.jpg",
        "genre_ids": [
        28,
        878,
        14
        ],
        "id": 526896,
        "original_language": "en",
        "original_title": "Morbius",
        "overview": "O bioquímico Michael Morbius tenta curar-se de uma rara doença sanguínea com ADN de morcegos, mas acaba por se tornar uma espécie de vampiro vivo. As aventuras de um anti-herói da Marvel.",
        "popularity": 2972.127,
        "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
        "release_date": "2022-03-30",
        "title": "Morbius",
        "video": false,
        "vote_average": 6.4,
     },
     {
        "backdrop_path": "/5v9p91GRTQ5rg0sQXhDPpqqBwUZ.jpg",
        "genre_ids": [
            35
        ],
        "id": 430128,
        "original_language": "pt",
        "original_title": "Internet - O Filme",
        "overview": "",
        "popularity": 4.167,
        "poster_path": "/7kyQPkPj6YDYzX4oMymtoiTzLx2.jpg",
        "release_date": "2017-02-23",
        "title": "Internet - O Filme",
        "video": false,
        "vote_average": 3.8,
     }
     ]
}

const listaGeneros = {
    "genres": [
        {
          "id": 28,
          "name": "Ação"
        },
        {
          "id": 12,
          "name": "Aventura"
        },
        {
          "id": 16,
          "name": "Animação"
        },
        {
          "id": 35,
          "name": "Comédia"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentário"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Família"
        },
        {
          "id": 14,
          "name": "Fantasia"
        },
        {
          "id": 36,
          "name": "História"
        },
        {
          "id": 27,
          "name": "Terror"
        },
        {
          "id": 10402,
          "name": "Música"
        },
        {
          "id": 9648,
          "name": "Mistério"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Ficção científica"
        },
        {
          "id": 10770,
          "name": "Cinema TV"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "Guerra"
        },
        {
          "id": 37,
          "name": "Faroeste"
        }
    ]
};

function selecionaGeneros() {
    let generosHTML = '';

    for(let i = 0; i < listaGeneros.genres.length; i++){
        let genero = listaGeneros.genres[i];
        generosHTML+= `
            <option value="${genero.id}">${genero.name}</option>
        `;
    }
    document.getElementById('categorias').innerHTML = generosHTML;
}

const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)

    let dadosHTML =  '';

    for(let i = 0 ; i < dadosFilmes.results.length; i++){ 
        let filme = dadosFilmes.results[i];
        if(i > 3){
            dadosHTML +=`
        <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
            <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" id="fila1" class="cover  none border border-dark border-5 cursor"></a>
        </div>
        `
        }

        else if(i > 7){
            dadosHTML +=`
        <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
            <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" id="fila2" class="cover  none border border-dark border-5 cursor"></a>
        </div>
        `
        }

        else if(i > 11){
            dadosHTML +=`
        <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
            <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" id="fila3" class="cover  none border border-dark border-5 cursor"></a>
        </div>
        `
        }

        else if(i > 15){
            dadosHTML +=`
        <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
            <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" id="fila4" class="cover  none border border-dark border-5 cursor"></a>
        </div>
        `
        }

        else{
            dadosHTML +=`
        <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
            <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" class="cover border border-dark border-5 cursor"></a>
        </div>
        `
        }
    }
    document.getElementById('filmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert ('Erro na requisição');
}

const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=8465ea428c1792ccff3732bec34a2221&language=pt-br"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send();

    selecionaGeneros();
}
document.body.onload = init


const form = document.querySelector('.formbox')
const pesquisa = form.querySelector('#formpesquisa');
const pesquisaBtn = form.querySelector('#pesquisas')

form.onsubmit = (e) => {
   e.preventDefault();
   let url = `pesquisa.html?search=${pesquisa.value}`
   window.location.href = url;
}