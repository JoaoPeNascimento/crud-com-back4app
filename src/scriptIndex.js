// Configuração do Back4App
const APP_ID = "SUA KEY";
const REST_KEY = "SUA KEY";

//Buscando dados
async function fetchProducts() {
    const url = "https://parseapi.back4app.com/classes/Vendas";
    const headers = {
        "X-Parse-Application-Id": APP_ID,
        "X-Parse-REST-API-Key": REST_KEY,
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        renderProducts(data.results);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}

//Renderizando tabelas
function renderProducts(products) {
    const tabela = document.getElementById("tabela-produtos");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";

    products.forEach((product) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${product.objectId}</td>
            <td>${product.nome}</td>
            <td>R$${product.preco}</td>
            <td>${product.categoria}</td>
        `;

        tbody.appendChild(linha);
    });

    const total = document.getElementById('total')
    total.innerText = `Total de vendas: ${products.length}`
}

fetchProducts()

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