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
        [6] - Mostrar o número do mês com mais vendas
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
    var vendedor = new Object ()
        vendedor.codigo = Number(prompt(`Informe o código`))
        vendedor.nome = prompt(`Nome do vendedor`)
        vendedor.idade = Number(prompt(`Idade do vendedor`))
        vendor.push(vendedor)
        console.log(`Vendedor cadastrado com sucesso!`)
        console.log(vendedor)
}

function cadastrarVenda(ven) {
    var venda = new Object()
        venda.codVendedor = Number(prompt(`Informe o código do vendedor`))
        venda.codProduto = Number(prompt(`Código da venda`))
        venda.produto = prompt(`Nome do produto`)
        venda.preco = Number(prompt(`Preço do produto`))
        venda.data = prompt(`Data da venda`)
        ven.push(venda)
        console.log(`Venda cadastrada com sucesso`)
        console.log(venda)
}
principal()