class AbrigoAnimais {
  constructor() {
    this.listaAnimais = {
      Rex: { tipo:'cão', brinquedos: ['RATO', 'BOLA'] }, 
      Mimi: { tipo:'gato', brinquedos: ['BOLA', 'LASER'] }, 
      Fofo: { tipo:'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] }, 
      Zero: { tipo:'gato', brinquedos: ['RATO', 'BOLA'] }, 
      Bola: { tipo:'cão', brinquedos: ['CAIXA', 'NOVELO'] }, 
      Bebe: { tipo:'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] }, 
      Loco: { tipo:'jabuti', brinquedos: ['SKATE', 'RATO'] } 
    }

    this.brinquedosValidos = new Set(['RATO','BOLA','LASER','CAIXA','NOVELO','SKATE']);
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
  }

  validarBrinquedos(brinquedosPessoa) {
    const brinquedos = new Set();
    
    for(let brinquedo of brinquedosPessoa) {
      if(!this.brinquedosValidos.has(brinquedo) || brinquedos.has(brinquedo)) throw 'Brinquedo Inválido';
      brinquedos.add(brinquedo);
    }

    return brinquedosPessoa;
  }

  conferirOrdem(animal, brinquedosPessoa) {

    let posicaoBrinquedoFavorito = 0;

    for(let brinquedo of brinquedosPessoa) {
      if(brinquedo === animal.brinquedos[posicaoBrinquedoFavorito]) {
        posicaoBrinquedoFavorito++;
      }

      if (posicaoBrinquedoFavorito === animal.brinquedos.length) {
        return true;
      }
    }

     return false;
  }

}

export { AbrigoAnimais as AbrigoAnimais };
