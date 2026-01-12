import { useNavigate } from 'react-router-dom';

export function Settings() {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        Settings
      </div>
      <button onClick={handleHome}>Home</button>
    </>
  )
}