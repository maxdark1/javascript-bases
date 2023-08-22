import { getHeroeById, getHeroesByOwner } from "./bases/08-imports";



const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000);
});


promesa.then((heroe) => {
    console.log("heroe", heroe); 
})
.catch(err => console.warn(err));