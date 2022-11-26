/* -------------- BACK-END -------------- */
function APICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Llamado a API resuelto");
      resolve({ item: "Item A", price: 5000 });
      /* reject("Error en la api"); */
    }, 2000);
  });
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.");

async function leerDatos() {
  /* APICall().then( respuesta => hacerAlgo(respuesta)) */
  let respuesta = await APICall();
  console.log(respuesta);
}

leerDatos();

console.log("App finalizada.");
