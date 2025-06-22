
const nav = document.querySelector("nav")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const h3 = document.querySelector("h4")

function colors(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    
    let result = `rgb(${r}, ${g}, ${b})`
    
    return result;
}

document.addEventListener("keydown", function(e){
    const bodycolor = colors()
    const navcolor = colors()

    if(e.key === "Enter"){
        h3.textContent = `Body colors:${bodycolor} / Nav colors:${navcolor}`

        body.style.background = bodycolor
        nav.style.background = navcolor
    }
})

