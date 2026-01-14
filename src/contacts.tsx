import {logger} from './logger'

import { useNavigate } from 'react-router-dom';
import { dynamicMiddleware } from './store';



export default function Contacts() {
  
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleChange = () => {
    /** esse metodo adiciona um middleware de forma dinamica, somente quando o chunck estiver disponivel, contacts é carregado lazy loaded, logger por consequencia também */
    dynamicMiddleware.addMiddleware(logger)
  };

  return (
    <>
      <div>
        <h1>CONTACTS</h1>
      </div>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleChange}>Add Logger</button>
    </>
  )
}