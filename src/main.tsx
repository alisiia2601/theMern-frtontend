import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp, { action as signUpAction } from './routes/SignUp.tsx';
import SignIn, { action as signInAction } from './routes/SignIn.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sign-up",
        action: signUpAction,
        element: <SignUp />
      },
      {
        path: "sign-in",
        action: signInAction,
        element: <SignIn />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)