document.addEventListener("DOMContentLoaded", () => {
   const submitButton = document.querySelector("button[type='submit']");
   const inputs = document.querySelectorAll("input");
 
   submitButton.addEventListener("click", (event) => {
     event.preventDefault();
 
     const isValid = Array.from(inputs).every((input) => input.value.trim() !== "");
 
     if (isValid) {
       alert("Cadastro realizado com sucesso! É permitido apenas uma compra por item.");
       window.location.href = '/index.html';
     } else {
       alert("Preencha todos os campos obrigatórios!");
     }
   });
 });
