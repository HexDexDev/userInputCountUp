// Pede um número ao usuário
let numeroDoUsuario = prompt("Digite um número");

// Inicializa o contador a partir do zero
let contador = 0;

// Cria uma regra que se o número do usuário for maior que 0
if (numeroDoUsuario >= 0) {
// Loop while que continua enquanto contador for menor ou igual ao número do usuário
    while (contador <= numeroDoUsuario) {
        // Mostra o valor atual do contador
        alert(contador);
        // Incrementa o contador
        contador++;
    }