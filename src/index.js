import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const inputForSearch = document.querySelector('#search-box');
const resultsOfSearch = document.querySelector('.country-list');
const checkedCounty = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;
const NOTYFY_OPTIONS = {
  position: 'center-top',
  timeout: '2000',
  showOnlyTheLastOne: true,
};

inputForSearch.addEventListener(
  'input',
  debounce(inputValueChecker, DEBOUNCE_DELAY)
);

function inputValueChecker(e) {
  if (!e.target.value.trim()) {
    clearProposVariants();
    clearRequestedCountry();
    return;
  }

  fetchCountries(e.target.value.trim())
    .then(data => dataCheck(data))
    .catch(error =>
      Notify.failure('Oops, there is no country with that name', NOTYFY_OPTIONS)
    );
}

function dataCheck(data) {
  if (data.length > 10) {
    clearProposVariants();
    return Notify.info(
      'Too many matches found. Please enter a more specific name.',
      NOTYFY_OPTIONS
    );
  } else if (!(data.length === 1)) {
    clearRequestedCountry();
    return createMarkupProposVariants(data);
  } else if (data.length === 1) {
    clearProposVariants();
    return createMarkupRequestedCountry(data);
  }
}

function createMarkupProposVariants(data) {
  clearProposVariants();
  const markupVariants = data
    .map(({ name, flags }) => {
      return `
    <h2>
    <img width="25" height="20" alt="${flags.alt}" src="${flags.svg}"></img>
    ${name.official}
    </h2>
    `;
    })
    .join('');

  resultsOfSearch.insertAdjacentHTML('beforeend', markupVariants);
}

function createMarkupRequestedCountry(data) {
  clearRequestedCountry();
  const markupRequestedCountry = data
    .map(({ name, capital, population, flags, languages }) => {
      return `
    <h2 class="country-info__title">
    <img width="25" height="20" alt="${flags.alt}" src="${flags.svg}"></img>
    ${name.official}
    </h2>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>`;
    })
    .join('');

  checkedCounty.insertAdjacentHTML('beforeend', markupRequestedCountry);
}

function clearProposVariants() {
  resultsOfSearch.innerHTML = '';
}

function clearRequestedCountry() {
  checkedCounty.innerHTML = '';
}
