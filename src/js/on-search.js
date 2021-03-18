import { refs } from './refs.js';
import { createMurkup, clearMarkup } from './murkup.js';
import{toMuchResults, notFound, manyOptions} from './notifications'
import fetchCountries from './fetch.js';
import listTemplate from '../templates/list-template.hbs';
import cardTemplate from '../templates/card-template.hbs';
const _ = require('lodash');



export default function onSearch(e) {
    clearMarkup(refs.listRef)
    clearMarkup(refs.cardContainerRef)
const searchQuery = e.target.value;
   fetchCountries(searchQuery)
       .then(responce => {
           if (responce.length > 10) {
               toMuchResults()
           }
           if (responce.status == '404') {
               notFound()
           }
               
           if (responce.length >= 2 && responce.length <= 10) {
               createMurkup(refs.listRef, listTemplate(responce));
               manyOptions()
           }
           if (responce.length === 1) {
               createMurkup(refs.cardContainerRef, cardTemplate(responce))
           }
           console.dir(responce)
       })
    .catch(error => console.log(error))

}
