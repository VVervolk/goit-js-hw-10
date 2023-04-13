export function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
// ({ name, capital, population, flags, languages })
// name
