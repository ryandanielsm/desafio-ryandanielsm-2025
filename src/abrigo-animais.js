class AbrigoAnimais {
  constructor() {
    this.listaAnimais = {
      Rex: { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
      Mimi: { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      Fofo: { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
      Zero: { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
      Bola: { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
      Bebe: { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
      Loco: { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
    }

    this.brinquedosValidos = new Set(['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE']);
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const pessoa1 = this.validarBrinquedos(brinquedosPessoa1.split(','));
      const pessoa2 = this.validarBrinquedos(brinquedosPessoa2.split(','));
      const animaisOrdem = ordemAnimais.split(',');

      animaisOrdem.forEach(animal => {
        if (!this.listaAnimais[animal]) throw 'Animal inválido';
      });

      const resultado = [];
      const contagemAnimaisPessoa = { 'pessoa 1': 0, 'pessoa 2': 0 };

      for (let nomeAnimal of animaisOrdem) {
        const animal = this.listaAnimais[nomeAnimal];
        let dono = 'abrigo';

        const listaBrinquedoPessoa1 = this.conferirOrdem(animal, pessoa1);
        const listaBrinquedoPessoa2 = this.conferirOrdem(animal, pessoa2);

        if (listaBrinquedoPessoa1 && listaBrinquedoPessoa2 && animal.tipo === 'gato') {
          dono = 'abrigo';

        } else if (animal.tipo === 'jabuti') {
          if (listaBrinquedoPessoa1 && contagemAnimaisPessoa['pessoa 1'] > 0 && contagemAnimaisPessoa['pessoa 1'] < 3) {
            dono = 'pessoa 1';
          } else if (listaBrinquedoPessoa2 && contagemAnimaisPessoa['pessoa 2'] > 0 && contagemAnimaisPessoa['pessoa 2'] < 3) {
            dono = 'pessoa 2';
          }
        } else if (listaBrinquedoPessoa1 && contagemAnimaisPessoa['pessoa 1'] < 3) {
          dono = 'pessoa 1';
        } else if (listaBrinquedoPessoa2 && contagemAnimaisPessoa['pessoa 2'] < 3) {
          dono = 'pessoa 2';
        }

        resultado.push(`${nomeAnimal} - ${dono}`);

        if (dono === 'pessoa 1') contagemAnimaisPessoa['pessoa 1']++;
        if (dono === 'pessoa 2') contagemAnimaisPessoa['pessoa 2']++;

      }

      return { lista: resultado.sort() };

    } catch (err) {
      return { erro: err };
    }
  }

  validarBrinquedos(brinquedosPessoa) {
    const brinquedos = new Set();

    for (let brinquedo of brinquedosPessoa) {
      if (!this.brinquedosValidos.has(brinquedo) || brinquedos.has(brinquedo)) throw 'Brinquedo Inválido';
      brinquedos.add(brinquedo);
    }

    return brinquedosPessoa;
  }

  conferirOrdem(animal, brinquedosPessoa) {

    let posicaoBrinquedoFavorito = 0;

    for (let brinquedo of brinquedosPessoa) {
      if (brinquedo === animal.brinquedos[posicaoBrinquedoFavorito]) {
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
