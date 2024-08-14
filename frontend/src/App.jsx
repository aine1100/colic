
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])
function App() {

  return (
      <div>
        <RouterProvider router={routes}/>
          </div>   
  )
}

export default App
