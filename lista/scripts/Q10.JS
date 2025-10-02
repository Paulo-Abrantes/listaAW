const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function() {

const n1 = Number(document.getElementById("num1").value);
const n2 = Number(document.getElementById("num2").value);
const n3 = Number(document.getElementById("num3").value);


const soma = n1 + n2 + n3;
const media = soma / 3;
const produto = n1 * n2 * n3;
const maior = Math.max(n1, n2, n3);
const menor = Math.min(n1, n2, n3);

const tabela = ` 
    <table border="1" cellpadding="5">
    <tr><th>Operação</th><th>Resultado</th></tr>
    <tr><td>Soma</td><td>${soma}</td></tr>
    <tr><td>Média</td><td>${media.toFixed(2)}</td></tr>
    <tr><td>Produto</td><td>${produto}</td></tr>
    <tr><td>Maior</td><td>${maior}</td></tr>
    <tr><td>Menor</td><td>${menor}</td></tr>
    </table>
`;
// esse ´ ai e para poder usar o ${} que e um tipo de leitura diferente do normal
document.getElementById("resultado").innerHTML = tabela;

});
