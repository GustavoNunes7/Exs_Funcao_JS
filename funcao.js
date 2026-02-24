//Atividade – Funções em JavaScript
console.log("Atividade – Funções em JavaScript")
console.log("")

//---------- Exercício 01-------------------------------------

console.log("Ex.1")

function dobro (d1){
    return d1 * 2
} console.log(dobro(20))
console.log("")

//---------- Exercício 02-------------------------------------

console.log("Ex.2")
function triplo (t1){
    return t1 * 3
} console.log(triplo(20))
console.log("")

//---------- Exercício 03-------------------------------------

console.log("Ex.3")


function soma (s1 , s2){
    return s1 + s2 
} console.log (soma(4, 2))
console.log("")

//---------- Exercício 04-------------------------------------

console.log("Ex.4")

function multiplicar (m1 , m2){
    return m1 * m2 
} console.log (soma(6, 2))

console.log("")

//---------- Exercício 05-------------------------------------

console.log("Ex.5")
function realparaDolar (valorReal, cotacao){
    return valorReal / cotacao
}
console.log("Real convertido para Dolár: US$" + realparaDolar(20 , 5.18).toFixed(2))
console.log("")

//---------- Exercício 06-------------------------------------
console.log("Ex.6")
function  dolarparaReal (valorDolar, cotacaoo){
    return valorDolar * cotacaoo
}
console.log("Dolár convertido para Real: R$" + dolarparaReal(20, 5.18).toFixed(2))
console.log("")

console.log("")

//---------- Exercício 07-------------------------------------
console.log("Ex.7")

function calcularAumento (salario){
    return salario + (salario * 0.10)
}
console.log(calcularAumento(700))
console.log("")

//---------- Exercício 08-------------------------------------
console.log("Ex.8")

function par (valor){
    if(valor % 2 == 0){
        console.log("O valor é par")
    }else{
        console.log("O valor é ímpar")
    }
} console.log(par(50))

console.log("")
//---------- Exercício 09-------------------------------------

console.log("Ex.9")

function contar(){
    for(let i=1; i<=10; i++){
        console.log(i)
    }
}
contar();

console.log("")

//---------- Exercício 10-------------------------------------
console.log("Ex.10")

function imprimirAteLimite(limite) {
  for (let l = 1; l <= limite; l++) {
    console.log(l); // 
  }
}
imprimirAteLimite(20); 
console.log("")

//---------- Exercício 11-------------------------------------

console.log("Ex.11")

function somarTotal(){
    let Soma = 0;
    for(let t=1; t<=10; t++){
        Soma += t;  //Aumentar
    } return Soma
} console.log(somarTotal())
console.log("")

//---------- Exercício 12 - RESOLVER --------------------------------------

console.log("Ex.12")

    function contarPares(){
        let Par = 0;
        for(let c= 1; c<=10; c++){
            if(c % 2 === 0){
                Par++;
            }
        } return Par
    }console.log(contarPares())
console.log("")

//---------- Exercício 13 - RESOLVER -------------------------------------

// console.log("Ex.13")

// function tabuada(T){
    
//         for(let T=1; T<=10; T++){
//         let numero = 0;
//         let resultado = 0;
//         resultado = numero * 1;
//     } return resultado
// }
// tabuada();

// console.log("")

//---------- Exercício 14 - RESOLVER -------------------------------------

console.log("Ex.14")
function Contagem(){
    for(let Co=1; Co >=10; Co++){
        console.log(Co)
    }
}
Contagem();

console.log("")


//---------- Exercício 15 - RESOLVER -------------------------------------
console.log("Ex.15")

console.log("")
//---------- Exercício 16 - RESOLVER -------------------------------------
console.log("Ex.16")
console.log("")
//---------- Exercício 17 - RESOLVER -------------------------------------

console.log("Ex.17")
 function impar(){
    for(let i=1; i<=10; i++){
        i = impar + 2
    } return impar
}
impar();
console.log("")

//---------- Exercício 18-------------------------------------
console.log("Ex.18")

function media (md1, md2){
    return (md1 + md2) /2
} console.log(media(32, 25))

console.log("")
//---------- Exercício 19-------------------------------------
console.log("Ex.19")

function quadrado (q1 ){
    return q1 * q1
}
console.log(quadrado(20))
console.log("")
//---------- FIM -------------------------------------