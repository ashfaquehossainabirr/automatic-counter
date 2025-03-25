const counter = document.querySelector(".counter")

let count = 0

function setCount(num) {
    let result

    if(count === num) {
        result = count
        clearInterval(countInterval)
        console.log("Finished Count: " + result)
        return counter.innerHTML = result
    } else {
        result = count++
        console.log(result)
        return counter.innerHTML = result
    }
}

let countInterval = setInterval(() => {
    setCount(50)
}, 18)