class Camiseta{
    constructor(){
        this.id = 1;
        this.arrayCamisetas=[];
    
    }

salvar(){
    let camiseta = this.lerDados();
    this.validaCampos(camiseta)
    console.log(camiseta);
}  
lerDados() {
    let camiseta = {}

    camiseta.id =
    camiseta.nomecamiseta = documentg.getElementById('Camiseta').value;
    camiseta.preco = document.getElementById('preço').value;
    
    return camiseta
}
validaCampos(){
    let msg = '';
    if(camiseta.nomecamiseta = ''){
        msg += ' -'

    }

}
 cancelar(){

 }
}

 var camiseta = new Camiseta();