import reducer, { globalState } from './reducer';
import createStore from '../createStore';

const store = createStore(reducer, globalState);

export default store;
