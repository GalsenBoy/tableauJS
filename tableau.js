//Exercice 3
/*
function multiplication(b) {
    let a = [];
    for (let i = 1; i <= 10; i++) {
        a.push(b * i);
    }
    return a;
}

document.write("<table style='border:1px solid black'>");
document.write("<tr>");
document.write('<th>');
document.write('x');

document.write('</th>');
for (let index = 1; index <= 10; index++) {
    document.write("<th style='border:1px solid black'>");
    document.write(index);
    document.write('</th>');
}
document.write('</tr>')

for (let a = 1; a <= 10; a++) {

    document.write("<tr>")

    document.write("<td style='border:1px solid black'>")
    document.write(a);
    document.write('</td>');

    for (var l = 0; l < 11; l++) {
        document.write("<td style='border:1px solid black'>");
        document.write(multiplication(a)[l]);
        document.write('</td>');
    }
    document.write('</tr>')
}
document.write('</table>');
*/
//Exercice
//Nombre aléatoire

/*
function number() {
    var j = 9 * Math.floor(10 * Math.random() + 1);
    let saisi = prompt(`Saisissez ${j} comme nombre`)
    let i;

    while (saisi <= 9 || saisi >= 99 || saisi != j) {
        saisi = prompt(`Saisissez ${j} comme nombre`);
        i++;
    }
    return saisi;
}
let tab = ['76', '72', '51', '27', '9', '54', '36', '3'];
for (let index = 0; index < 3; index++) {
    tab.push(number());
}

console.log(tab);

var pairs = ['76', '72', '54', '36'];
var impairs = ['51', '27', '9', '3'];



document.write("<table style='border: 1px solid black'>")
document.write('<tr >')
document.write("<th style='border: 1px solid black'>")
document.write('nombres pairs')



document.write('</th>')
document.write("<th style='border: 1px solid black'>")
document.write('nombres impairs')
document.write('</th>')
document.write('</tr>')

for (let j = 0; j <= tab.length; j++) {
    if (j % 2 == 0) {
        document.write('<tr>')
        document.write("<td class='cell'>")
        document.write('</td>')
        document.write("<td class='cell'>")
        document.write('</td>')
        document.write('</tr>')
    }
}
var cell = document.getElementsByClassName('cell');

for (let n = 0; n <= tab.length; n++) {
    if (n % 2 == 0) {
        var p = n / 2;
        cell[n].innerHTML = pairs[p];
    }
    if (n % 2 == 1) {
        var p = (n + 1) / 2;
        cell[n].innerHTML = impairs[p];
    }
}
document.write('</table>')
*/

/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let deviner = (getRndInteger(10, 100));


let choix = prompt('Votre choix');
let essai = 10;
while (choix != deviner && essai > 0) {
    let choix = prompt('Votre choix');
    essai--;
    alert(`Il vous reste ${essai} essai`);
    if (choix > deviner) {
        alert('Votre choix est plus grand que le nombre à deviner')
    } else if (choix < deviner) {
        alert('Votre choix est plus petit que le nombre à deviner')
    } else {
        alert(`Bravo!! la valeur à deviner était le ${deviner}`)
        essai = 0;
    }
}
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function entierPos(entier) {
    let i;
    while (entier <= 0 || entier >= 19) {
        i++;
    }
    return entier;
}

for (let index = 0; index < entierPos(25); index++) {
    let nbr = [];
    nbr.push(getRndInteger(10, 100))
    if (nbr % 2 == 0) {
        document.write(`<h3 style="color:green">${nbr}</h3>`)
    } else {
        document.write(`<h3 style="color:red">${nbr}</h3>`)
    }
    console.log(nbr);

}

//console.log(entierPos(6));