const body = document.body

body.style.height = window.innerHeight+"px"

const imgLength = 4
const randomNum = Math.floor(Math.random()*imgLength)
console.log(randomNum)
const randomImg = `image/${randomNum}.jpg`

const img = document.createElement("img")
img.src = randomImg
img.classList.add("bgImage")
body.append(img)