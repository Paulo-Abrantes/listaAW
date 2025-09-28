const botao = document.getElementById("btnValidar");

botao.addEventListener("click", function () {

let cpf = document.getElementById("cpf").value;

cpf = cpf.replace(/[.\-\s]/g, ""); // esse e para remover tracos e pontos 

const resultado = document.getElementById("resultado");
    if (cpf.length === 11 && /^\d+$/.test(cpf)) { // aqui eu vejo de so tiver numero que isso aqui /^\d+$/.test(cpf) e vejo no if
        resultado.textContent = "CPF válido";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "CPF inválido";
        resultado.style.color = "red";
    }
});
