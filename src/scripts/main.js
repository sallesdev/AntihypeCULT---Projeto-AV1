let contador = 0;
let limiteCarrinho = 1; // define o limite de itens no carrinho

function AdicionarAoCarrinho() {
  if (contador < limiteCarrinho) {
    contador++;
    document.getElementById("contador").innerText = `(${contador})`;
  } else {
    alert("Carrinho cheio! Não é possível adicionar mais itens.");
  }
}

