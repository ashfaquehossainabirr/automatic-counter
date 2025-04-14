// const counter = document.querySelector(".counter")

// let count = 0

// function setCount(num) {
//     let result

//     if(count === num) {
//         result = count
//         clearInterval(countInterval)
//         console.log("Finished Count: " + result)
//         return counter.innerHTML = result
//     } else {
//         result = count++
//         console.log(result)
//         return counter.innerHTML = result
//     }
// }

// let countInterval = setInterval(() => {
//     setCount(50)
// }, 18)



const counter = document.querySelectorAll(".counter")
const counterArray = Array.from(counter)

counterArray.map((counterItem => {
    let count = 0

    function increment() {
        count++
        counterItem.innerHTML = count

        if(count === Number(counterItem.dataset.number)) {
            console.log(counterItem.dataset.item + ": Completed!")
            clearInterval(countInterval)
        }
    }

    const countInterval = setInterval(increment, counterItem.dataset.time)
}))