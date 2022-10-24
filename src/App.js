
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routus } from './components/routers/Routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routus}> </RouterProvider>
    </div>
  );
}

export default App;
