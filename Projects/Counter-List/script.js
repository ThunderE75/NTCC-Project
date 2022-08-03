const upvoteBtm = document.getElementById("upvote")
const downvoteBtm = document.getElementById("downvote")
const counterEl = document.getElementById("counter")
const ulEl = document.getElementById("list-items")
let counter = 0

function incrementCount() {
    counter++
    counterEl.innerText = counter

    // create an element
    const li = document.createElement("li")
    const textNode = document.createTextNode('Item No. ' + counter)

    // for bold
    const b = document.createElement("b")


    // append the element
    ulEl.appendChild(li)
    li.setAttribute("data-counter", counter)  // adds a custom attribute, that stores the value of the counter (basically used for indexing)
    li.appendChild(textNode)

    //for bold text
    // ulEl.appendChild(li)
    // b.appendChild(textNode)
    // li.appendChild(b)
}

function decrementCount() {
    const li = ulEl.querySelector('[data-counter="' + counter + '"]')
    // const number = parseInt(li.getAttribute('data-counter'), 10)
    // can be used for logic

    li.remove()


    counter--
    counterEl.innerText = counter
}

upvoteBtm.addEventListener("click", incrementCount)
downvoteBtm.addEventListener("click", decrementCount)


/** Topics Covered 
 *  - getElementById()
 *  - createElement()
 *  - createTextNode()
 *  - setAttribute()
 *  
 *  - appendChild()
 *  - remove()
*/





