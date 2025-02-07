document.getElementById("myButton").addEventListener("click", function() {
    let randomColor= Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
});

document.getElementById("hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
});
