let nombres = [];

const inputNombre = document.getElementById("nombre");
const textareaNombres = document.getElementById("nombresOrdenados");

function agregarNombre() {
    const textoValor = inputNombre.value.trim();

    if (textoValor === "") {
        alert("Por favor ingrese al menos un nombre válido.");
        return;
    }
    // 1. El método .split(',') divide la cadena en un array de strings basados en la coma.
    const nuevosNombres = textoValor.split(',');

    // 2. Recorrer cada elemento encontrado, limpiar espacios en blanco y agregarlos al array principal
    nuevosNombres.forEach(nombre => {
        const nombreLimpiado = nombre.trim();
        if (nombreLimpiado !== "") {
            nombres.push(nombreLimpiado);
        }
    });

    // 3. Ordenar el arraya para ordenar los nombres alfabeticamente, considerando los acentos y el idioma español como lo es la ñ
    nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    // 4. Actualizar el textarea con cada nombre en una nueva línea y limpiar el input
    textareaNombres.value = nombres.join("\n");
    inputNombre.value = "";
    inputNombre.focus();
}

function borrarNombres() {
    nombres = [];
    textareaNombres.value = "";
    inputNombre.value = "";
    inputNombre.focus();
}