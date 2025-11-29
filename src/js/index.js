const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {

  console.log('clicou no botão filtrar');

  const categoriaSelecionada = document.querySelector('#categoria').value;
  const musicas = document.querySelectorAll('.musica');

  musicas.forEach(function (musica) {
    const categoriaMusica = musica.dataset.categoria;

    let mostrarMusica = true;

    console.log('a categoria selecionada foi: ', categoriaSelecionada);


    const temFiltroDeCategoria = categoriaSelecionada !== '';

    const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaMusica.toLowerCase();

    if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarMusica = false;
    }

    else {
      mostrarMusica = true;
    }


    if (mostrarMusica) {
      musica.classList.add('mostrar');
      musica.classList.remove('esconder');
    }

    else {
      musica.classList.remove('mostrar');
      musica.classList.add('esconder');
    }
  });
})
  
  const precoMaximoSelecionado = document.querySelector('#preco').value;
  const musicas = document.querySelectorAll('.musica');

  musicas.forEach(function (musica) {
    const categoriaMusica = musica.dataset.categoria;

    let mostrarMusica = true;

    console.log('a categoria selecionada foi: ', categoriaSelecionada);
    

    const temFiltroDeCategoria = categoriaSelecionada !== '';

    const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaMusica.toLowerCase();

    if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarMusica = false;
    }

    else {
      mostrarMusica = true;
    }
    

    if (mostrarMusica) {
      musica.classList.add('mostrar');
      musica.classList.remove('esconder');
    }

    else{
      musica.classList.remove('mostrar');
      musica.classList.add('esconder');
    }
  });
