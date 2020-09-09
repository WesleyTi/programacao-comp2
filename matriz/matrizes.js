chefe()
function chefe() {
    let matriz = []
    matriz[0] = [] // linha 0 
    matriz[1] = [] // linha 1
    matriz[2] = [] // linha 2
    cadastra(matriz)
    calculaMedia(matriz)
}

function cadastra(mat) {
    for (let i = 0; i < 3; i++) {
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        for(let j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }
}

function calculaMedia(mat) {
    let media = [0,0,0]
    for (let i = 0; i < 3; i++) {
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        for(let j = 0; j < 4; j++) {
            media[i] = media[i] + mat[i][j]
        }
        media[i] = media[i] / 4
    }
    console.log(`As médias são ${media}`)
}

/*  Exercício  para próxima aula 
exercício 1: Antes do cadastro das notas, solicitar também o nome do aluno para cadastro

          2: Qual foi a maior nota em cada prova, e quem tirou está nota

          3: Menor nota de cada aluno
*/