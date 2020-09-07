
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

const gameContainer = document.querySelector(".gameContainer");

const url = "https://api.rawg.io/api/games/" + id;
console.log(url);
const newUrl = url.trimRight();
async function callApi(){

    const response = await fetch(newUrl);
    const results = await response.json();
    // const game = results.results;

    console.log(results);

    const html = `
        <div><h4> ${results.name}</h4></div>
        <img src= "${results.background_image}" alt="image"</img>
        <div> Rating: ${results.rating} </div>
        <time> Released: ${results.released} </time>
        `;

        gameContainer.innerHTML = html;  
 }

 callApi();
 
