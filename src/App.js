import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import SuperMarket from "./components/SuperMarket";

function App() {
  return (
    <div className="App">
        <Counter/>
        <hr/>
        <SuperMarket/>
    </div>
  );
}

export default App;
