let listaSpesa = ["latte","uova","pane","mele","carote"];

let i = 0

const listaDom = document.getElementById("lista");

while (i < listaSpesa.length) {
   listaDom.innerHTML += `<li>${listaSpesa[i]}</li>`
   i++;    
}

const aggiungiDom = document.querySelector('#aggiungi');

aggiungiDom.addEventListener('click',
   function () {
      const elementoInputDom = document.getElementById('elementoInput').value;
      listaSpesa.push (elementoInputDom);
      listaDom.innerHTML += `<li>${elementoInputDom}</li>`
   }
)

