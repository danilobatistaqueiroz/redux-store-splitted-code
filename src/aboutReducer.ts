//import { counterSlice } from './counterSlice';
import { aboutSlice } from './aboutSlice';
import rootReducer from './reducer.ts'
import {store} from './store.ts'

export const injected = rootReducer.inject(aboutSlice);

store.replaceReducer(rootReducer)