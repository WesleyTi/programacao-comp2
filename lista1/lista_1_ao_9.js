/* 1-  Faça uma função que receba um número inteiro positivo N como parâmetro, e retorne a soma dos N números 
    inteiros existentes entre o número 1 e esse número.*/

function exe1Principal() {
    var num = Number(prompt("Digite um número inteiro positivo"))
    var resultado = somaExe1(num)
    console.log(`A soma dos números: ${resultado}`)
}

function somaExe1(n) {
    var somar = 0
    for (var i = 1; i < n; i++){
      somar = somar + i
    }
    return somar
}


/* 2-  Faça uma função que receba três números inteiros como parâmetro, representando horas, minutos, e segundos, 
    e os converta em segundos. Exemplo: 2 h, 40 min e 10 seg correspondentes a 9.610 segundos */

function exe2Principal() {
    var hora = Number(prompt("Informe a hora"))
    var minuto = Number(prompt("Informe a minuto"))
    var segundo = Number(prompt("Informe a segundo"))
    var conversao = segundos(hora, minuto, segundo)
    console.log(`A hora e minutos, convertidos em segundos: ${conversao}`)
}

function segundos(h, m, s) {
    var hour = h * 3600
    var minute = m * 60
    return hour + minute + s
}

exe2Principal()



/* 3-  Faça uma função que receba duas cadeias de caracteres como parâmetros e retorne 0 se elas forem iguais. 
    Caso contrário, retorne o índice do primeiro caracter não coincidente. */

function exe3Principal() {
    var palavra1 = []
    var palavra2 = []
    var compara = analisa(palavra1, palavra2)
    console.log(compara)
}

function entrada(p1, p2) {
    p1.push(prompt("Digite uma palavra de sua escolha").slice())
    p2.push(prompt("Digite outra palavra de sua escolha").slice())
}

function analisa(p1, p2) {
    if (p1 == p2) {
        return 0
    } else {
        if (p2.length > p1.length) {
            return p1.length + 1
        }
        for (var i = 0; i < p1.length; i++ ) {
            if (p1[i] != p2[i]) {
                return i + 1
            }
        }
    }
    
}
exe3Principal()


/* 4-  Faça uma função que receba, como parâmetro, o raio de uma esfera, calcule e mostre no programa principal 
    o seu volume, v = 4/3 * R³. */ 

function exe4Principal() {
    var raio = Number(prompt("Informe o raio da esfera"))
    var resultado = esfera(raio)
    console.log(`O volume da esfera é: ${resultado}`)
}

function esfera(r) {
    var volume = Number((4/3) * Math.pow(r,2))
    return volume
}
exe4Principal() 


/* 5-  Faça uma função que receba um valor inteiro e verifique se o valor é  positivo ou negativo. */

function exe5Principal() {
    var num = Number(prompt("Digite um valor inteiro, positivo ou negativo"))
    var result = verifica(num)
    console.log(`O valor é ${result}`)
}

function verifica(n) {
    if (n > 0) {
        return "Positivo"
    } else {
        return "Negativo"
    }
}
exe5Principal()

/* 6-  Faça uma função que receba, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorne o seu peso ideal. 
    Para homens calcular o peso ideal usando a formula a seguir: peso ideal = 72.7 * alt - 58 e, para mulheres: peso ideal = 62.1 * alt - 44.7 */

function exe6Principal() {
    var sexo = prompt("Informe seu sexo [ MASCULINO ] - [ FEMININO ]").toUpperCase()
    var altura = Number(prompt("Informe sua altura"))
    var result = pesoIdeal(sexo, altura)
    console.log(`Seu peso ideal ${result}`)
}

function pesoIdeal(s, a) {
    var pesoIdealM = Number(72.7 * a - 58)
    var pesoIdealF = Number(62.1 * a - 44.7)

    switch(s) {
        case "MASCULINO":  return pesoIdealM; 
        case "FEMININO": return pesoIdealF;
        default: return "Sexo inválido!"
    }
}
exe6Principal()

/* 7- Faça uma função que leia um número não determinado de valores positivos, e retorne a média aritimética dos mesmos. */
function exe7Principal() {
    var num = []
        entrada(num)
        somaNumeros(num)
    var result = mediaAritimetica(num)
    console.log(result)
}

function entrada(vet) {
    var count = 0
    do {
        vet.push(Number(prompt("Digite números positivos [EX: 245979 ...")))
        count++;
        var resp = prompt("Deseja digitar mais números? S/N").toLowerCase()
    } while (resp != "n")
    
}   

function mediaAritimetica(vet) {
    var soma = 0
    var media = 0
    for (var i = 0; i < vet.length; i++) {
        soma = soma + vet[i]
        media = soma / vet.length 
        console.log(`A média aritimética dos números: ${media} `)
    }
    return media
}
exe7Principal()

/* 8- Faça uma função que receba um valor inteiro e positivo, calcule e mostre o seu fatorial. */

function exe8Principal() {
    var num = Number(prompt("Digite um número positivo para ver seu fatorial"))
    var fatoracao =  fatorial(num)
    console.log(fatoracao)
}
 function fatorial(n) {
    var resultado = 1
    for (var i = 1; i < n; i++) {
        resultado *= i
    }
    return resultado
}
exe8Principal()

/* 9- Faça uma função que receba, por parâmetro um valor inteiro e positivo e retorne a soma dos divisores desse valor */  

function exe9Principal() {
    var num = Number(prompt("Digite um número inteiro e positivo, para ver a soma dos seus divisores"))  
    var resultado = somaDivisores(num)
    console.log(resultado)
}

function somaDivisores(n) {
    var soma = 0
    for (var i = n; i >= 1; i--) {
        if (n % i == 0) {
            soma += i
        }
        console.log(soma)
    }
    return soma
}
exe9Principal()







































































































































