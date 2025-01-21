let amigos = []; // Array para armazenar os nomes dos amigos

function adicionar() {
  // Obtém os elementos HTML para o input do nome e a lista de amigos
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");

  // Valida se o nome do amigo foi informado
  if (amigo.value.trim() === "") {
    alert("Informe o nome do amigo");
    return;
  }

  // Verifica se o nome já existe na lista
  if (amigos.includes(amigo.value)) {
    alert("Nome já adicionado");
    return;
  }

  // Adiciona o nome à lista de amigos
  amigos.push(amigo.value);

  // Atualiza a lista na tela e o sorteio
  atualizarLista();
  atualizarSorteio();

  // Limpa o campo de entrada
  amigo.value = "";
}

function sortear () {
    // Verifica se há pelo menos 3 amigos para realizar o sorteio
    if (amigos.length < 3){
        alert("Adicione pelo menos 3 amigos");
        return;
    }

    // Embaralha a lista de amigos e atualiza a lista de sorteio
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }   
}

function reiniciar (){
    // Limpa os dados previamente salvos 
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML ="";
    document.getElementById("lista-amigos").innerHTML = "";
}

function embaralha(lista) {
    // reorganiza a lista de nomes de maneira pseudo aleatória
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    // Limpa a lista de amigos na tela
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(index) {
    // Remove o amigo da lista e atualiza as listas na tela
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}