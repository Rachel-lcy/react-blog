import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Create from './components/Create';

import './App.css'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={ <Home />}></Route>
            <Route path='/create' element={ <Create />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App
