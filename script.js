document.getElementById("myButton").addEventListener("click", function() {
    let randomColor= Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
});

document.getElementById("hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
});

/*
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {  // 🔥 `hamburger` と `menu` が null でないことを確認
        hamburger.addEventListener("click", function () {
            this.classList.toggle("active");
            menu.classList.toggle("active");
        });
    } else {
        console.error("要素が見つかりません: hamburger または menu");
    }
});
*/
