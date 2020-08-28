function chefe() {
    var vetor = []
    do {
        var opcao = Number(prompt(`Digite:\n 
                                 [1]. Cadastrar habitante  
                                 [2]. Media das pessoas olhos castanhos   
                                 [3]. Maior idade entre os habitantes  
                                 [4]. Qtd sexo feminino etc...   
                                 [5]. Percentual de homens  
                                 [6]. Sair do programa`))
        switch(opcao) {
            case 1: requisito1(vetor)
                break
            case 2: requisito2(vetor)
                break
            case 3: requisito3(vetor)
                break
            case 4: requisito4(vetor)
                break
            case 5: requisito5(vetor)
                break
            case 6: console.log(`Encerrado o programa...`)
                break
            default:console.log(`Opção inválida!`)
        }   
    }
    while (opcao !=6) 

}

function requisito1(vet) {
    var objeto = new Object()
    objeto.sexo = prompt("Informe M ou F").toUpperCase()
    objeto.altura = Number(prompt("Informe a altura"))
    objeto.idade = Number(prompt("Informe a idade"))
    objeto.olhos = prompt("Informe a cor dos olhos - A-azul - V- verde - C- castanho").toUpperCase()
    vet.push(objeto)
    console.log("Habitante cadastrado com sucesso")
}

function requisito2(vet) {
    var soma = 0
    var qtde = 0
    for (var i=0; i < vet.length; i++) {
        if ((vet[i].olhos =="C") && (vet[i].altura > 1.60)) {
            soma = soma + vet[i].idade
            qtde++
        } else {
            console.log(`Nenhum habitante cadastrado com olhos castanhos `)
        }
    }
    if (qtde != 0) {
        console.log(`A média é:  ${soma / qtde}`)
    } else console.log(`A média é:  ${soma / qtde}`)
}

function requisito3(vet) {
    var maiorIdade = vet[1].idade
    for (var i = 0; i < vet.length; i++) {
        if (vet[i].idade >= maiorIdade) {
            maiorIdade = vet[i].idade
        }
        console.log(`A maior entre os habitantes: ${maiorIdade}`)
    }
}

function requisito4(vet) {
    var qtd = 0
    for (var i = 0; i < vet.length; i++) {
        if (((vet[i].sexo =="F") && (vet[i].idade > 19) && (vet[i].idade < 46)) 
            || ((vet[i].olhos =="V") && (vet[i].altura < 170))) {

            qtd++
        }
    }
    console.log(`A quantidade do sexo feminino entre 20 e 45 anos, ou que tenham olhos verdes e altura inferior a 1.70m, é: ${qtd}`)
}

function requisito5(vet) {
    var qtdHomens = 0 
    for (var i = 0; i < vet.length; i++) {
        if (vet[i].sexo == "M") {
            qtdHomens++
        }
    }
    console.log(`Percentual de homens: ${qtdHomens * 100 / vet.length}`)
}

chefe()