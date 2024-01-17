const API_KEY = "4ea8e2d58ed04302a1f66dde621a7342";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData(query){
    const result = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await result.json();
    console.log(data);
}

fetchData("all")

let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})

