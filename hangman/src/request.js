import 'babel-polyfill'
//With fetch and await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`); 
        if (response.status === 200) {
            const data = await response.json();
            return data.puzzle
        } else {
            throw new Error('Unable to fetch puzzle.')
        }
};


//With fetch
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle.')
        }
    })

};

const getCountryDetails = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);        
    } else {
        throw new Error('Unable to fetch country')
    }
};

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=af9c9fd999ec68')
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data.')
        }
};


const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountryDetails(location.country);
    return country;
};

export { getPuzzle as default };