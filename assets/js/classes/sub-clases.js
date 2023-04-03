class Persona {

    static _conteo = 0; 

    static get getConteo(){
        return `${Persona._conteo} instancias`;
    }

    static mensaje(){
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase= 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quiensoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.frase} es mi frase`);
    }
}


class Heroe extends Persona{
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quiensoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quiensoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Spy tu amigable vecino');
// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Spy tu amigable vecino');

console.log(spiderman)
spiderman.quiensoy()