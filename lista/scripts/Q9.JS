const botao = document.getElementById("btnIntercalar");

botao.addEventListener("click", function () {
const p1 = document.getElementById("palavra1").value;
const p2 = document.getElementById("palavra2").value;

let resultado = "";

const tamanhoMax = Math.max(p1.length, p2.length); 

for (let i = 0; i < tamanhoMax; i++) {
    if (i < p1.length) resultado += p1[i];
    if (i < p2.length) resultado += p2[i];
}

document.getElementById("resultado").value = resultado;
});
