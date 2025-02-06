import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error.tsx';
import { MyContextProvider } from './ctx/Provider.tsx'; // Import the context provider
import LoginPage from './LoginPage.tsx'; // Import the login page
import Home from './Home.tsx';


const fourOhFour = new Response("", {
  status: 404,
  statusText: "Not Found",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // App should never throw err
    children: [
      {
        // loads errorElement in <Home />'s <Outlet />
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <LoginPage />
          },
          {
            path: "app",
            element: <App /> // Add the login page route
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
    <MyContextProvider> {/* Wrap the RouterProvider with MyContextProvider */}
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>,
)
