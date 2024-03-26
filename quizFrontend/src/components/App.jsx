import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { CheckUserExist } from '../helper/helper'
import SignIn from "../components/SignIn"
import LogIn from "../components/LogIn";
import Main from "../components/Main"
import Quiz from './Quiz'
import Result from './Result'


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element : <SignIn/>
  // },
  // {
  //   path: '/logIn',
  //   element : <LogIn/>
  // },
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
