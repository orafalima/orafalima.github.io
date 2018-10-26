function jogadaPedra() {
    esvaziarCampos();
    document.getElementById("jogadaUsuario").innerHTML = "<i class='far fa-hand-rock'></i> Pedra";
    let jogadaComputador = calcularJogadaComputador();
    ganhadorJogadaPedra(jogadaComputador);
}
function ganhadorJogadaPedra(jogadaComputador) {
    if (jogadaComputador == 1) {
        jogadaComputadorPapel();
        ganhadorComputador();
    }
    else if (jogadaComputador == 2) {
        jogadaComputadorTesoura();
        ganhadorUsuario();
    }
    else {
        jogadaComputadorPedra();
        ganhadorEmpate();
    }
}
function jogadaPapel() {
    esvaziarCampos();
    document.getElementById("jogadaUsuario").innerHTML = "<i class='far fa-hand-paper'></i> Papel";
    let jogadaComputador = calcularJogadaComputador();
    ganhadorJogadaPapel(jogadaComputador);
}
function ganhadorJogadaPapel(jogadaComputador) {
    if (jogadaComputador == 1) {
        jogadaComputadorPapel();
        ganhadorEmpate();
    }
    else if (jogadaComputador == 2) {
        jogadaComputadorTesoura();
        ganhadorComputador();
    }
    else {
        jogadaComputadorPedra();
        ganhadorUsuario();
    }
}
function jogadaTesoura() {
    esvaziarCampos();
    document.getElementById("jogadaUsuario").innerHTML = "<i class='far fa-hand-scissors'></i> Tesoura";
    let jogadaComputador = calcularJogadaComputador();
    ganhadorJogadaTesoura(jogadaComputador);
}
function ganhadorJogadaTesoura(jogadaComputador) { 
    if (jogadaComputador == 1) {
        jogadaComputadorPapel();
        ganhadorUsuario();
    }
    else if (jogadaComputador == 2) {
        jogadaComputadorTesoura();
        ganhadorEmpate();
    }
    else {
        jogadaComputadorPedra();
        ganhadorComputador();
    }
}
function esvaziarCampos() {
    document.getElementById("jogadaUsuario").innerHTML = "";
    document.getElementById("jogadaComputador").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
function calcularJogadaComputador() {
    return Math.floor(3*Math.random());
}
function jogadaComputadorPedra() {
    document.getElementById("jogadaComputador").innerHTML = "<i class='far fa-hand-rock'></i> Pedra";
}
function jogadaComputadorPapel() {
    document.getElementById("jogadaComputador").innerHTML = "<i class='far fa-hand-paper'></i> Papel";
}
function jogadaComputadorTesoura() {
    document.getElementById("jogadaComputador").innerHTML = "<i class='far fa-hand-scissors'></i> Tesoura";
}
function ganhadorEmpate() {
    document.getElementById("resultado").innerHTML = "<span class='text-info'>Empate.</span>";
}
function ganhadorUsuario() {
    document.getElementById("resultado").innerHTML = "<span class='text-success'>Você ganhou!</span>";
    let pontuacaoUsuario = Number(document.getElementById("pontuacaoUsuario").innerHTML);
    let incremento = pontuacaoUsuario += 1;
    document.getElementById("pontuacaoUsuario").innerHTML = incremento.toString();
}
function ganhadorComputador() {
    document.getElementById("resultado").innerHTML = "<span class='text-danger'>O computador ganhou...<span>";
    let pontuacaoComputador = Number(document.getElementById("pontuacaoComputador").innerHTML);
    let incremento = pontuacaoComputador += 1;
    document.getElementById("pontuacaoComputador").innerHTML = incremento.toString();
}