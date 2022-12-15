
import './styles/App.css'
import {Route,Routes} from 'react-router-dom'
import Resource from './Resource';
import Home from './Home';
import Error from './Error';
function App() {


  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resource' element={<Resource/>}/>
        <Route path='*' element={<Error/>}/>
       </Routes>
    </div>
  )
}

export default App
