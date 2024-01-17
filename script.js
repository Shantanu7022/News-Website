let API_KEY = "4ea8e2d58ed04302a1f66dde621a7342";
let cardData = document.querySelector(".cardData")

const getData = async() =>{
    let res =await fetch(`https://newsapi.org/v2/everything?q=virat&apiKey=${API_KEY}`);
    let jsonData =await res.json();
    console.log(jsonData.articles[0]);

    jsonData.articles.forEach(function(article){
        console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>

    `
    })

    
}

getData()