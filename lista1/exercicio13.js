/* 13 - Foi realizada um pesquisa entre 15 habitantes de uma certa região. De cada habitante foram coletados 
os dados: idade, sexo, salário e número de filhos.
Faça uma função que leia esses dadosem um vetor. 
Faça funções que recebam esse vetor, por parâmetro, e retornem a média de salário entre os habitantes, 
a menor e maior idade do grupo e a quantidade de mulheres com três filhos 
que recebe até R$ 500,00(utilize uma função para cada cálculo) */

function exe13PesquisaEntreHabitantes() {
    var habitantes = []
    
    do {
        var opcao = Number(prompt(`Escolha:  
                            [1]. Cadastrar  
                            [2]. Média dos salários  
                            [3]. Menor e maior idade  
                            [4]. Quantidade de mulheres com 3 filhos  
                            [5]. Sair do programa`))
        switch (opcao) {
            case 1: var mostrarDados = entrada(habitantes)
                    console.log(mostrarDados)
                break
            case 2: mediaSalarios(habitantes)
                break
            case 3: menorMaiorIdade(habitantes)
                break
            case 4: numeroFilhos(habitantes)
                break
            case 5: console.log(`Saindo do programa...`)
                break
            default: console.log(`Opção inválida!`) 
        }
    } while (opcao != 5)
}

function entrada(hab) {
    var habitante = new Object()
            habitante.nome = prompt("Informe o seu nome").toUpperCase()
			habitante.salario = Number(prompt("Digite seu salário"))
			habitante.idade= Number(prompt("Digite sua idade"))
			habitante.filhos = Number(prompt("Número de filhos"))
			habitante.sexo = prompt("Informe o sexo [M - F]").toUpperCase()
            hab.push(habitante)
    return habitante
}
    
function mediaSalarios(hab) {
    if (hab == []) {
        console.log(`Nenhum habitante cadastrado`)
    }
    else if (hab.length == 1) {
        console.log(`Para mostrar a média do salário, é preciso ter mais de um habitante cadastrado`)
    }
    else {
        var soma = 0 
        for (var i = 0; i < hab.length; i++ ) {
            soma = soma + hab[i].salario
        }
        console.log(`TOTAL DE HABITANTES: ${hab.length} - A média do salário é: ${soma/hab.length}`)
    }
}

function menorMaiorIdade(hab) {
    if (hab.length == 0) {
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var menor = hab[0].idade
        var maior = hab[0].idade
        for (var i = 1; i < hab.length; i++) {
            if (hab[i].idade > maior) {
                maior = hab[i].idade
            }
            if (hab[i].idade < menor) {
                menor = hab[i].idade
            }
        }
        console.log(`Maior idade: ${maior} e menor idade: ${menor}`)
    }
}

function numeroFilhos(hab) {
    if (hab.length == 0) {
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        qtdeMulheres = 0
        for (var i = 0; i < hab.length; i++) {
            if ((hab[i].filhos >= 3) && (hab[i].salario < 501))  {
                qtdeMulheres++
                console.log(`Nome: ${hab[i].nome}`)
            }
        }
        console.log(`A quantidade de mulheres com 3 ou mais filhos, que recebem salário de até R$ 500,00 reais, é: ${qtdeMulheres}`)
    }
}
exe13PesquisaEntreHabitantes()