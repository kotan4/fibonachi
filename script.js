const posFib = prompt('Введи положение в таблице фибонначи :');


function fibRekr(posFib) {
    let rekrVal;

    if (posFib >= 2) {
        rekrVal = fibRekr(posFib - 1) + fibRekr(posFib - 2);
    } else {
        rekrVal = posFib
    }

    return rekrVal;
}

onScreen('Рекрусия: ' + (fibRekr(posFib)));


function fibCikl(posFib) {

   let a = 1,
       b = 1;
        for (let i = 3; i <= posFib; i++) {
            const c = a + b;
            a = b;
            b = c;
        }
    return b;
}

onScreen('Цикл: ' + (fibCikl(posFib)));


const fibMass = [1, 1];

    for (f = 2; f < posFib; f ++) {
        fibMass[f] = fibMass[f-1] + fibMass[f-2];
    }

onScreen('Массив: ' + (fibMass[fibMass.length - 1]));


function onScreen(val) {
    document.write (val + '<br>')

}