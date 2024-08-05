
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import Mainlayout from './layouts/Mainlayout'
import HomePage from './pages/HomePage'
import Coursepage from './pages/Coursepage'
import Contactpage from './pages/Contactpage'
import Addcourse from './pages/Addcourse'
import Authlayout from './layouts/Authlayout'
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'

function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route>
        <Route path='/' element={<Authlayout/>}/>
        <Route index element={<Loginpage/>}/>
        <Route path='/sign-up' element={<Signuppage/>}/>
      </Route>

      <Route path='/' element={<Mainlayout/>}>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/courses' element={<Coursepage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/add-course' element={<Addcourse/>}/>

      </Route>
     
      </>
    )
  )

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
