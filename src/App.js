
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/Routes/Routes';

function App() {
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;
