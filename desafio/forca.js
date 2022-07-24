class Forca {
  constructor(palavraSecreta) {
    this.letrasChutadas = []; 
    this.vidas = 6;
    this.palavraSecreta = [...palavraSecreta]; 
    this.palavra = this.palavraSecreta.map(() => "_");
  }

  aguardar() {
    const tempoSegundos = 2000;

    let data = Date.now();
    let dataAtual = null;

    do dataAtual = Date.now();
    while (dataAtual - data < tempoSegundos);
  }

  chutar(letra) {
    const chuteValido = this.validarChute(letra);

    const letraChutada = letra.toLowerCase();

    if (chuteValido) {
      this.letrasChutadas.push(letraChutada);

      if (this.palavraSecreta.includes(letraChutada)) {
        this.acertar(letraChutada);
      } else this.errar(letraChutada);
    }
  }

  validarChute(letra) {
    if (letra.length >= 2) {
      console.log("Por favor, digite uma letra por vez");

      this.aguardar();

      return false;
    }

    if (!letra.match(/[a-z]/i)) {
      console.log("Por favor, digite uma letra válida");

      this.aguardar();

      return false;
    }

    if (this.letrasChutadas.includes(letra)) {
      console.log("Você já chutou esta letra, tente uma letra diferente");

      this.aguardar();

      return false;
    }

    return true;
  }

  acertar(letraCorreta) {
    this.palavraSecreta.map((letra, i) => {
      if (letra === letraCorreta) {
        this.palavra[i] = letraCorreta;
      }
    });

    console.log("A letra "+ letraCorreta + " foi encontrada na palavra secreta");

    this.aguardar();
  }

  errar(letraIncorreta) {
    this.vidas--;


    console.log(
      "Que pena, a letra " + letraIncorreta + " não existe na palavra secreta"
    );

    this.aguardar();
  }


  buscarEstado() {
    if (this.palavra.join("") === this.palavraSecreta.join("")) {
      return "ganhou";
    } else if (this.vidas <= 0) {
      return "perdeu";
    }

    return "aguardando chute";
  }

  buscarDadosDoJogo() {
    console.clear();

  }

}

module.exports = Forca;