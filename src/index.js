import './styles.css';
import { refs } from './js/refs.js';
import onSearch from './js/on-search';

refs.inputRef.addEventListener('input', _.debounce(onSearch, 500));



