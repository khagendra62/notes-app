const titleInput = document.getElementById("titleInput")
const textInput = document.getElementById("textInput")
const cardsContainer = document.getElementById("cardsContainer")
// const cardsContainer = document.querySelector("#cardsContainer")

function handleAdd() {
    const title = titleInput.value
    const text = textInput.value

    //     <div class="card bg-base-100 w-96 shadow-xl">
    //         <div class="card-body">
    //             <h2 class="card-title">Card title!</h2>
    //             <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div class="card-actions justify-end">
    //                 <button class="btn btn-primary">Buy Now</button>
    //                 <label class="label cursor-pointer">
    //                      <span class="label-text">Remember me</span>
    //                      <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
    //                  </label>
    //             </div>
    //         </div>
    //     </div>

    const buttonElement = document.createElement("button")
    buttonElement.innerText = "remove"
    buttonElement.classList.add("btn", "btn-primary")

    buttonElement.onclick = function (event) {
        const currentCardBody = event.target.parentElement.parentElement
        currentCardBody.remove()
    }

    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox"
    checkboxInput.classList.add("checkbox", "checkbox-primary")

    const checkboxSpan = document.createElement("span")
    checkboxSpan.innerText = "Mark as done"
    checkboxSpan.classList.add("label-text")

    checkboxInput.onchange = function (event) {
        const isChecked = event.target.checked

        const currentCardBody = event.target.parentElement.parentElement.parentElement

        // const currentCardTitle = currentCardBody.getElementsByClassName("card-title")[0]
        const currentCardTitle = currentCardBody.querySelector(".card-title")
        const currentCardPara = currentCardBody.querySelector("p")

        if (isChecked) {
            currentCardTitle.style.textDecoration = "line-through"
            currentCardPara.style.textDecoration = "line-through"
        } else {
            currentCardTitle.style.textDecoration = "none"
            currentCardPara.style.textDecoration = "none"
        }
    }

    const labelElement = document.createElement("label")
    labelElement.classList.add("label", "cursor-pointer")
    labelElement.appendChild(checkboxSpan)
    labelElement.appendChild(checkboxInput)

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("card-actions", "justify-between")
    buttonDiv.appendChild(buttonElement)
    buttonDiv.appendChild(labelElement)

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

    clearInputs()
}

function clearInputs() {
    titleInput.value = ""
    textInput.value = ""
}