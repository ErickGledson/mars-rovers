var Rover = require('./Entities/rover');

var r = new Rover();

r.controle.posicao('5 5');
r.controle.posicao('1 2 N');
r.controle.exploracao('LMLMLMLMM');
r.informacoes();
r.controle.posicao('3 3 E');
r.controle.exploracao('MMRMMRMRRM');
r.informacoes();
