const btn = document.getElementById("btnConverter");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function() {
    const dataStr = document.getElementById("dataInput").value.trim();

    const partes = dataStr.split("/");
    if (partes.length !== 3) {
        resultado.innerText = "Formato inválido! Use dd/mm/aaaa.";
        return;
    }

    const dia = partes[0];
    const mesNum = partes[1];
    const ano = partes[2];

    let mesExtenso;

    switch(mesNum) {
        case "01": case "1":
            mesExtenso = "janeiro"; break;
        case "02": case "2":
            mesExtenso = "fevereiro"; break;
        case "03": case "3":
            mesExtenso = "março"; break;
        case "04": case "4":
            mesExtenso = "abril"; break;
        case "05": case "5":
            mesExtenso = "maio"; break;
        case "06": case "6":
            mesExtenso = "junho"; break;
        case "07": case "7":
            mesExtenso = "julho"; break;
        case "08": case "8":
            mesExtenso = "agosto"; break;
        case "09": case "9":
            mesExtenso = "setembro"; break;
        case "10":
            mesExtenso = "outubro"; break;
        case "11":
            mesExtenso = "novembro"; break;
        case "12":
            mesExtenso = "dezembro"; break;
        default:
            resultado.innerText = "Mês inválido!";
            return;
    }

    // Monta a data por extenso
    resultado.innerText = `${dia} de ${mesExtenso} de ${ano}`;
});
