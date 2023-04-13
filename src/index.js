import './css/styles.css';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';

const inputForSearch = document.querySelector('#search-box');
const resultsOfSearch = document.querySelector('.country-list');
const checkedCounty = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputForSearch.addEventListener('input', debounce(inputCountry, 3000));

function inputCountry(country) {
  fetchCountries(country.target.value).then(data => createMarkup(data));
}

function createMarkup(data) {
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      return `
    <h2>
    <img width="25" height="20" alt="${flags.alt}" src="${flags.svg}"></img>
    ${name.official}
    </h2>
    <p>Capital:${capital}</p>
    <p>Population:${population}</p>
    <p>Languages:${Object.values(languages)}</p>`;
    })
    .join('');

  checkedCounty.insertAdjacentHTML('beforeend', markup);
}
