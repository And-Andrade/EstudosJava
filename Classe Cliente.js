class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo +=valor
    }
    exibeSaldo(saldo){
        console.log(this.saldo)
    }
}

const anderson = new Cliente("Anderson","anderson@gmail.com","12345678",400)

console.log(anderson)