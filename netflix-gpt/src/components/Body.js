import React from 'react'
import Header from './Header'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
const Body = () => {
  const appRouter = createBrowserRouter([
    {path:"/",element:<Login></Login>},
    {path:"/browse",element:<Browse></Browse>}
  ]);
  return (
    <RouterProvider router={appRouter}>
    <div>
    <Header></Header>
    <Browse></Browse>
    </div>
    </RouterProvider>
  )
}

export default Body