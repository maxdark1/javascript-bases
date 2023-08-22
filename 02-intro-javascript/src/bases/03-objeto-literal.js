const persona = {
    nombre: "Juan",
    apellido: "Lara",
    edad: 45,
    direccion: {
        ciudad: 'Monterrey',
        zip: 67169,
        lat: 14.2342343,
        lgn: 34.34234234
    }
};


const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);