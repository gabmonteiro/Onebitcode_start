function calcular() {
    let valorConta = document.querySelector("bill").value;
    let servico = document.getElementById("serviceQual");
    servico = servico.options[Selection.selectedIndex].value;
    let pessoas = document.querySelector("people").value;

    let gorjeta = (valorConta*servico)/pessoas;

    if(pessoas<=1) {
        document.getElementById("gorjeta").innerHTML = `<p>A gorjeta será ${gorjeta}</p>`;
        console.log("teste");
    } else {
        document.getElementById("gorjeta").innerHTML = `<p>A gorjeta será ${gorjeta} para cada pessoa</p>`;
        console.log("teste");
    }
}