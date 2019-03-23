export default {

    ordenarPorEdad: (alumnos, esAscendente) => {
        return alumnos.sort((alumno1, alumno2) => {
            return esAscendente ? alumno1.edad - alumno2.edad : alumno2.edad - alumno1.edad
        })
    },

    //Filtra las personas menores a 18 años.
    prohibidoPasar: (alumnos) => { return alumnos.filter(alumno => !esMayorDeEdad(alumno)) },

    //Comprobar la clave del alumno contra una clave interna de la institución. Matricular solo si el alumno es mayor de edad.
    //En caso de exito, devolver el mensaje "El alumno <NOMBRE> ha sido matriculado con la clave <CLAVE>"
    //En caso de no tener 18 o mas ó que la clave sea incorrecta, informar el mensaje que corresponda.
    matricular: (alumno, clave) => {
        let resultado = "La clave es incorrecta.";
        if (!esMayorDeEdad(alumno)) {
            resultado = `El alumno ${alumno.nombre} no es mayor de edad`
        }
        else {
            if (clave == clavePrivada) {
                resultado = `El alumno ${alumno.nombre} ha sido matriculado con la clave ${clave}`
            }
        }
        return resultado;
    },

    existeAlumno: (alumnos, alumnoBuscado) => {
        let alumnoEncontrado = alumnos.find(alumno => {
            return alumno.nombre == alumnoBuscado.nombre && alumno.edad == alumnoBuscado.edad;
        });

        return alumnoEncontrado != null;
    }
}

function esMayorDeEdad(alumno) {
    return alumno.edad >= 18;
}
const clavePrivada = "NT2_2019"