const params = new URLSearchParams(location.search);
let local = document.getElementById('divDetalheFilme');
local.innerHTML = "Código do filme: " + params.get('id'); 
let filmeSelecionado = params.get('id');

const mostraFilme = (data) => {
    let filmesDados = JSON.parse(data.target.response)
    let filme = filmesDados.results;

    let filmesHTML = `
         <div class="filmes filmes_medios col-md-12 col-lg-6 mt-2 col-xxl-3">
              <a href="detalhes_filme.html?id=${filme.id}" class="mouse"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.original_title}" id="fila1" class="cover  none border border-dark border-5 cursor"></a>
        </div>
    `;

    local.innerHTML = filmesHTML;
}

const mostraErro = () => {
    alert ('Erro na requisição');
}

onload = () => {
    const MOVIEDB = `https://api.themoviedb.org/3/movie/${filmeSelecionado}?api_key=8465ea428c1792ccff3732bec34a2221&language=pt-br`
    let dadosfil = JSON.parse(MOVIEDB);
    console.log(MOVIEDB)
    filmeImg(dadosfil.poster_path);
}

function filmeImg(data){
    const img = document.querySelector('.imagem');
    const imgApi = data.poster_path;
    img.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="filme ${data.title}">`
}