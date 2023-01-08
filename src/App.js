import './App.css';

import Encuesta from './components/Encuesta';
import FormEncuesta from './components/FormEncuesta'
function App() {
  return (
    <div className="container p-4">
      <div className='row'>
      <Encuesta/>
      <FormEncuesta/>
      </div>
    </div>
  );
}

export default App;
