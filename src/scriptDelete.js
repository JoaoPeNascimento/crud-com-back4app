// Configuração do Back4App
const APP_ID = "SUA KEY";
const REST_KEY = "SUA KEY";

////Deletar dados
document.getElementById("deletarVendas").addEventListener("submit", e => {
    e.preventDefault();
    console.log("entrou")

    const objectId = document.getElementById('idDeletar').value

    fetch(`https://parseapi.back4app.com/parse/classes/Vendas/${objectId}`, {
        method: 'DELETE',
        headers: {
            'X-Parse-Application-Id': APP_ID,
            'X-Parse-REST-API-Key': REST_KEY,
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) { 
            return response.json(); 
        } else {
            throw new Error('Erro ao deletar dados.'); 
        }
    })
    .then(data => {
        console.log('Success:', data);
        alert('Dados deletados com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao deletar dados.');
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