export default class SearchCountries {
    constructor() {
        this.searchName = ''
    }

    fetchCountries (searchName){
        return fetch('https://restcountries.com/v3.1/name/${this.searchName}')
        .then(r => r.json())
        .then(console.log)
    }

    get name() {
        return this.searchName;
    }
    
    set name(newSearchName) {
        this.searchName = newSearchName;
    }
    
}