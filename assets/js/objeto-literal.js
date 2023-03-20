const personaje = {
    nombre: 'Victor',
    codeName: 'vicobettik',
    vivo: true,
    edad: 33,
    coords: {
        lat: 34.12,
        long: -123.34
    },
    trajes: ['mk-1', 'hulkbuster', 'mk-5'],
    direccion: {
        zip: '1080',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Avengers'
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre']);
console.log(personaje.edad);

console.log(`Numero de trajes ${personaje.trajes.length}`);
console.log(`Ultimo traje ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = 'vivo';
console.log(`Vivo: ${personaje.vivo}`)    

console.log(personaje["ultima-pelicula"])

////////////////

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);
personaje.dinero = 123142346.132;
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);
