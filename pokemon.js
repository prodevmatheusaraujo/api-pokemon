fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados);

    const nome = document.querySelector("#pokemon-nome");
    const id = document.querySelector("#pokemon-id");
    const altura = document.querySelector("#pokemon-altura");
    const peso = document.querySelector("#pokemon-peso");
    const imagem = document.querySelector("#pokemon-imagem");

    nome.textContent = dados.name.charAt(0).toUpperCase() + dados.name.slice(1);

    // 2. Inserir o ID
    id.textContent = "ID: " + dados.id;

    // 3. Inserir a altura (a API retorna em decímetros)
    altura.textContent = dados.height;

    // 4. Inserir o peso (a API retorna em hectogramas)
    peso.textContent = dados.weight;

    // 5. Inserir a imagem oficial do Pokémon
    imagem.src = dados.sprites.other["official-artwork"].front_default;
    imagem.alt = "Imagem do " + dados.name;
  })
  .catch(erro => {
    console.log("Erro ao consultar Pokémon:", erro);
  });
