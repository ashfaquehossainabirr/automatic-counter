// const counter = document.querySelectorAll(".counter")
// const counterArray = Array.from(counter)
// const audio = new Audio('./audio/alert.mp3')
// const display = document.querySelector(".output-display")

// function startCount() {
//     counterArray.map((counterItem => {
//         let count = 0
    
//         function increment() {
//             count++
//             counterItem.innerHTML = count
    
//             if(count === Number(counterItem.dataset.number)) {
//                 console.log(counterItem.dataset.item + ": Completed!")
//                 display.style.opacity = "1"
//                 display.style.visibility = "visible"
//                 display.innerHTML = `${counterItem.dataset.item}: Completed`
//                 clearInterval(countInterval)
//                 audio.play()

//                 setTimeout(() => {
//                     display.style.opacity = "0"
//                     display.style.visibility = "invisible"
//                     display.innerHTML = ""
//                 }, 4000)
//             }
//         }
    
//         const countInterval = setInterval(increment, counterItem.dataset.time)
//     }))
// }

// function reloadFunc() {
//     window.location.reload()
// }



const counter = document.querySelectorAll(".counter")
const counterArray = Array.from(counter)
const audio = new Audio('./audio/alert.mp3')
const display = document.querySelector(".output-display")

function startCount() {
    counterArray.forEach(counterItem => {
        let count = 0
        const countInterval = setInterval(increment, counterItem.dataset.time)

        function increment() {
            count++
            counterItem.innerHTML = count

            if (count === Number(counterItem.dataset.number)) {
                console.log(`${counterItem.dataset.item}: Completed!`)
                display.style.opacity = "1"
                display.style.visibility = "visible"

                // Append instead of replace
                const message = document.createElement("div")
                message.className = "msg"

                message.innerHTML = `${counterItem.dataset.item}: Completed`
                display.appendChild(message)

                clearInterval(countInterval)
                audio.play()

                // Optional: Hide the display after all counters finish
                const allDone = counterArray.every(c =>
                    Number(c.innerHTML) === Number(c.dataset.number)
                )

                if (allDone) {
                    setTimeout(() => {
                        display.style.opacity = "0"
                        display.style.visibility = "hidden"
                        display.innerHTML = ""
                    }, 4000)
                }
            }
        }
    })
}

function reloadFunc() {
    window.location.reload()
}
