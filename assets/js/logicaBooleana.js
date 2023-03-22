const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o negacion');
console.log(true)
console.log(!true)
console.log(!false)
console.log(!regresaTrue())

console.warn('And');
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('============');
console.log(regresaFalse() && regresaTrue());

console.warn('Or');
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)