/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
        baseados nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS

const botaoFiltrar = document.querySelector('.btn-filtrar'); // Criei uma variável para buscar no HTML e no CSS

// passo 2 - escutar o clique no botão de aplicar os filtros

botaoFiltrar.addEventListener('click', function () {

  console.log('Você clicou no botão filtrar.'); // Para a aparecer no Inspensionamento do site

  // passo 3 - pegar os valores dos campos de categoria e preço

  const categoriaSelecionada = document.querySelector('#categoria').value; // Criei uma variável para buscar no HTML e no CSS
  const precoMaximoSelecionado = document.querySelector('#preco').value; // Criei uma variável para buscar no HTML e no CSS

  // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
  
  const cartas = document.querySelectorAll('.carta'); // Criei uma variável para buscar no HTML e no CSS

  cartas.forEach(function (carta) {
    
    const categoriaCarta = carta.dataset.categoria; // Criei uma variável que contém (data-...) no HTML
    const precoDaCarta = carta.dataset.preco; // Criei uma variável que contém (data-...) no HTML

    let mostrarCarta = true; // Criei uma variável que pode ser modificada

    console.log('a categoria selecionada foi: ', categoriaSelecionada); // Para a aparecer no Inspensionamento o site
    
    const temFiltroDeCategoria = categoriaSelecionada !== '';  // Criei uma variável que tem um significativo

    const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase(); // Criei uma variável para colocar todas as letras das categorias minúsculas

    if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarCarta = false;
    }

    else {
      mostrarCarta = true // não precisa, a menos que você seja detalhista kkkk
    }

    const temFiltroDePreco = precoMaximoSelecionado != ''; // Criei uma variável que tem um significativo

    const cartaBateComFiltroDeCategoria = parseFloat(precoDaCarta) > parseFloat(precoMaximoSelecionado); // Criei uma variável que tem um significativo

    if(temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria){
      mostrarCarta = false;
    }

    if (precoMaximoSelecionado !== '' && cartaBateComFiltroDeCategoria){
      mostrarCarta = false;
    }

    if (mostrarCarta) {
      carta.classList.add('mostrar');
      carta.classList.remove('esconder');
    }

    else{
      carta.classList.remove('mostrar');
      carta.classList.add('esconder');
    }
  });
})
