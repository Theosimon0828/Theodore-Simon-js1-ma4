
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

newId = id.slice(0,-1);


const gameContainer = document.querySelector(".gameContainer");

const url = "https://api.rawg.io/api/games/" + newId;
console.log(url);
async function callApi(){

    const response = await fetch(url);
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
 
