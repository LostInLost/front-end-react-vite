import { Suspense, lazy, useState } from "react"
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
const Login = lazy(() => import('./Pages/Login'))
const Register = lazy(() => import('./Pages/Register'))
const FormSatu = lazy(() => import('./Pages/FormSatu'))
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/formsatu',
      element: <FormSatu />
    }
  ])

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
      </Suspense>
    </>
  );
}