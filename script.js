document.getElementById("myButton").addEventListener("click", function() {
    let randomColor= Math.floor(Math.random()*16777215);
    this.style.backgroundColor = "#" + randomColor.toString(16).padStart(6, "0");
    document.body.style.backgroundColor = "#" + (16777215 - randomColor).toString(16).padStart(6, "0");
});

document.getElementById("hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
});
