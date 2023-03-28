import { useState, useEffect } from 'react';
import './App.css';
import Fact from './Components/Fact';
import HeaderButton from './Components/HeaderButton';

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    // det som skall köras
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => setFacts(data))
  }, []);

  return (
    <div className="App">
      <header>
        <HeaderButton title="CAT FACTS" />
        <HeaderButton title="DOG FACTS" />
        <HeaderButton title="CAPYBARA FACTS" />
      </header>
      <main>
        {
          facts && facts.map((fact, i) => <Fact key={i} data={fact} />)
        }
      </main>
    </div>
  )
}

export default App
