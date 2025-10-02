function ehPalindromo(palavra) {
  const invertida = palavra.split("").reverse().join("");
  return palavra === invertida;
}

document.getElementById("verificarBtn").onclick = function () {
  const palavra = document.getElementById("palavra").value;
  const resultado = document.getElementById("resultado");

  if (ehPalindromo(palavra)) {
    resultado.textContent = `"${palavra}" é um palíndromo`;
  } else {
    resultado.textContent = `"${palavra}" não é um palíndromo`;
  }
}
