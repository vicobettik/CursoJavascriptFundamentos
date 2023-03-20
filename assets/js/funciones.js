function saludar(nombre) {
    console.log(arguments)
    console.log(`Hola ${nombre}`);
}

const saludar2 = function (nombre) {
    console.log(`Hola ${nombre}`);
}

const saludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`);
}

saludar('victor', 12, 'cdmx', 32);
saludar2('victor2');
saludarFlecha('Frida')