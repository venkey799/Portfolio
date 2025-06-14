import { BrowserRouter } from 'react-router-dom'
import './App.css'
import  {Navbar }  from './Components/Home/Navbar'
import Vedio from './Components/Home/Vedio'
import Routing from './Components/Routing/Routing'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Main from './Components/Main/Main'

function App() {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen'>
        <Vedio/> 
        <Navbar/>
        <Main/>
        {/* <Routing/> */}
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          pauseOnHover
          theme="dark"
        />
    </div>
    </BrowserRouter>
  )
}

export default App
