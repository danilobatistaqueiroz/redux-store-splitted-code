import { createDynamicMiddleware, configureStore } from '@reduxjs/toolkit';
//import priceReducer from './priceSlice';
import rootReducer from './reducer.ts'


// const reducers = combineReducers({
//   ...injectedCounterSlice.reducer,
//   priceReducer
// });

export const dynamicMiddleware = createDynamicMiddleware()

export const store = configureStore({
  //reducer: rootReducer
   reducer: rootReducer,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dynamicMiddleware.middleware)
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;