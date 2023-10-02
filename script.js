var char = document.getElementById("char")
var block = document.getElementById("block")

const jump = () => {
    if (char.classList != "animate") {
        char.classList.add("animate")
        setTimeout(function () {
            char.classList.remove("animate")
        }, 500)
    }
}

let checkDead = setInterval(function () {

    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"

        alert("u lose")
    };
}, 10)