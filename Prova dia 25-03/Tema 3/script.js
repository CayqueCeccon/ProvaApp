const dadosVeiculos = []

class Veiculo{
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        if (new.target === Veiculo){
            throw console.error("Não é possivel criar um item chamando a diretamente a classe pai");
        }
        if (!marca || marca.lenght < 2 || !modelo || modelo.lenght < 2 || preco <= 0){
            throw new Error("As caracteristicas de cadastro estão erradas, por favor verifique!");                
        }

        this.#id = id
        this.#marca = marca
        this.#modelo = modelo
        this.#preco = preco
        this.#disponivel = true
        dadosVeiculos.push({id, marca, modelo, preco, disponivel: true})
    }

    getId(){
        return this.#id
    }

    getMarcaModelo(){
        return 'Marca: ' + String(this.#marca) + " e Modelo: " + String(this.#modelo)
    }

    getPreco(){
        return this.#preco
    }

    setPreco(precoNovo){
        return precoNovo <= 0 || this.#disponivel === false ? console.error("Erro ao setar preço. Deve ser maior que zero ou veículo deve estar disponível.") : this.#preco = precoNovo
    }

    verificarDisponibilidade(){
        return this.#disponivel
    }

    venderVeiculo(){
        return this.#disponivel === true ? this.#disponivel = false : console.error("Erro ao vender, veículo indisponível.")
    }

    mostrarTodosVeiculos(){
        return dadosVeiculos
    }

    showData(){
        return {
            id: this.getId(),
            MarcaModelo: this.getMarcaModelo(),
            preco: this.getPreco(),
            disponivel: this.verificarDisponibilidade()
        }
    }

}

class Carro extends Veiculo{
    portas

    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco)

        if (portas <= 0){
            throw console.error("O número de portas deve ser maior que zero!")
        }

        this.portas = portas
    }
}

class Moto extends Veiculo{
    cilindradas

    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco)
        if (cilindradas < 50 || cilindradas > 2000){
            throw console.error("O número de cilindradas deve ser maior que zero ou dentro do intervalo (50 e 2000)")
        }

        this.cilindradas = cilindradas
    }

}

const vcl1 = new Carro("1", "Ferrari", "Puro Sangue", 2, 2)
const vcl2 = new Moto("2", "Kawasaki", "Ninja 300", 1, 80)
// const vcl3 = new Carro("1", "Ferrare", "Puro Blood", 2, 0) Não funciona pq o número de portas deve ser maior que 0

console.log(vcl1.mostrarTodosVeiculos())

vcl1.setPreco(8000000)
vcl1.venderVeiculo()
vcl1.venderVeiculo()

console.log(vcl1.showData())