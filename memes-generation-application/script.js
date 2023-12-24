let meme = document.getElementById('meme');
let title = document.getElementById('title');
let getMemeBtn = document.getElementById('get-meme-btn');

let url = "https://meme-api.com/gimme/wholesomememes";

async function getMeme() {
    try {
        const res = await fetch(url);
        const response = await res.json();

        const heading = response.title;
        const img = response.url;
        title.innerText = heading
        meme.src = img;
    } catch (error) {
        console.log(error)
    }

}

getMemeBtn.addEventListener('click',getMeme);
window.addEventListener('onload',getMeme);

getMeme();