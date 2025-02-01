const titleInput = document.getElementById("titleInput");
const textInput = document.getElementById("textInput");
const cardsContainer = document.getElementById("cardsContainer");

const handleAdd = () => {
  const title = titleInput.value;
  const text = textInput.value;
  if (title.length < 3 || title.length > 30) {
    alert("The title must be more then 3 and less than 30 letter long.");
    return;
  }
  if (text.length < 15 || text.length > 150) {
    alert(
      "The description must be more then 15 and less than 150 letter long."
    );
    return;
  }
  createCard(title, text, false);

  saveCardData(title, text);
};

const createCard = (title, text, defaultChecked) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "remove";
  buttonElement.classList.add("btn", "btn-primary", "btn-xs", "md:btn-sm");

  buttonElement.onclick = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
    removeCardData(title, text);
  };

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("card-actions", "justify-between");
  buttonDiv.appendChild(buttonElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("break-all");
  paragraphElement.innerText = text;

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox", "checkbox-primary");
  checkbox.type = "checkbox";
  checkbox.defaultChecked = defaultChecked;

  const headingElement = document.createElement("h2");
  headingElement.classList.add("card-title", "break-all");
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

  const handleTextStrike = (Checked, cardBody) => {
    const currentCardTitle = cardBody.querySelector(".card-title");
    const currentCardPara = cardBody.querySelector("p");

    currentCardTitle.style.textDecoration = Checked ? "line-through" : "none";
    currentCardPara.style.textDecoration = Checked ? "line-through" : "none";
  };

  checkbox.onchange = (event) => {
    const isChecked = event.target.checked;

    const currentCardBody =
      event.target.parentElement.parentElement.parentElement;

    const savedCards = JSON.parse(localStorage.getItem("CARD_DATA"));

    for (const card of savedCards) {
      if (card.title === title && card.text === text) {
        card.isChecked = isChecked;
      }
    }
    localStorage.setItem("CARD_DATA", JSON.stringify(savedCards));

    handleTextStrike(isChecked, currentCardBody);
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

  handleTextStrike(checkbox.checked, outerDiv);
};

const saveCardData = (cardTitle, cardText) => {
  const cardData = { title: cardTitle, text: cardText, isChecked: false };

  const oldCardData = localStorage.getItem("CARD_DATA");

  if (!oldCardData) {
    localStorage.setItem("CARD_DATA", JSON.stringify([cardData]));
  } else {
    const oldCardDataParsed = JSON.parse(oldCardData);
    const updatedCardData = [...oldCardDataParsed, cardData];

    localStorage.setItem("CARD_DATA", JSON.stringify(updatedCardData));
  }
};

const removeCardData = (cardTitle, cardText) => {
  const oldCardData = localStorage.getItem("CARD_DATA");

  const oldCardDataParsed = JSON.parse(oldCardData);

  const updatedCardData = oldCardDataParsed.filter(
    (c) => !(c.title === cardTitle && c.text === cardText)
  );

  localStorage.setItem("CARD_DATA", JSON.stringify(updatedCardData));
};

const loadSavedCards = () => {
  const savedCardData = localStorage.getItem("CARD_DATA");

  const savedCardDataParsed = JSON.parse(savedCardData);

  for (const cardData of savedCardDataParsed) {
    createCard(cardData.title, cardData.text, cardData.isChecked);
  }
};

loadSavedCards();
