import { useState, useEffect } from 'react';
import './App.css';
import Fact from './Components/Fact';
import HeaderButton from './Components/HeaderButton';

function App() {
  const [facts, setFacts] = useState([]);
  const [factCategory, setFactCategory] = useState('cats');

  useEffect(() => {
    if (factCategory === 'cats') {
      fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(data => setFacts(data))
    } else if (factCategory === 'dogs') {
      console.log('hej hundar');
      setFacts([]);
    } else if (factCategory === 'capybaras') {
      console.log('hej kapybaror');
      fetch('https://majazocom.github.io/Data/capybarafacts.json')
        .then(response => response.json())
        .then(data => setFacts(data))
    }
  }, [factCategory]);

  return (
    <div className="App">
      <header id="jox">
        <HeaderButton title="CAT FACTS" action={() => { setFactCategory('cats') }} />
        <HeaderButton title="DOG FACTS" action={() => { setFactCategory('dogs') }} />
        <HeaderButton title="CAPYBARA FACTS" action={() => { setFactCategory('capybaras') }} />
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
