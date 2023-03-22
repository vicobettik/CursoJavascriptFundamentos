const elMayor = (a,b) => (a < b) ? b : a;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(8,4));
console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'peter',
    'tony',
    'dr strange',
    (amigo) ? 'thor' : 'loki'
]

console.log(amigosArr);

const nota = 91; // a+ , a, b, c
const grado = (nota >= 95) ? 'A+' :
                (nota >= 90) ? 'A' :
                (nota >= 85) ? 'B+' :
                (nota >= 80) ? 'B' :
                (nota >= 75) ? 'C+' :
                (nota >= 70) ? 'C' :
                'F';
console.log({nota, grado})                