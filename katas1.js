oneThroughTwenty();

function oneThroughTwenty() {
    let resultado1a20 = '';
    for (let i = 1; i <= 20; i++) {
        resultado1a20 = resultado1a20 + i + ', ';

    }
    console.log(resultado1a20);
}


//call function oneThroughTwenty
evensToTwenty();

function evensToTwenty() {

    let resultadoPar20 = '';
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            resultadoPar20 = resultadoPar20 + i + ', ';
        }
    }
    console.log(resultadoPar20);

}

//call function evensToTwenty

oddsToTwenty();

function oddsToTwenty() {


    let resultadoImpar20 = '';
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            resultadoImpar20 = resultadoImpar20 + i + ', ';
        }
    }
    console.log(resultadoImpar20);
}

//call function oddsToTwenty
multiplesOfFive();

function multiplesOfFive() {

    let multiplo5 = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            multiplo5 = multiplo5 + i + ', ';
        }
    }
    console.log(multiplo5);
}

//call function multiplesOfFive
squareNumbers();

function squareNumbers() {

    let quadrado = '';
    let quadradoPerfeito = '';
    for (let i = 1; i <= 100; i++) {
        quadrado = i * i;
        quadradoPerfeito = quadradoPerfeito + quadrado + ', ';
        if (quadrado >= 100) {
            break;
        }
    }

    console.log(quadradoPerfeito);

}

//call function squareNumbers
countingBackwards();

function countingBackwards() {

    let resultado20a1 = '';
    for (let i = 20; i >= 1; i--) {
        resultado20a1 = resultado20a1 + i + ', ';
    }
    console.log(resultado20a1);
}

//call function do 20 até 0 somente par
evenNumbersBackwards();

function evenNumbersBackwards() {


    let resultado20a1par = '';
    for (let i = 20; i >= 1; i--) {
        if (i % 2 == 0) {
            resultado20a1par = resultado20a1par + i + ', ';
        }
    }
    console.log(resultado20a1par);

}

//call function evenNumbersBackwards
oddNumbersBackwards();

function oddNumbersBackwards() {
    let resultado20a1par = '';
    for (let i = 20; i >= 1; i--) {
        if (i % 2 != 0) {
            resultado20a1par = resultado20a1par + i + ', ';
        }
    }
    console.log(resultado20a1par);
}

//call function oddNumbersBackwards
multiplesOfFiveBackwards();

function multiplesOfFiveBackwards() {

    let resultado20a1par = '';
    for (let i = 100; i >= 1; i--) {
        if (i % 5 == 0) {
            resultado20a1par = resultado20a1par + i + ', ';
        }
    }
    console.log(resultado20a1par);
}

//call function multiplesOfFiveBackwards
squareNumbersBackwards();

function squareNumbersBackwards() {
    let quadrado = '';
    let quadradoPerfeito = '';
    for (let i = 100; i >= 1; i--) {
        quadrado = i * i;
        if (quadrado <= 100) {
            quadradoPerfeito = quadradoPerfeito + quadrado + ', ';
        }
        // if (quadrado >= 0) {
        //   break;
        //}
    }

    console.log(quadradoPerfeito);
}

//call function squareNumbersBackwards