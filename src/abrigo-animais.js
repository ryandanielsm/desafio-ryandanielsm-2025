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
}

export { AbrigoAnimais as AbrigoAnimais };
