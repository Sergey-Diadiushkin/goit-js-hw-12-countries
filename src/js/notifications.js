import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'
const { alert } = require('@pnotify/core');

function toMuchResults (){alert({
  text: "To many matches found. Please enter a more specific query!",
  type: 'error'
});} 

function notFound() {
   alert({
  text: "Country with this name is not found!",
  type: 'error'
   });
}

function manyOptions() {
  alert({
                   text: "More then one option",
                   type: 'info',
                   delay: 1000
                  
               })
}
export {toMuchResults, notFound, manyOptions}