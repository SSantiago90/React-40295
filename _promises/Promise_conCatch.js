/* -------------- BACK-END -------------- */
function APICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Llamado a API resuelto");
      /*  resolve({ item: "Item A", price: 5000 }); */
      reject("Error en la api");
    }, 2000);
  });
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.");

APICall()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((errorMessage) => {
    console.log("Error:", errorMessage);
  })
  .finally(() => console.log("Promise terminada"));

console.log("App finalizada.");
