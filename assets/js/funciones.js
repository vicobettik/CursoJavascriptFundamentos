function saludar(nombre) {
    console.log(arguments)
    console.log(`Hola ${nombre}`);
    return [1,2,3,4,5];
}

const saludar2 = function (nombre) {
    console.log(`Hola ${nombre}`);
}

const saludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`);
}

const sumar = (a,b) =>  a + b;

const getAleatorio = () => Math.random();

const retornoSaludar = saludar('victor', 12, 'cdmx', 32);
console.log(retornoSaludar);

console.log(sumar(3,5));
console.log(getAleatorio());
// saludar2('victor2');
// saludarFlecha('Frida')