function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p class='mensagem-nao-escrita'>Digitação não encontrada<p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre os dados e constrói o HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase() ;
        descricao = dado.descricao.toLowerCase() ;
        tags = dado.tags.toLowerCase();

        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
             // Cria um novo elemento div para cada resultado
             resultados += `
             <div class="item-resultado">
                 <h2> ${dado.titulo}</h2> 
                 <p class="descricao-meta">${dado.descricao}</p>
                 <p class="descricao-meta"> ${dado.jogadores}</p> 
                 <p>Plataforma <a href=${dado.plataforma} target="_blank">
                     <img src="img/steamlogo.jpg" alt="Imagem do jogo" class="imagem-link">
                 </a></p> 
             </div>
         `;

        }
       
    }

    
    if (!resultados) {
        resultados = "<p class='mensagem-nao-encontrado'>Nada foi encontrado<p>"

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}


