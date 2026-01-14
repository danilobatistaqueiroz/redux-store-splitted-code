//import type { WithSlice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
//import { rootReducer } from './reducer.ts'

interface CounterState {
  value: number
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 11 } as CounterState,
  reducers: {
    increment: state => void state.value++
  },
  selectors: {
    selectValue: state => state.value
  }
})

/** 
 * com o uso de LazyLoadedSlices é possível criar interfaces para que os reducers, métodos, 
 * atributos e propriedades fiquem disponíveis no root reducer da store, 
 * mesmo antes do chunck ser carregado e de fato ficar disponível  
 * */

//declare module './reducer.ts' {
  
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  //export interface LazyLoadedSlices extends WithSlice<typeof counterSlice> {}

  //export interface LazyLoadedSlices {
  //  aCounter: CounterState
  //}
//}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//export const injectedCounterSlice = counterSlice.injectInto(rootReducer)


// eslint-disable-next-line @typescript-eslint/no-unused-vars
//const injectedACounterSlice = 
//counterSlice.injectInto(rootReducer, {
//  reducerPath: 'aCounter'
//})