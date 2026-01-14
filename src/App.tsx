import { useState, type ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrency, setValue, getValue, getPrice } from './priceSlice'

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  

  const navigate = useNavigate();

  const [count, setCount] = useState(0)
  
  const price:string = useSelector(getPrice);
  const value:number = useSelector(getValue);

 
  const [inputValue, setInputValue] = useState(value);

  const dispatch = useDispatch();

  const handleValueChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target.value as unknown as number));
  };

  const handlePriceChange = () => {
    dispatch(setValue(inputValue));
    dispatch(setCurrency("USD"));
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <>
      <div>
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          <Link to="/settings" style={{ margin: '10px' }}>Settings</Link>
        </nav>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <label>Value<input type="text" value={inputValue} onChange={handleValueChange}></input></label>
      <button onClick={handlePriceChange}>
        set price
      </button>
      <div>
        <p>
          price: {price}
        </p>
      </div>
      <button onClick={handleSettings}>Settings</button>
      <hr></hr>
      <button onClick={handleAbout}>About</button>
      <hr></hr>
      <button onClick={()=>navigate('./contacts')}>Contacts</button>
    </>
  )
}

export default App
