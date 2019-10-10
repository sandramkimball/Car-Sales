import {createStore} from 'redux';
import {rooterReducer} from './reducers/reducer'

export const store = createStore(rooterReducer);