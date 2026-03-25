let produtos = []

function adicionarProduto(){
    let nome = document.getElementById('nomeProduto')
    let preco = document.getElementById('precoProduto')
    let quantidade = document.getElementById('qntProduto')
    
    produtos.push({nome, preco, quantidade})
    
    console.log(produtos)
}



const dados = require('./dados.json')

const produtoCaro = dados.reduce((max, prod) =>
    prod.preco > max.preco ? prod : max
)
const maiorQuantidade = dados.reduce((max, prod) =>
    prod.quantidade > max.quantidade ? prod : max
)
// const valorTotalEstoque = dados.reduce((acc, prod) =>
//     prod.preco + acc.preco ? prod : acc
// )

let produtoCaroiID = document.getElementById('produtoCaro')
produtoCaroiID.appendChild(produtoCaro)
let maiorQuantidadeID = document.getElementById('maiorQuantidade')
maiorQuantidadeID.appendChild(maiorQuantidade)
// let valorTotalEstoqueID = document.getElementById('valorTotalEstoque')
// valorTotalEstoqueID.appendChild(valorTotalEstoque)