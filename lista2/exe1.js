/*
Exercício 1
Escolha: 
[1] - Cadastrar vendedor
[2] - Cadastrar venda
[3] - Consultar as vendas de um funcionário em determinado mês
[4] - Consultar o total das vendas de determinado vendedor
[5] - Mostrar o número do vendedor que mais vendeu em determinado mês
[6] - Mostrar o número do mês com mais vendas
[7] - finalizar programa
*/

function principal() {
    var vendedores = []
    var vendas = []
    do {
        var escolha = Number(prompt(`Escolha: 
        [1] - Cadastrar vendedor
        [2] - Cadastrar venda
        [3] - Consultar as vendas de um funcionário em determinado mês
        [4] - Consultar o total das vendas de determinado vendedor
        [5] - Mostrar o número do vendedor que mais vendeu em determinado mês
        [6] - Mostrar o número do mês com maior venda   
        [7] - finalizar programa`))

        switch (escolha) {
            case 1: cadastrarVendedor(vendedores)
                break
            case 2: cadastrarVenda(vendas)
                break
            case 3: consultarVendas(vendas)
                break
            case 4: consultarTotalVendas(vendas)
                break
            case 5: vendedorComMaisVendas(vendedores, vendas)
                break
            case 6: mesComMaiorVenda(vendas)
                break
            case 7: console.log(`Encerrando programa...`)
                break
            default: console.log(`Opção inválida!`)
                
        } 

    }while (escolha != 7)

}

// cadastra o vendedor
function cadastrarVendedor(vendor) {
    var verifica = false
    var count = 0
    var vendedor = new Object ()

    do {
       
        vendedor.codigo = count+1

        for (var i = 0; i < vendor.length; i++) {
            if (vendor.codigo == vendor[i].codigo) {
                verifica = false
                break
            } 
        }

        if (verifica == false) {
            vendedor.nome = prompt(`Nome do vendedor`)
            vendor.push(vendedor)
            console.log(`Vendedor cadastrado com sucesso!`)
            console.log(vendedor)
        }

        count++
        var resp = prompt(`Deseja continuar cadastrando? S/N`).toLowerCase()
    } while (resp != 'n')
}

function cadastrarVenda(ven) {
    var verifica = false
    var count = 0
    var venda = new Object()
    
    do {
        venda.codVendedor = Number(prompt(`Informe o código do vendedor`))
        venda.data = prompt(`O mês da venda`)
        for (var i = 0; i < ven.length; i++) {
            if ((ven.codVendedor == ven[i].codVendedor) && (ven.data == ven[i].data)) {
                verifica = false
                break
            } 
        }
        if (verifica == false) {
            venda.codProduto = count+1
            venda.produto = prompt(`Nome do produto`)
            venda.preco = Number(prompt(`Preço do produto`))
            ven.push(venda)
            console.log(`Venda cadastrada com sucesso`)
            console.log(venda)
        }
        count++
        var resp =prompt(`Deseja continuar cadastrando? S/N`).toLowerCase()

    } while (resp != 'n')   
}

function consultarVendas(ven, vendor) {
    var codigoVendedor = Number(prompt(`Informe o código do vendedor`))
    var dataVenda = prompt(`Informe a data da venda - dd/mm/aaaa`)
    var datVenda = new Date(dataVenda[1]-1)
    var soma = 0
    for (var i = 0; i < ven.length; i++) {
        if ((codigoVendedor == ven[i].codVendedor) && (datVenda == ven[i].data)){
            soma = soma + ven[i].preco
            console.log(`Vendas no período: ${soma}`)
            console.log(`Código vendedor: ${ven[i].codVendedor}`)
            console.log(ven[i])
        } 
        if (ven[i].length == 0) {
            console.log(`Não foram encontradas vendas no período informado`)
        }
    }
}

function consultarTotalVendas(ven) {
    var codigoVendedor = prompt(`Informe o código do vendedor`)
    var somaVendas = 0
    var countVendas = 0
    for (var i = 0; i < ven.length; i++) {
        if (ven[i].codVendedor == codigoVendedor) {
            somaVendas = somaVendas + ven[i].preco
            countVendas++
        } 
        if (ven[i].preco == 0) {
            console.log("Nenhuma venda realizada")
        }
        console.log(ven[i])
    }
    console.log(`Foram ${countVendas} vendas no período, totalizando ${somaVendas}`.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}))
}

function vendedorComMaisVendas(vendor, ven) {
    var cod = 0
    var maiorVenda = ven[1].data
    var nome = " "
    var mes = prompt("Informe o mês, para ver quem fez mais vendas").toUpperCase()
    switch (mes) {
        case "JANEIRO": mes = 0
            break
        case "FEVEREIRO": mes = 1
            break
        case "MARÇO": mes = 2
            break
        case "ABRIL": mes = 3
            break
        case "MAIO": mes = 4
            break
        case "JUNHO": mes = 5
            break
        case "JULHO": mes = 6
            break
        case "AGOSTO": mes = 7
            break
        case "SETEMBRO": mes = 8
            break
        case "OUTUBRO": mes = 9
            break
        case "NOVEMBRO": mes = 10
            break
        case "DEZEMBRO": mes = 11
            break
    }
    for (var i = 0; i < ven.length; i++) {
        if (mes == ven[i].data) {
            maiorVenda = ven[i].preco
            cod = ven[i].codVendedor
            for (var j = 0; j < vendor.length; j++) {
                if (cod == vendor[i].codigo) {
                    nome = vendor[j].nome
                }
            }
        }
    }
    console.log(`O vendedor que mais vendeu no mês:  ${nome} - código: ${cod}`)
    console.log(`Total de vendas:  ${maiorVenda}`.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}))
}

function mesComMaiorVenda(ven) {
    var mes = 0
    var maiorVenda = ven[1].preco
    for (var i = 0; i < ven.length; i++) {
        if (ven[i].preco > maiorVenda) {
            mes = ven[i].data
            maiorVenda = ven[i].preco
        }
    }
    console.log(`O mês com maior venda foi: ${mes}, com o valor da venda de: ${maiorVenda}`)
}
principal()