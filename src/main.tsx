import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  //RouteObject
} from "react-router-dom";
import ErrorPage from './error.tsx';

const fourOhFour = new Response("", {
  status: 404,
  statusText: "Not Found",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // App should never throw err
    children: [
      {
        // loads errorElement in <App />'s <Outlet />
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <App />
          },
          {
            // throw 404 for all unspecified routes
            path: "*",
            loader: async () => { throw fourOhFour }
          },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
