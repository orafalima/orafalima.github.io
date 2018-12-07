let pontuacao = 0;
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3700);
}

function enviarRespostas() {
    document.getElementById("botaoEnviar").style.display = "none";
    document.getElementById("botaoRefazer").style.display = "inline";
    document.getElementById("botaoVerificarRespostas").style.display = "inline";
    document.getElementById("resultado").style.display = "block";
    adicionarPontos();
    verificarPontuacao();
}

function adicionarPontos() {
    //QUESTÃO 1
    if (opcao4.checked) {
        pontuacao += 1;
        document.getElementById("questao1").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao1").style.backgroundColor = "#fce0e0";

    //QUESTÃO 2
    if (opcao8.checked) {
        pontuacao += 1;
        document.getElementById("questao2").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao2").style.backgroundColor = "#fce0e0";

    //QUESTÃO 3
    if (opcao10.checked) {
        pontuacao += 1;
        document.getElementById("questao3").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao3").style.backgroundColor = "#fce0e0"; 

    //QUESTÃO 4
    if (opcao13.checked) {
        pontuacao += 1;
        document.getElementById("questao4").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao4").style.backgroundColor = "#fce0e0"; 

    //QUESTÃO 5
    if (opcao21.checked) {
        pontuacao += 1;
        document.getElementById("questao5").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao5").style.backgroundColor = "#fce0e0"; 

    //QUESTÃO 6
    if (opcao24.checked) {
        pontuacao += 1;
        document.getElementById("questao6").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao6").style.backgroundColor = "#fce0e0";

    //QUESTÃO 7
    if (opcao30.checked) {
        pontuacao += 1;
        document.getElementById("questao7").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao7").style.backgroundColor = "#fce0e0";

    //QUESTÃO 8
    if (opcao33.checked) {
        pontuacao += 1;
        document.getElementById("questao8").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao8").style.backgroundColor = "#fce0e0";

    //QUESTÃO 9
    let respostaQuestao9 = document.getElementById("opcao37").value;
    if (respostaQuestao9 == "Fênix" || respostaQuestao9 == "fênix" || respostaQuestao9 == "Fenix" || respostaQuestao9 == "fenix") {
        pontuacao += 1;
        document.getElementById("questao9").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao9").style.backgroundColor = "#fce0e0"; 

    //QUESTÃO 10
    if (opcao41.checked) {
        pontuacao += 1;
        document.getElementById("questao10").style.backgroundColor = "#e0fce4";
    } else document.getElementById("questao10").style.backgroundColor = "#fce0e0"; 
}

function verificarPontuacao() {
    //Exibindo uma mensagem que vai de acordo com a pontuação feita
    if (pontuacao < 5) {
        document.getElementById("resultado").innerHTML = "Você acertou <span style='color:red;'>" + pontuacao + "</span> questões de 10. Precisa estudar mais um pouco...";
        document.getElementById("resultado").style.borderColor = "red";
    } else if (pontuacao < 7 && pontuacao > 4) {
        document.getElementById("resultado").innerHTML = "Você acertou <span style='color:orange;'>" + pontuacao + "</span> questões de 10. Seu desempenho foi mediano.";
        document.getElementById("resultado").style.borderColor = "orange";
    } else {
        document.getElementById("resultado").innerHTML = "Você acertou <span style='color:green;'>" + pontuacao + "</span> questões de 10! Você foi bem, parabéns.";
        document.getElementById("resultado").style.borderColor = "green";
    }
}

function verificarRespostas() {
    document.getElementById("botaoVerificarRespostas").style.display = "none";

    //Exibindo todas as opções certas
    document.getElementById("resposta4").style.color = "green";
    document.getElementById("resposta4").style.fontWeight = "bold";
    document.getElementById("resposta4").innerHTML += " ✓";

    document.getElementById("resposta8").style.color = "green";
    document.getElementById("resposta8").style.fontWeight = "bold";
    document.getElementById("resposta8").innerHTML += " ✓";

    document.getElementById("resposta10").style.color = "green";
    document.getElementById("resposta10").style.fontWeight = "bold";
    document.getElementById("resposta10").innerHTML += " ✓";

    document.getElementById("resposta13").style.color = "green";
    document.getElementById("resposta13").style.fontWeight = "bold";
    document.getElementById("resposta13").innerHTML += " ✓";

    document.getElementById("resposta21").style.color = "green";
    document.getElementById("resposta21").style.fontWeight = "bold";
    document.getElementById("resposta21").innerHTML += " ✓";

    document.getElementById("resposta24").style.color = "green";
    document.getElementById("resposta24").style.fontWeight = "bold";
    document.getElementById("resposta24").innerHTML += " ✓";

    document.getElementById("resposta30").style.color = "green";
    document.getElementById("resposta30").style.fontWeight = "bold";
    document.getElementById("resposta30").innerHTML += " ✓";

    document.getElementById("resposta33").style.color = "green";
    document.getElementById("resposta33").style.fontWeight = "bold";
    document.getElementById("resposta33").innerHTML += " ✓";

    document.getElementById("resposta41").style.color = "green";
    document.getElementById("resposta41").style.fontWeight = "bold";
    document.getElementById("resposta41").innerHTML += " ✓";

    document.getElementById("resposta37").style.display = "inline";

    //Verificando onde o usuário errou, para que seja exibido também
    verificarErros();
}

function verificarErros() {
    verificarQuestao1();
    verificarQuestao2();
    verificarQuestao3();
    verificarQuestao4();
    verificarQuestao5();
    verificarQuestao6();
    verificarQuestao7();
    verificarQuestao8();
    verificarQuestao9();
    verificarQuestao10();
}

function verificarQuestao1() {
    let erro = "";
    if (opcao4.checked == false) {
        if (opcao1.checked) erro = "resposta1";
        else if (opcao2.checked) erro = "resposta2";
        else if (opcao3.checked) erro = "resposta3";
        else if (opcao5.checked) erro = "resposta5";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao2() {
    let erro = "";
    if (opcao8.checked == false) {
        if (opcao6.checked) erro = "resposta6";
        else if (opcao7.checked) erro = "resposta7";
        else if (opcao9.checked) erro = "resposta9";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao3() {
    let erro = "";
    if (opcao10.checked == false) {
        if (opcao11.checked) erro = "resposta11";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao4() {
    let erro = "";
    if (opcao13.checked == false) {
        if (opcao12.checked) erro = "resposta12";
        if (opcao14.checked) erro = "resposta14";
        if (opcao15.checked) erro = "resposta15";
        if (opcao16.checked) erro = "resposta16";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao5() {
    let erro = "";
    if (opcao21.checked == false) {
        if (opcao17.checked) erro = "resposta17";
        if (opcao18.checked) erro = "resposta18";
        if (opcao19.checked) erro = "resposta19";
        if (opcao20.checked) erro = "resposta20";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao6() {
    let erro = "";
    if (opcao24.checked == false) {
        if (opcao22.checked) erro = "resposta22";
        if (opcao23.checked) erro = "resposta23";
        if (opcao25.checked) erro = "resposta25";
        if (opcao26.checked) erro = "resposta26";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao7() {
    let erro = "";
    if (opcao30.checked == false) {
        if (opcao27.checked) erro = "resposta27";
        if (opcao28.checked) erro = "resposta28";
        if (opcao29.checked) erro = "resposta29";
        if (opcao31.checked) erro = "resposta31";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao8() {
    let erro = "";
    if (opcao33.checked == false) {
        if (opcao32.checked) erro = "resposta32";
        if (opcao34.checked) erro = "resposta34";
        if (opcao35.checked) erro = "resposta35";
        if (opcao36.checked) erro = "resposta36";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function verificarQuestao9() {
    //QUESTÃO 9
    //Pegando a resposta da questão 9
    let respostaQuestao9 = document.getElementById("opcao37").value;
    //Se ela foi alguma dessas, então está certa, mude o background do input para verde
    if (respostaQuestao9 == "Fênix" || respostaQuestao9 == "fênix" || respostaQuestao9 == "Fenix" || respostaQuestao9 == "fenix") {
        document.getElementById("opcao37").style.backgroundColor = "green";
        document.getElementById("opcao37").style.color = "white";
    } else {
        //Se ela não foi nenhuma daquelas, mude o background do input para vermelho
        document.getElementById("opcao37").style.backgroundColor = "red";
        document.getElementById("opcao37").style.color = "white";
    }
}

function verificarQuestao10() {
    let erro = "";
    if (opcao41.checked == false) {
        if (opcao38.checked) erro = "resposta38";
        if (opcao39.checked) erro = "resposta39";
        if (opcao40.checked) erro = "resposta40";
        if (opcao42.checked) erro = "resposta42";
        document.getElementById(erro).style.color = "red";
        document.getElementById(erro).style.fontWeight = "bold";
        document.getElementById(erro).innerHTML += " ✗";
    }
}

function refazerQuiz() {
    location.reload();
}

function dentroCampo() {
    document.getElementById("opcao37").style.backgroundColor = "#59A6DC";
    document.getElementById("opcao37").style.color = "white";
}

function foraCampo() {
    document.getElementById("opcao37").style.backgroundColor = "white";
    document.getElementById("opcao37").style.color = "black";
}