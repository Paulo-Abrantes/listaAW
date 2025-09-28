const botao = document.getElementById("btnTabuada");

botao.addEventListener("click", function() {
const n = Number(document.getElementById("numero").value);

let tabela = `
    <table border="1" cellpadding="5">
        <tr><th>Operação</th> <th>Resultado</th></tr>
`;

for (let i = 1; i <= 10; i++) {
    tabela += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;
}

tabela += `</table>`;

document.getElementById("resultado").innerHTML = tabela;
});
