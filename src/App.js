
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Approute from './router/Approute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Approute/>
    </BrowserRouter>
  );
}

export default App;