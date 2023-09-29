import './App.css'
import { ComponentTest } from './components'
import { ErrorBoundary } from './utilities'

function App() {
  return (
    <div className='App'>
      <ErrorBoundary fallBackComponent={<>Fatal Error</>}>
        <ComponentTest />
      </ErrorBoundary>
    </div>
  )
}

export default App
