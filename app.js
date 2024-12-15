const titleInput = document.getElementById("titleInput")
const textInput = document.getElementById("textInput")
const cardsContainer = document.getElementById("cardsContainer")

function handleAdd() {
    const title = titleInput.value
    const text = textInput.value

    //     <div class="card bg-base-100 w-96 shadow-xl">
    //         <div class="card-body">
    //             <h2 class="card-title">Card title!</h2>
    //             <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div class="card-actions justify-end">
    //                 <button class="btn btn-primary">Buy Now</button>
    //             </div>
    //         </div>
    //     </div>

    const buttonElement = document.createElement("button")
    buttonElement.innerText = "remove"
    buttonElement.classList.add("btn", "btn-primary")

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("card-actions", "justify-end")
    buttonDiv.appendChild(buttonElement)

    const paragraphElement = document.createElement("p")
    paragraphElement.innerText = text

    const headingElement = document.createElement("h2")
    headingElement.classList.add("card-title")
    headingElement.innerText = title

    const cardBodyDiv = document.createElement("div")
    cardBodyDiv.classList.add("card-body")
    cardBodyDiv.appendChild(headingElement)
    cardBodyDiv.appendChild(paragraphElement)
    cardBodyDiv.appendChild(buttonDiv)

    const outerDiv = document.createElement("div")
    outerDiv.classList.add("card", "bg-base-100", "w-96", "shadow-xl")
    outerDiv.appendChild(cardBodyDiv)

    cardsContainer.appendChild(outerDiv)

}
