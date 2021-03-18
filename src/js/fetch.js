const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountryByName(searchQuery) {
    return fetch(`${BASE_URL}/${searchQuery}`).then(responce => {
        return responce.json();
    });
};
