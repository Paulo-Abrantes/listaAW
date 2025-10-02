

const botao = document.getElementById("btnBuscar");

botao.addEventListener("click", function() {
    const palavra = document.getElementById("palavra").value.trim();
    const textarea = document.getElementById("texto");
    const mensagem = document.getElementById("mensagem");

if (!palavra) {
    mensagem.innerText = "Digite uma palavra para pesquisar!";
    return;
}

const regex = new RegExp(`(${palavra})`, "gi");

const resultados = textarea.value.match(regex);

if (!resultados) {
    mensagem.innerText = "Nenhum resultado encontrado.";
    document.getElementById("resultadoTemp").innerHTML = "";
    return;
}

const textoDestacado = resultados.map(p => `<span class="destaque">${p}</span>`).join(" ");

const divResultado = document.getElementById("resultadoTemp");
divResultado.innerHTML = textoDestacado;

mensagem.innerText = `Encontradas ${resultados.length} ocorrências.`;
    
//da uma lida aqui https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp? para voce entender isso


});


