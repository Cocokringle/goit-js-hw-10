import './css/styles.css';
import SearchCountries from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const searchForm = document.querySelector('#search-box')
const searchCountries = new SearchCountries();



searchForm.addEventListener('submit', onSearch)
window.addEventListener('keydown', onEnterKeyPress)


function onEnterKeyPress (e){
    
    if(e.code === 'Enter'){
        onSearch();
    }
}
onSearch()
function onSearch (evt){
    evt.preventDefault();
    searchCountries.searchName = e.currentTarget.elements.query.value
    console.log(evt)
}
