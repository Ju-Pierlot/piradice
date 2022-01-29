import {createStore} from 'redux';
import { StateReducer } from './stateRecuder';


export default createStore(StateReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

