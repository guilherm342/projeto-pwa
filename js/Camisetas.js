class Camiseta{
    constructor(){
        this.id = 1;
        this.arrayCamisetas=[];
    
    }

salvar(){
    let camiseta = this.lerDados();
    if (this.validaCampos(camiseta)) {
        this.adicionar(camiseta);
        alert('salvar')
    }
    console.log(this.arrayCamisetas);
}  

listatabela() {
    let tbody = document.getElementById('tbody');

    for(let i = 0 < this.arrayCamisetas.length; i++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_camiseta = tr.insertCell();
        let td_preco = tr.insertCell();
        let td_acoes = tr.insertCell();
    }
}

adicionar(){
    this.arrayCamisetas.push(camiseta);
    this.id++;

}
lerDados() {
    let camiseta = {}

    camiseta.id =
    camiseta.nomecamiseta = document.getElementById('Camiseta').value;
    camiseta.preco = document.getElementById('preço').value;
    
    return camiseta
}
validaCampos(){
    let msg = '';
    if(camiseta.nomecamiseta = ''){
        msg += ' - Informe o nome do Produto \n';
    }

    if(camiseta.preco = ''){
            msg += ' - Informe o Preço do Produto \n';
       
    }
    
    if(msg !='') {
        alert(msg);
        return false
    }

    return true;
}
 cancelar(){

 }
}

 var camiseta = new Camiseta();