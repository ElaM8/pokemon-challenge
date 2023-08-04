import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const pokemonContainer = document.querySelector(".card-container");
const inputField = document.createElement("input");
pokemonContainer?.appendChild(inputField)
inputField.id = "filterForPokemon";
const filterInput = document.querySelector<HTMLInputElement>("#filterForPokemon") //this is where my error is

if (!pokemonContainer ||
    !inputField ||
    !filterInput) {
  throw new Error("issue with selector")
}

const render = (pokemonArray: Pokemon[]) => {
  for (let i = 0; i < pokemonArray.length; i++) {
const template = `
<div class="card">
<img class="class"card__image" src=${pokemonArray[i].sprite}>
<div class="card__content">
<h2 class"card__heading">${pokemonArray[i].name}</h2>
<p class"card__text>${pokemonArray[i].name} (${pokemonArray[i].id}) is a ${pokemonArray[i].types} type pokemon.</p>
</div>
</div>
`;
// or map over it might be neater

pokemonContainer.innerHTML += template;
  }
}

const getUserInput = (e: Event) => {
  console.log(e.currentTarget.inputEvent)
  const userInput = (e.target as HTMLInputElement).value  //event.currentTarget.value doesnt work because the input field is dynamically created?
  console.log(userInput)
  filterPokemon(userInput);
}

const filterPokemon = (userInput: string) => {
  const filteredPokemon = pokemonArray.filter(p => {
    return p.name.includes(userInput);
  });
render(filteredPokemon);
};

// document.addEventListener("input", getUserInput) // this gives the timing violation error

filterInput.addEventListener("input", getUserInput);

render(pokemonArray)
