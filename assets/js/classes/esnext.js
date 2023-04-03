class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const r1 = new Rectangulo(10, 15);
// r1.#area = 100;
console.log(r1);