// Configuração do Back4App
const APP_ID = "SUA KEY";
const REST_KEY = "SUA KEY";

//Adicionando Dados
document.getElementById("adicionarVendas").addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById('produto').value
    const preco = document.getElementById('preco').value
    const categoria = document.getElementById('categoria').value

    const dados = {
        nome: nome,
        preco: parseInt(preco),
        categoria: categoria
    }
    function adicionarDados(dados) {
        fetch('https://parseapi.back4app.com/parse/classes/Vendas', {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': APP_ID,
                'X-Parse-REST-API-Key': REST_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Dados adicionados com sucesso!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao adicionar dados.');
        });
    }
    
    adicionarDados(dados);
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