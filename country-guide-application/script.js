let searchBtn = document.getElementById('search-btn');
let inputField = document.getElementById('country-inp')

searchBtn.addEventListener('click',() => {
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
})