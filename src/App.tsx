import './App.css';
import { ComponentTest } from './components';
import ComponentTestAsync from './components/ComponentTestAsync';
// import { useEffect, useState } from 'react';

function App() {
  // const [name, setName] = useState<string | null>(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setName("jhon");
  //   }, 2000);
  // }, []);

  return (
    <div className='App'>
      <ComponentTestAsync />
      <ComponentTest name='Henry' />
    </div>
  );
}

export default App;
