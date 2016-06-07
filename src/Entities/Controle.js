var Orienta = require('./Orienta');
var Movimenta = require('./Movimenta');

var Controle = function() {
    this.orienta = Orienta;
    this.movimento = Movimenta;
}

Controle.prototype.posicao = function(posicao) {
    var data = posicao.split(" ");

    this.movimento.x = parseInt(data[0]) || 0;
    this.movimento.y = parseInt(data[1]) || 0;
    this.orienta.atual = data[2] || this.orienta.atual;
};

Controle.prototype.exploracao = function(comandos) {
    var comandosArray = comandos.split('');

    for (var i in comandosArray) {
        var item = comandosArray[i];

        if (item == 'M')
            this.movimento.movimentar(this.orienta.atual, this.orienta.ORIENTACAO);
        else if (this.orienta.REORIENTAR.hasOwnProperty(item))
            this.orienta.orientar(item);
    }
};


module.exports = new Controle();
