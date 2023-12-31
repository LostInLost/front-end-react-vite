import { Suspense, lazy, useState } from "react"
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
const Login = lazy(() => import('./Pages/Login'))
const Register = lazy(() => import('./Pages/Register'))
const FormSatu = lazy(() => import('./Pages/FormSatu'))
const FormDua = lazy(() => import('./Pages/FormDua'))
const ToDo = lazy(() => import('./Pages/ToDo'))
const Navbar = lazy(() => import('./components/Nav'))
const Banner = lazy(() => import('./components/Banner'))
const Project = lazy(() => import('./components/Projects'))
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Banner />,
        },
        {
          path: '/projects',
          element: <Project />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/formsatu',
      element: <FormSatu />,
    },
    {
      path: '/formdua',
      element: <FormDua />,
    },
    {
      path: '/todo',
      element: <ToDo />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
