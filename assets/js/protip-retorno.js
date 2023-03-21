// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) =>  ({nombre, apellido})

const imprimeArgumentos = (...args) => {
    // console.log(args)
    return args;
} 

const persona = crearPersona('Victor', 'Fuentes Menes')
console.log(persona)

let [casado, vivo, nombre] = imprimeArgumentos('victor', 'fuentes', 33);
console.log({casado, vivo, nombre})

const {apellido: nuevoApellido} = crearPersona('Victor', 'Fuentes Menes')
console.log({nuevoApellido});

const personaje = {
    nombre: 'Victor',
    codeName: 'vicobettik',
    vivo: true,
    edad: 33,
    trajes: ['mk-1', 'hulkbuster', 'mk-5'],
    'ultima-pelicula': 'Avengers'
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.edad);
// }

const imprimePropiedades = ({nombre, codeName, edad = 15}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({edad});
}

imprimePropiedades(personaje);