const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

// console.warn('Not o negacion');
// console.log(true)
// console.log(!true)
// console.log(!false)
// console.log(!regresaTrue())

// console.warn('And');
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log('============');
// console.log(regresaFalse() && regresaTrue());

// console.warn('Or');
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'Mundo' &&soyFalso
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});
console.log({a5});