var Movimenta = function() {
    this.x = 0;
    this.y = 0;
}

Movimenta.prototype.movimentar = function (orientacaoAtual, orientacoes) {
    switch (orientacaoAtual) {
        case orientacoes.NORTE:
            ++this.y;
            break;
        case orientacoes.SUL:
            --this.y;
            break;
        case orientacoes.LESTE:
            ++this.x;
            break;
        case orientacoes.OESTE:
            --this.x;
            break;
    }
};


module.exports = new Movimenta();
