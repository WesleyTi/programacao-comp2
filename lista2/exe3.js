function chefe() {
    var vetor = []
    do {
        var opcao = Number(prompt("Digite [1]. Req1 .\n [2]. Req2 .\n . [3]. Req3 .\n .[4]. Req4 . \n .[5]. Req5 . \n . [6]. Req6"))
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
            case 6: console.log(`O programa será encerrado`)
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
    objeto.olhos = prompt("Informe a cor dos olhos - A-azul - V- verde - C- castanho")
    vet.push(objeto)
    console.log("Habitante cadastrado com sucesso")

}

function requisito2(vet) {

}

function requisito3(vet) {

}

function requisito4(vet) {

}

function requisito5(vet) {

}