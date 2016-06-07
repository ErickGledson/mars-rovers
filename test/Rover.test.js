var Rover = require('../src/Entities/rover');

var rover = new Rover();

exports['posicao'] = function (test) {
    rover.controle.posicao('1 2 N');
    test.equal(rover.controle.movimento.x, 1);
    test.equal(rover.controle.movimento.y, 2);
    test.equal(rover.controle.orienta.atual, 'N');
    test.done();
};

exports['posicao_2'] = function (test) {
    rover.controle.exploracao('LMLMLMLMM');
    test.equal(rover.controle.orienta.atual, 'N');
    test.done();
};

exports['movimentacao'] = function (test) {
    rover.controle.posicao('1 2 N');
    rover.controle.exploracao('LMLMLMLMM');
    test.equal(rover.controle.movimento.x, 1);
    test.equal(rover.controle.movimento.y, 3);
    test.equal(rover.controle.orienta.atual, 'N');
    test.done();
};

exports['movimentacao_2'] = function (test) {
    rover.controle.posicao('3 3 E');
    rover.controle.exploracao('MMRMMRMRRM');
    test.equal(rover.controle.movimento.x, 5);
    test.equal(rover.controle.movimento.y, 1);
    test.equal(rover.controle.orienta.atual, 'E');
    test.done();
};

exports['movimentacao_3'] = function (test) {
    rover.controle.posicao('5 5 S');
    rover.controle.exploracao('MMLMLM');
    test.equal(rover.controle.movimento.x, 6);
    test.equal(rover.controle.movimento.y, 4);
    test.equal(rover.controle.orienta.atual, 'N');
    test.done();
};
