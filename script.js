

function definirSaldoInicial() {
    let saldoMaio = Number(document.getElementById("inserirSaldoInicialMaio").value);
    document.getElementById("saldoInicialMaio").innerHTML = saldoMaio.toFixed(2);
    document.getElementById("saldoFinalMaio").innerHTML = saldoMaio.toFixed(2);
    document.getElementById("inserirSaldoInicialMaio").value = "";
}

function definirGastos() {
    let saldoMaio = Number(document.getElementById("inserirSaldoInicialMaio").value);
    let gastoMaio = Number(document.getElementById("inserirGastoMaio").value);
    let saldoFinalMaio = Number(document.getElementById("saldoFinalMaio").innerHTML);
    let gastoDoMes = Number(document.getElementById("gastoDoMes").innerHTML);
    let observ = document.getElementById("observacao").value;
    document.getElementById("saldoFinalMaio").innerHTML = (saldoFinalMaio - gastoMaio).toFixed(2);
    let gastosTotais = (gastoDoMes += gastoMaio);
    document.getElementById("gastoDoMes").innerHTML = gastosTotais.toFixed(2);
    let incremento = document.getElementById("gastosMaio").innerHTML;
    incremento += "&nbsp;" + " - R$ " + gastoMaio.toFixed(2);
    document.getElementById("gastosMaio").innerHTML = incremento + " " + "(" + observ + ")" + "<br>";
    document.getElementById("inserirGastoMaio").value = "";
    document.getElementById("observacao").value = "";
}

function definirGanhos() {
    let ganhoMaio = Number(document.getElementById("inserirGastoMaio").value);
    let incremento = document.getElementById("gastosMaio").innerHTML;
    let observ = document.getElementById("observacao").value;
    incremento += "&nbsp;" + " + R$ " + ganhoMaio.toFixed(2);
    document.getElementById("gastosMaio").innerHTML = incremento + " " + "(" + observ + ")" + "<br>";
    let saldoFinalMaio = Number(document.getElementById("saldoFinalMaio").innerHTML);
    document.getElementById("saldoFinalMaio").innerHTML = (saldoFinalMaio + ganhoMaio).toFixed(2);
    let ganhosTotal = Number(document.getElementById("ganhoDoMes").innerHTML);
    let ganhos = ganhosTotal += ganhoMaio;
    document.getElementById("ganhoDoMes").innerHTML = ganhos.toFixed(2);
    document.getElementById("inserirGastoMaio").value = "";
    document.getElementById("observacao").value = "";

}

function limpar() {
    document.getElementById("gastoDoMes").innerHTML = "0.00";
    document.getElementById("ganhoDoMes").innerHTML = "0.00";
    document.getElementById("inserirGastoMaio").value = "";
    document.getElementById("saldoInicialMaio").innerHTML = "0.00";
    document.getElementById("saldoFinalMaio").innerHTML = "0.00";
    document.getElementById("gastosMaio").innerHTML = "&nbsp;";
    document.getElementById("observacao").value = "";
}