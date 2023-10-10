// import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './views/Landing/Landing';
import Create from './views/Create/Create';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>      
            <Route path='/' Component={Landing} />
            <Route path='/create' Component={Create} />
            <Route path='/home' Component={Home} />
            <Route path='/details/:id' Component={Detail} />
            <Route path="*" Component={NotFound} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
