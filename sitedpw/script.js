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
    //Adicionando pontos caso o usuário tenha acertado alguma das questões
    if (r4.checked == true) pontuacao += 1;
    if (r8.checked == true) pontuacao += 1;
    if (r10.checked == true) pontuacao += 1;
    if (r13.checked == true) pontuacao += 1;
    if (r21.checked == true) pontuacao += 1;
    if (r24.checked == true) pontuacao += 1;
    if (r30.checked == true) pontuacao += 1;
    if (r33.checked == true) pontuacao += 1;
    if (r41.checked == true) pontuacao += 1;

    //Pegando a resposta da questão 9 e verificando se está correta
    let questao10 = document.getElementById("r37").value;
    if (questao10 == "Fênix" || questao10 == "fênix" || questao10 == "Fenix" || questao10 == "fenix") {
        pontuacao += 1;
    }
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
    document.getElementById("q4").style.color = "green";
    document.getElementById("q4").style.fontWeight = "bold";
    document.getElementById("q4").innerHTML += " ✓";

    document.getElementById("q8").style.color = "green";
    document.getElementById("q8").style.fontWeight = "bold";
    document.getElementById("q8").innerHTML += " ✓";

    document.getElementById("q10").style.color = "green";
    document.getElementById("q10").style.fontWeight = "bold";
    document.getElementById("q10").innerHTML += " ✓";

    document.getElementById("q13").style.color = "green";
    document.getElementById("q13").style.fontWeight = "bold";
    document.getElementById("q13").innerHTML += " ✓";

    document.getElementById("q21").style.color = "green";
    document.getElementById("q21").style.fontWeight = "bold";
    document.getElementById("q21").innerHTML += " ✓";

    document.getElementById("q24").style.color = "green";
    document.getElementById("q24").style.fontWeight = "bold";
    document.getElementById("q24").innerHTML += " ✓";

    document.getElementById("q30").style.color = "green";
    document.getElementById("q30").style.fontWeight = "bold";
    document.getElementById("q30").innerHTML += " ✓";

    document.getElementById("q33").style.color = "green";
    document.getElementById("q33").style.fontWeight = "bold";
    document.getElementById("q33").innerHTML += " ✓";

    document.getElementById("q41").style.color = "green";
    document.getElementById("q41").style.fontWeight = "bold";
    document.getElementById("q41").innerHTML += " ✓";

    document.getElementById("respostaQ10").style.display = "inline";

    //Verificando onde o usuário errou, para que seja exibido também
    verificarErros();
}

function verificarErros() {
    //Declarando variáveis para determinar qual opção foi a errada em cada questão
    let erro1 = "",
        erro2 = "",
        erro3 = "",
        erro4 = "",
        erro5 = "",
        erro6 = "",
        erro7 = "",
        erro8 = "",
        erro10 = "";

    //Verificando o input da questão 9
    verificarQuestao9();

    //QUESTÃO 1
    //Se a opção certa não foi escolhida...
    if (r4.checked == false) {
        //Se essa opção errada x foi escolhida, atribua o id dela à variável
        if (r1.checked == true) erro1 = "q1";
        if (r2.checked == true) erro1 = "q2";
        if (r3.checked == true) erro1 = "q3";
        if (r5.checked == true) erro1 = "q5";
        //Mude o estilo da opção errada escolhida
        document.getElementById(erro1).style.color = "red";
        document.getElementById(erro1).style.fontWeight = "bold";
        document.getElementById(erro1).innerHTML += " ✗";
    }

    //QUESTÃO 2
    if (r8.checked == false) {
        if (r6.checked == true) erro2 = "q6";
        if (r7.checked == true) erro2 = "q7";
        if (r9.checked == true) erro2 = "q9";
        document.getElementById(erro2).style.color = "red";
        document.getElementById(erro2).style.fontWeight = "bold";
        document.getElementById(erro2).innerHTML += " ✗";
    }

    //QUESTÃO 3
    if (r10.checked == false) {
        if (r11.checked == true) erro3 = "q11";
        document.getElementById(erro3).style.color = "red";
        document.getElementById(erro3).style.fontWeight = "bold";
        document.getElementById(erro3).innerHTML += " ✗";
    }

    //QUESTÃO 4
    if (r13.checked == false) {
        if (r12.checked == true) erro4 = "q12";
        if (r14.checked == true) erro4 = "q14";
        if (r15.checked == true) erro4 = "q15";
        if (r16.checked == true) erro4 = "q16";
        document.getElementById(erro4).style.color = "red";
        document.getElementById(erro4).style.fontWeight = "bold";
        document.getElementById(erro4).innerHTML += " ✗";
    }

    //QUESTÃO 5
    if (r21.checked == false) {
        if (r17.checked == true) erro5 = "q17";
        if (r18.checked == true) erro5 = "q18";
        if (r19.checked == true) erro5 = "q19";
        if (r20.checked == true) erro5 = "q20";
        document.getElementById(erro5).style.color = "red";
        document.getElementById(erro5).style.fontWeight = "bold";
        document.getElementById(erro5).innerHTML += " ✗";
    }

    //QUESTÃO 6
    if (r24.checked == false) {
        if (r22.checked == true) erro6 = "q22";
        if (r23.checked == true) erro6 = "q23";
        if (r25.checked == true) erro6 = "q25";
        if (r26.checked == true) erro6 = "q26";
        document.getElementById(erro6).style.color = "red";
        document.getElementById(erro6).style.fontWeight = "bold";
        document.getElementById(erro6).innerHTML += " ✗";
    }

    //QUESTÃO 7
    if (r30.checked == false) {
        if (r27.checked == true) erro7 = "q27";
        if (r28.checked == true) erro7 = "q28";
        if (r29.checked == true) erro7 = "q29";
        if (r31.checked == true) erro7 = "q31";
        document.getElementById(erro7).style.color = "red";
        document.getElementById(erro7).style.fontWeight = "bold";
        document.getElementById(erro7).innerHTML += " ✗";
    }

    //QUESTÃO 8
    if (r33.checked == false) {
        if (r32.checked == true) erro8 = "q32";
        if (r34.checked == true) erro8 = "q34";
        if (r35.checked == true) erro8 = "q35";
        if (r36.checked == true) erro8 = "q36";
        document.getElementById(erro8).style.color = "red";
        document.getElementById(erro8).style.fontWeight = "bold";
        document.getElementById(erro8).innerHTML += " ✗";
    }

    //QUESTÃO 10
    if (r41.checked == false) {
        if (r38.checked == true) erro10 = "q38";
        if (r39.checked == true) erro10 = "q39";
        if (r40.checked == true) erro10 = "q40";
        if (r42.checked == true) erro10 = "q42";
        document.getElementById(erro10).style.color = "red";
        document.getElementById(erro10).style.fontWeight = "bold";
        document.getElementById(erro10).innerHTML += " ✗";
    }
}

function verificarQuestao9() {
    //QUESTÃO 9
    //Pegando a resposta da questão 9
    let qq10 = document.getElementById("r37").value;
    //Se ela foi alguma dessas, então está certa, mude o background do input para verde
    if (qq10 == "Fênix" || qq10 == "fênix" || qq10 == "Fenix" || qq10 == "fenix") {
        document.getElementById("r37").style.backgroundColor = "green";
        document.getElementById("r37").style.color = "white";
    } else {
        //Se ela não foi nenhuma daquelas, mude o background do input para vermelho
        document.getElementById("r37").style.backgroundColor = "red";
        document.getElementById("r37").style.color = "white";
    }
}

function refazerQuiz() {
    location.reload();
}

function dentroCampo() {
    document.getElementById("r37").style.backgroundColor = "#59A6DC";
    document.getElementById("r37").style.color = "white";
}

function foraCampo() {
    document.getElementById("r37").style.backgroundColor = "white";
    document.getElementById("r37").style.color = "black";
}