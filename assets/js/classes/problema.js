const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre:${this.nombre} - Edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30,
    imprimir(){
        console.log(`Nombre:${this.nombre} - Edad: ${this.edad}`)
    }
}

// fer.imprimir();
// pedro.imprimir();

function Persona (nombre, edad) {
    console.log('foo')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre:${this.nombre} - Edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir()