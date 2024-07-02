const ingredienti = [
  "Parmigiano",
  "Uova",
  "Cotolette",
  "Olive",
  "Carciofi",
  "Zucchine",
  "Tartufi",
];

const ListaSpesa = document.getElementById("lista-ingredienti");

let i = 0;
while (i < ingredienti.length) {
  const li = document.createElement("li");
  li.innerHTML = ingredienti[i];
  ListaSpesa.append(li);
  i++;
}
