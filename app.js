const titleInput = document.getElementById("titleInput");
const textInput = document.getElementById("textInput");
const cardsContainer = document.getElementById("cardsContainer");

const handleAdd = () => {
  const title = titleInput.value;
  const text = textInput.value;
  if (title.length < 4 || title.length > 20) {
    alert("The title must be more then 4 and less than 20 letter long.");
    return;
  }
  if (text.length < 25 || text.length > 75) {
    alert("The description must be more then 25 and less than 75 letter long.");
    return;
  }
  createCard(title, text);
};

const createCard = (title, text) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "remove";
  buttonElement.classList.add("btn", "btn-primary", "btn-xs", "md:btn-sm");

  buttonElement.onclick = (event) =>
    event.target.parentElement.parentElement.remove();

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("card-actions", "justify-between");
  buttonDiv.appendChild(buttonElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = text;

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox", "checkbox-primary");
  checkbox.type = "checkbox";

  const headingElement = document.createElement("h2");
  headingElement.classList.add("card-title");
  headingElement.innerText = title;

  const headingDiv = document.createElement("div");
  headingDiv.classList.add("flex", "gap-2", "items-center");
  headingDiv.appendChild(checkbox);
  headingDiv.appendChild(headingElement);

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");
  cardBodyDiv.appendChild(headingDiv);
  cardBodyDiv.appendChild(paragraphElement);
  cardBodyDiv.appendChild(buttonDiv);

  checkbox.onchange = (event) => {
    const isChecked = event.target.checked;

    const currentCardBody =
      event.target.parentElement.parentElement.parentElement;

    const currentCardTitle = currentCardBody.querySelector(".card-title");
    const currentCardPara = currentCardBody.querySelector("p");

    if (isChecked) {
      currentCardTitle.style.textDecoration = "line-through";
      currentCardPara.style.textDecoration = "line-through";
    } else {
      currentCardTitle.style.textDecoration = "none";
      currentCardPara.style.textDecoration = "none";
    }
  };

  const outerDiv = document.createElement("div");
  outerDiv.classList.add(
    "card",
    "bg-neutral",
    "w-full",
    "md:w-96",
    "shadow-xl"
  );
  outerDiv.appendChild(cardBodyDiv);

  cardsContainer.appendChild(outerDiv);

  titleInput.value = "";
  textInput.value = "";
};
