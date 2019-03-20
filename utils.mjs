// export default function(valor){
//     return valor.toUpperCase();
// }

//No tiene nombre. Se lo damos al momento de la importación.
export default function (valor) 
{ 
    return valor.toUpperCase(); 
}

//export default (valor) => valor.toUpperCase()


// Los paréntesis son opcionales cuando sólo dispone de un argumento
const metodoDePrueba = (valor) => { return valor - 2 };


//Uso de Template literals
export const repeat = (string) => `${string} ${string}`;

let numeroMinimo = 1;

export const suma = `Resultado: ${1 + 2 + 3}`

export const decision = `Elijo ${metodoDePrueba(4) > numeroMinimo ? 'x' : 'y'}`


export const estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
