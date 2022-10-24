class Camiseta {

    constructor() {
        this.id = 1;


    }

    salvar(){
        this.lerDados()
        // ...
    }

    lerDados(){
        let camiseta = {}

        camiseta.nomeCammiseta = document.getElementById('camiseta').value;
        camiseta.Preco = document.getElementById('preco').value;

        return camiseta;

    }

    cancelar() {
        
        // ...
        alert('item cancelado')
    }
}

var produto = new Camiseta();

class Caneca {
    constructor() {
        this.id = 1;
        

    }

    salvar(){
        this.lerDados()
        // ...
    }

    lerDados(){
        let camiseta = {}

        camiseta.nomeCammiseta = document.getElementById('camiseta').value;
        camiseta.Preco = document.getElementById('preco').value;

        return camiseta;

    }

    cancelar() {
        
        // ...
        alert('item cancelado')
    }
}

var produto = new Caneca();
