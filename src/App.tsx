import './App.css'
import { ComponentTest } from './components'
import { ErrorBoundary } from './utilities'
import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setName("jhon");
    }, 2000);
  }, [])

  return (
    <div className='App'>
      <ErrorBoundary
        fallBackComponent={<>Fatal Error</>}
        resetCondition={name}
      >
        <ComponentTest name={name} />
      </ErrorBoundary>
    </div>
  )
}

export default App
