import './App.css'
import { DataBase } from './Components/DataBase/DataBase'
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <DataBase />
      </div>
    </GlobalProvider>
  );
}

export default App;
