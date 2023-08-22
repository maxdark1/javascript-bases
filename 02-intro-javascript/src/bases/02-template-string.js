console.log('???');



const nombre = 'Juan';
const apellido = 'Lara';
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoTemplate = `Hola 
${nombre} 
${apellido}
${1+1}`;

console.log(nombreCompleto);
console.log(nombreCompletoTemplate);

function getSaludo(){
    return 'Hola Mundo';
}

console.log(`Este es un Texto: ${getSaludo()}`)