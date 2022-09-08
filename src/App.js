import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import useCounter from './hooks/useCounter';

function App() {
  return (
    <div className="App">
      <CounterOne/>
      <useCounter/>
    </div>
  );
}

export default App;
