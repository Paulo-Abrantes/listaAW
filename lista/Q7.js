const botao = document.getElementById("btnInverter");

botao.addEventListener("click", function () {

const nomes = [
    document.getElementById("nome1").value,
    document.getElementById("nome2").value,
    document.getElementById("nome3").value,
    document.getElementById("nome4").value,
    document.getElementById("nome5").value
];


const invertidos = [];
    for (let i = nomes.length - 1; i >= 0; i--) {
        invertidos.push(nomes[i]);  // O push aqui e para colocar as coisas no vetor 
}


document.getElementById("nome1").value = invertidos[0];
document.getElementById("nome2").value = invertidos[1];
document.getElementById("nome3").value = invertidos[2];
document.getElementById("nome4").value = invertidos[3];
document.getElementById("nome5").value = invertidos[4];
});
