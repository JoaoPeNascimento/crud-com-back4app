// Configuração do Back4App
const APP_ID = "SUA KEY";
const REST_KEY = "SUA KEY";

//Editando Dados 
document.getElementById("editarVendas").addEventListener("submit", e => {
    e.preventDefault();
    console.log("entrou")

    const objectId = document.getElementById('idEditar').value
    const nome = document.getElementById('produtoEditado').value
    const preco = document.getElementById('precoEditado').value
    const categoria = document.getElementById('categoriaEditado').value

    const dadosAtualizados = {
        nome: nome,
        preco: parseInt(preco),
        categoria: categoria
    };
    

    fetch(`https://parseapi.back4app.com/parse/classes/Vendas/${objectId}`, {
        method: 'PUT',
        headers: {
            'X-Parse-Application-Id': APP_ID,
            'X-Parse-REST-API-Key': REST_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Dados atualizados com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao atualizar dados.');
    });
});

function abrirMenu() {
    document.getElementById("menu").classList.add("right-0");
    document.getElementById("menu").classList.remove("right-360");
    document.getElementById("overlay").style.display = "block";
  }
  
  function fecharMenu() {
    document.getElementById("menu").classList.add("right-360");
    document.getElementById("menu").classList.remove("right-0");
    document.getElementById("overlay").style.display = "none";
  }
  
  const overlay = document.getElementById("overlay");