var Controle = require('./Controle');

var Rover = function () {
    this.controle = Controle;
}

Rover.prototype.informacoes = function () {
    console.log(this.controle.movimento.x + ' ' + this.controle.movimento.y + ' ' + this.controle.orienta.atual);
};

module.exports = Rover;
