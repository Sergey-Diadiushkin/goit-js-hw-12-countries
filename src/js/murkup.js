
 function createMurkup(ref, value) {
    ref.insertAdjacentHTML('beforeend', value);
};

function clearMarkup(ref) {
  ref.innerHTML = '';
}

export {createMurkup, clearMarkup}