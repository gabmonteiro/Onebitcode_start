function calcular() {
    let valorConta = document.getElementById("bill").value;
    let servico = document.getElementById("serviceQual").value;
    let pessoas = document.getElementById("people").value;
    console.log(`valor da conta:${valorConta}, servico:${servico}, pessoas:${pessoas}`);

    let gorjeta = (valorConta*servico)/pessoas;

    if(valorConta<=0||pessoas<=0||servico==0) {
        alert("Por favor, preencha os valores corretamente!")
        return;
    }

    if(pessoas<=1) {
        document.getElementById("gorjeta").innerHTML = `<p>A gorjeta será ${gorjeta}</p>`;
    } else {
        document.getElementById("gorjeta").innerHTML = `<p>A gorjeta será ${gorjeta} para cada pessoa</p>`;
    }
}