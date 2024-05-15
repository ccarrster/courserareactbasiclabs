import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="first h2" h3="first h3"/>
      <Card h2="second h2" h3="second h3"/>
      <Card h2="third h2" h3="third h3"/>
    </div>
  );
}

export default App;
