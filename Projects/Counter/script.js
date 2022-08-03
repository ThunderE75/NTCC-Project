const upvoteBtm = document.getElementById("upvote")
const downvoteBtm = document.getElementById("downvote")
const counterEl = document.getElementById("counter") 
let counter = 0

function incrementCount() {
    counter ++
    counterEl.innerText = counter
}

function decrementCount() {
    counter --
    counterEl.innerText = counter
}

upvoteBtm.addEventListener("click", incrementCount)
downvoteBtm.addEventListener("click", decrementCount)







