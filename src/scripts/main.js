let contador = 0;
let limiteCarrinho = 1; 
let carrinho = []; 

function AdicionarAoCarrinho(button) {
  const produto = button.getAttribute('data-product');
  if (carrinho.length < limiteCarrinho) {
    carrinho.push(produto);
    updateContador();
  } else {
    alert("Carrinho cheio! Não é possível adicionar mais itens.");
  }
}

function updateContador() {
  const contador = document.getElementById('contador');
  contador.textContent = `(${carrinho.length})`;
}

document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.getElementById('contador');
  h1.addEventListener('click', () => {
    if (carrinho.length > 0) {
      window.location.href = `/produtos/${carrinho[carrinho.length - 1]}.html`;
    } else {
      alert("Carrinho vazio! Não há itens para visualizar.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const productsGrid = document.querySelector(".products-grid");
  productsGrid.classList.add("animate");
});

