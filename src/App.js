import {BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './home';
import TimePage from './time.js'
import Kiss from './kiss.js'

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/time" element={<TimePage/>}/>
    <Route path="/muacks" element={<Kiss/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
