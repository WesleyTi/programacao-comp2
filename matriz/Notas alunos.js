/*  Exercício  para próxima aula 
exercício 1: Antes do cadastro das notas, solicitar também o nome do aluno para cadastro

          2: Qual foi a maior nota em cada prova, e quem tirou está nota

          3: Menor nota de cada aluno
*/

function principal() {

    let notasAlunos = []//matriz
    let dadosAluno = []// vetor de alunos
    cadastrar(notasAlunos, dadosAluno)
    calculaMedia(notasAlunos, dadosAluno) 
    maiorNota(notasAlunos, dadosAluno)      
    menorNota(notasAlunos, dadosAluno) 
             
}

function cadastrar(nota, aluno) { // parâmetro aluno é o vetor / parâmetro nota é a matriz
    // usando o for para criar a matriz 
    for(let i=0; i<3; i++) {
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Informe o código do aluno`))
        obj.media = 0
        aluno.push(obj)
        alert(`Informe 4 notas para o aluno${i+1}`)
        nota[i] = [] // criado um vetor dentro da matriz
        for(let j=0; j<4; j++) { // 4 notas
            nota[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }
    console.log(aluno)
    console.log(nota)
}

function calculaMedia(nota, aluno) { // parâmetro aluno é o vetor / parâmetro nota é a matriz
    // vamos usar um vetor auxiliar 
    for(let i=0; i<3; i++) {// para cada aluno 
        for(let j=0; j<4; j++) {// para cada nota 
            aluno[i].media = aluno[i].media + nota[i][j] // observar a sintaxe 
        } 
        // quando acabarem as notas 
        aluno[i].media = aluno[i].media / 4 
    } 
    console.log("A média dos alunos")
    console.log(aluno)
}  

function maiorNota(nota, aluno) { // parâmetro aluno é o vetor / parâmetro nota é a matriz
    for(let j=0; j<4; j++){
        let maiorNota = nota[0][j]
        let nomeMaior = aluno[0].nome
        for(let i=0; i<3; i++) {
            if (nota[i][j] > maiorNota) {
                maiorNota = nota[i][j]
                nomeMaior = aluno[i].nome
            }
        }
        console.log(`Aluno com maior nota na prova ${j} foi ${nomeMaior} com nota ${maiorNota}`)
    }
}

function menorNota(nota, aluno) { // parâmetro aluno é o vetor / parâmetro nota é a matriz
    for(let i=0; i<3; i++){
        let notaMenor = nota[i][0]
        let nomeMenor = aluno[0].nome
        for(let j=0; j<4; j++) {
            if (nota[i][j] < notaMenor) {
                notaMenor = nota[i][j]
                nomeMenor = aluno[i].nome
            }
        }
        console.log(`A menor nota do aluno ${aluno[i].nome} foi ${notaMenor}`)
    }
}

principal()
