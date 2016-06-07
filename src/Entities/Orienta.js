var Orienta = function() {

    this.ORIENTACAO = {
        NORTE: "N",
        SUL: "S",
        LESTE: "E",
        OESTE: "W"
    };

    this.atual = this.ORIENTACAO.NORTE;

    this.REORIENTAR = { L: "L", R: "R" };
}

Orienta.prototype.orientar = function (lado) {
    switch (this.atual) {
        case this.ORIENTACAO.NORTE:
            this.atual = (lado == this.REORIENTAR.L ? this.ORIENTACAO.OESTE : this.ORIENTACAO.LESTE);
            break;
        case this.ORIENTACAO.SUL:
            this.atual = (lado == this.REORIENTAR.L ? this.ORIENTACAO.LESTE : this.ORIENTACAO.OESTE);
            break;
        case this.ORIENTACAO.LESTE:
            this.atual = (lado == this.REORIENTAR.L ? this.ORIENTACAO.NORTE : this.ORIENTACAO.SUL);
            break;
        case this.ORIENTACAO.OESTE:
            this.atual = (lado == this.REORIENTAR.L ? this.ORIENTACAO.SUL : this.ORIENTACAO.NORTE);
            break;
    }
};


module.exports = new Orienta();
