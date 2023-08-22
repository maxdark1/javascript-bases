const personajes = ['Goku','Vegeta','Trunks'];

const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;

console.log(p1,p2,p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

//Tarea
const usaEstado = (valor) => {
    return [valor, ()=> {console.log("hola mundo")}];
}

const arr = usaEstado('Goku');
console.log(arr);

arr[1]();


const [nombre, setNombre] = usaEstado('Juan');
console.log(nombre);

setNombre();
