import logo from './logo.svg'
import './App.css'
import {  useIntl ,FormattedMessage} from 'react-intl'
import ClassC from './components/ClassC';
import Hooks from './components/hooksC'
function App() {
  // const intl = useIntl()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassC/>
        <Hooks></Hooks>
        
      </header>
    </div>
  )
}

export default App
