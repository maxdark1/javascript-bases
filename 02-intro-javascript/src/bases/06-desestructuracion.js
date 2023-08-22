const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

const { nombre: nombre2 } = persona;

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
console.log(nombre2);

const usarContexto = ({nombre, edad, rango = 'Capitan', clave}) => {
    console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad
    }
}

const {nombreClave, anios} = usarContexto(persona);

console.log(nombreClave, anios);