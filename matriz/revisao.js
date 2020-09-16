function principal() {

    let pontosTime = []
    let timesTabela = []
    cadastrar(pontosTime, timesTabela)
    calculaMedia(pontosTime, timesTabela)
    timeMaisPontos(pontosTime, timesTabela) 
    timeMenosPontos(pontosTime, timesTabela)
}

function cadastrar(pontos, time) { // parâmetro aluno é o vetor / parâmetro nota é a matriz
    // usando o for para criar a matriz 
    for(let i=0; i<4; i++) {
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do time`)
        obj.cidade = prompt(`Informe cidade do time`)
        obj.media = 0
        time.push(obj)
        alert(`Informe a pontuação para o Time ${time[i].nome} `)
        pontos[i] = [] // criado um vetor dentro da matriz
        for(let j=0; j<4; j++) { // 4 notas
            pontos[i][j] = Number(prompt(`Jogo${j+1}`))
        }
    }
    console.log(time)
    console.log(pontos)
}

function calculaMedia(pontos, time) {
    for(let i=0; i<4; i++) { 
        for(let j=0; j<4; j++) {
            time[i].media = time[i].media + pontos[i][j] 
        } 
         
        time[i].media = time[i].media / 4
    } 
    console.log("A média dos pontos ")
    console.log(time)
}

function timeMaisPontos(pontos, time) { 
    for(let j=0; j<4; j++){
        let maisPontos = pontos[0][j]
        let nomeTime = time[0].nome
        for(let i=0; i<3; i++) {
            if (pontos[i][j] > maisPontos) {
                maisPontos = pontos[i][j]
                nomeTime = time[i].nome
            }
        }
        console.log(`O time com maior pontuação na rodada ${j} foi ${nomeTime} com pontuação ${maisPontos}`)
    }
}

function timeMenosPontos(pontos, time) { 
    for(let i=0; i<4; i++){
        let menosPontos = pontos[i][0]
        let nomeMenor = time[0].nome
        for(let j=0; j<4; j++) {
            if (pontos[i][j] < menosPontos) {
                menosPontos = pontos[i][j]
                nomeMenor = time[i].nome
            }
        }
        console.log(`A menor pontuação da rodada ${i} foi ${menosPontos} para o time${nomeMenor}`)
    }
}

principal()