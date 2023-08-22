//Las funciones se asignan a constantes para evitar que su valor sea sobreescrito en otra parte del codigo
const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre} con flecha`;
}

const saludar3 = (nombre) => `Hola ${nombre} con less code`;

const saludar4 = () => `Hola sin Parametros`;

console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'papi1501'
    });    


console.log(getUser());

//Tarea transformar  a funcion de flecha
//Retornar objeto implicito
//pruebas

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC123',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Juan');

console.log(usuarioActivo)