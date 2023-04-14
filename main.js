const paragraphs = [...document.querySelectorAll(".core .info article p")];
const cards = [...document.querySelectorAll(".core .info .cards .card")];
const menu = document.querySelector(".menu");
const nav = document.querySelector(".navigation-mobile");
const links = document.querySelector(".navigation-mobile .links");

paragraphs.forEach((p, i) => {
    p.addEventListener("click", () => {
        paragraphs.forEach(el => {
            el.classList.remove("active");
        })
        p.classList.add("active");
        cards[0].style.marginLeft = `-${i * 100}%`
    })
})
menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
        links.style.height = `${links.scrollHeight}px`;
    }
    else {
        links.style.height = 0;
    }
})