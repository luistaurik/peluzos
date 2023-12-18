import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Home from './views/Home';
import Details from './views/Details';
import Cart from './views/Cart';
import ContextProvider from "./context/Context";
import ThanksPage from './views/ThanksPage';


function App() {

  
  return (
    <>
      <ContextProvider>
        <NavBar></NavBar>  
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details/:id' element={<Details/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/thanks' element={<ThanksPage/>}></Route>
        </Routes>
      </ContextProvider>
    </>
  )
}

export default App
