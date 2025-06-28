const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {
  
  console.log('clicou no botão filtrar');

  const categoriaSelecionada = document.querySelector('#categoria').value;

  const precoMaximoSelecionado = document.querySelector('#preco').value;

  const cartas = document.querySelectorAll('.carta');

  cartas.forEach(function (carta) {
    const categoriaCarta = carta.dataset.categoria;
    const precoDaCarta = carta.dataset.preco;

    let mostrarCarta = true;

    console.log('a categoria selecionada foi: ', categoriaSelecionada);
    

    const temFiltroDeCategoria = categoriaSelecionada !== '';

    const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarCarta = false;
    }

    else {
      mostrarCarta = true;
    }


    const temFiltroDePreco = precoMaximoSelecionado != "";
    const cartaBateComFiltroDeCategoria = parseFloat(precoDaCarta) > parseFloat(precoMaximoSelecionado);

    
    if(temFiltroDePreco && cartaBateComFiltroDeCategoria){
      mostrarCarta = false;
    }

    if (precoMaximoSelecionado !== '' & parseFloat(precoDaCarta) > parseFloat(precoMaximoSelecionado)){
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
