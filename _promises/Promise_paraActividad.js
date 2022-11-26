/* -------------- BACK-END -------------- */
function APICall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Llamado a API resuelto");
      resolve({ item: "Item A", price: 5000 });
    }, 2000);
  });
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.");

APICall().then((respuesta) => {
  console.log(respuesta);
});

console.log("App finalizada.");
