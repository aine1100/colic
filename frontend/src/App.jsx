
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Page from './pages/page'
import SignUp from './pages/sign-up'
import SignUpPhotographer from './pages/photographerSignup'
import SignUpClient from './pages/clientSignUp'
import Choices from './pages/field'
import Details from './pages/personaldetails'
import UserHome from './pages/userHome'

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
  },
 {
  path:"/page",
  element:<Page/>
 },
 {
  path:"/sign",
  element:<SignUp/>
 },
 {
  path:"/phot",
  element:<SignUpPhotographer/>
 },
 {
  path:"/client",
  element:<SignUpClient/>
 },
 {
  path:"/choice",
  element:<Choices/>
 },
 {
  path:"/details",
  element:<Details/>
 },{
  path:"/user",
  element:<UserHome/>
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
