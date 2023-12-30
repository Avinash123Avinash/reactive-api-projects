const input = document.querySelector('input');
const button = document.getElementById('submit-button');
const showContainer = document.querySelector('#show-container');
const list = document.querySelector('.list');

let date = new Date();
console.log(date.getTime());

const [timestamp, apikey, hashvalue] = [ts, publickey, hash];

button.addEventListener('click', getResult);

function getResult() {
    input.value1 = input.value.trim();
    if(input.value1.length < 1) {
        console.log("Input cannot be blank");
        return;
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/charactersts=${timestamp}?apikey=${apikey}&hash=${hashvalue}&name=${input.value}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        jsonData.data["results"].forEach(element => {
            showContainer.innerHTML = `
            <div class="card-container">
            <div class="container-character-image">
            <img src="${
              element.thumbnail["path"] + "." + element.thumbnail["extension"]
            }"/></div>
            <div class="character-name">${element.name}</div>
            <div class="character-description">${element.description}</div>
            </div>
            `
        });
    });
}

window.onload = () => {
    getResult();
}