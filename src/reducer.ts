import { combineSlices } from '@reduxjs/toolkit'
import colorSlice from './colorSlice'
import loginSlice from './loginSlice'
import { priceSlice } from './priceSlice'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LazyLoadedSlices {}

export default combineSlices(colorSlice,loginSlice,priceSlice).withLazyLoadedSlices<LazyLoadedSlices>()