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
     
     listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayCaneca.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProduto[i].id;
      td_produto.innerText = this.arrayProduto[i].nomeProduto;
      td_valor.innerText = this.arrayProduto[i].preco;

      td_id.classList.add("center");
    }
  }

  adiconar(Camiseta, Caneca) {
    this.arrayProduto.push(Camiseta);
    this.arrayProduto.push(Caneca);
    this.id++;
  }

    lerDados(){
        let Caneca = {}
        caneca.id = this.id;

        caneca.nomeCaneca = document.getElementById('caneca').value;
        caneca.Preco = document.getElementById('preco').value;
        return camiseta;

    }

    cancelar() {
        
        // ...
        alert('item cancelado')
    }
}

var produto = new Caneca();

 validaCampos(produto) {
    let msg = "";

    if (produto.nomeProduto == "") {
      msg += " - Informe o nome do Produto \n";
    }

    if (produto.preco == "") {
      msg += " - Informe o preço do Produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }
  cancelar() {}
}

var caneca = new Caneca();
