const url = ("https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating");
const container = document.querySelector(".container");

async function Apicall(){

    const response = await fetch(url);
    const results = await response.json();
    const game = results.results;

    console.log(game);

    for(let i =0; i<game.length; i++ ){

        const html = `
        <a href = "question3.html?id=${game[i].id})">
        <div><h4> ${game[i].name}</h4></div>
        <img src= "${game[i].background_image}" alt="image"</img>
        <div> Rating: ${game[i].rating} </div>
        <time> Released: ${game[i].released}  </time>
        </a>
        `
        container.innerHTML += html;  
    }
}

Apicall();