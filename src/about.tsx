import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import {aboutSlice, selectDescription, changeDescription } from './aboutSlice'
import { combineSlices } from '@reduxjs/toolkit';
import colorSlice from './colorSlice';
import loginSlice from './loginSlice';
import {store} from './store.ts'
import { priceSlice } from './priceSlice';

//import "./aboutReducer";
const reducers = combineSlices(aboutSlice, colorSlice,loginSlice, priceSlice)
store.replaceReducer(reducers)

export default function About() {

  const description:string = useSelector(selectDescription);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleChange = () => {
    dispatch(changeDescription("HI"))
  };

  return (
    <>
      <div>
        <h1>ABOUT</h1>
        <p>{description}</p>
      </div>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleChange}>Change Description</button>
    </>
  )
}