
let rgbcolors = function rgbColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return colors = `rgb(${red}, ${green}, ${blue})`
}
const container  = document.getElementById('body')
const btn = document.getElementById('btn');


    
btn.addEventListener('click', function(){
    container.style.backgroundColor = rgbcolors();
})
