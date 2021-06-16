// imported modules
import { createStore } from 'redux';
import reducer from './reducer';

// create store
const store = createStore(reducer);

// export store
export default store;