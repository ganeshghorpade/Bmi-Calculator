import './App.css'
import Header from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom'
import Footer from './component/footer';


function App() {
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>  
  )
}

export default App
