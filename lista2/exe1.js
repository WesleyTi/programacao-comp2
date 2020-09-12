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
    let vendedores = []
    let vendas = []
    do {
        let escolha = Number(prompt(`Escolha: 
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
            case 2: cadastrarVenda(vendas, vendedores)
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
    
    let vendedor = new Object ()
        vendedor.codigo = Number(prompt(`Informe o código do vendedor`))
        vendedor.nome = prompt(`Nome do vendedor`)
        for (let i = 0; i < vendor.length; i++) {
            if (vendor[i].codigo == vendedor.codigo) {
               console.log(`Vendedor já existe!`)
               return 0
            } 
        }
            
        vendor.push(vendedor)
        console.log(vendedor)
        console.log(`Vendedor cadastrado com sucesso!`)
           
      
}

function cadastrarVenda(ven, vendor) {

    let venda = new Object()
    venda.codProduto = Number(prompt(`Informe o código da venda`))
    venda.codVendedor = Number(prompt(`Informe o código do vendedor`))
    venda.produto = prompt(`Nome do produto`)
    venda.preco = Number(prompt(`Preço do produto`))
    venda.data = prompt(`O mês da venda`)
    
    for (let j = 0; j < vendor.length; j++) {
        if (vendor[j].codigo == venda.codVendedor)  {
            for (let i = 0; i < ven.length; i++) {
                if ((ven[i].codVendedor == venda.codVendedor) && (ven[i].data == venda.data )) {
                    console.log(`Venda já cadastrada para o vendedor neste mês`)
                    return 0           
                } else if (ven[i].codProduto == venda.codProduto) {
                    console.log(`Código de venda existente!`)
                    return 0 
                }
            }
        
            ven.push(venda)
            console.log(`Venda cadastrada com sucesso`)
            console.log(venda)
            return 0
        }
    }
}

function consultarVendas(ven) {
    let codigoVendedor = Number(prompt(`Informe o código do vendedor`))
    let dataVenda = prompt(`Informe o mês da venda `)
    let soma = 0
    for (let i = 0; i < ven.length; i++) {
        if ((codigoVendedor == ven[i].codVendedor) && (dataVenda == ven[i].data)){
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
    let codigoVendedor = prompt(`Informe o código do vendedor`)
    let somaVendas = 0
    let countVendas = 0
    for (let i = 0; i < ven.length; i++) {
        if (ven[i].codVendedor == codigoVendedor) {
            somaVendas = somaVendas + ven[i].preco
            countVendas++
        } 
        if (ven[i].preco == 0) {
            console.log("Nenhuma venda realizada")
        }
        console.log(ven[i])
    }
    console.log(`O total de ${countVendas} vendas em todo o ano, totalizando ${somaVendas}`.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}))
}

function vendedorComMaisVendas(vendor, ven) {
    let cod = 0
    let maiorVenda = 0
    let nome = " "
    let mes = prompt("Informe o mês, para ver quem fez mais vendas")
    for (let i = 0; i < ven.length; i++) {
        if (mes == ven[i].data) {
            maiorVenda = ven[i].preco
            cod = ven[i].codVendedor
            for (let j = 0; j < vendor.length; j++) {
                if (cod == vendor[j].codigo) {
                    nome = vendor[j].nome
                }
            }
        }
    }
    console.log(`O vendedor que mais vendeu no mês ${mes}:  ${nome} - código: ${cod}`)
    console.log(`Total de vendas:  ${maiorVenda}`.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}))
}

function mesComMaiorVenda(ven) {
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0] 
    for(let i=0;i<ven.length;i++){ 
        let posicao = ven[i].mes - 1 
        meses[posicao] = meses[posicao] + ven[i].valor 
    }  
    let maiorValor = meses[0] 
    for(let i=1; i<ven.length;i++){ 
        if (ven[i].valor > maiorValor){
            maiorValor = ven[i].valor 
            let posicao = ven.indexOf(maiorValor) // posição no vetor contendo o maior valor 
        }    
    }   
    console.log(`Mês com mais vendas ${posicao + 1} e o valor é ${maiorValor}`)
}
principal()
