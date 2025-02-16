import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error.tsx';
import { MyContextProvider } from './ctx/Provider.tsx'; // Import the context provider
import LoginPage from './LoginPage.tsx'; // Import the login page
import ChecklistPage from './checklist/ChecklistPage.tsx'; // Import the checklist page
import { DefaultChecklist } from './checklist/models.ts';
import CardGrid from './cards/CardGrid.tsx';
import { DefaultCardGridItems } from './cards/models.ts';
import TicTacToe from './ttt/ttt.tsx';
import Layout from './Layout.tsx';
import Home from './home/Home.tsx';
import { Routes } from './home/models.ts';

const fourOhFour = new Response("", {
  status: 404,
  statusText: "Not Found",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
            path: "home",
            element: <Home routes={Routes} />
          },
          {
            path: "list",
            element: <ChecklistPage items={DefaultChecklist} /> // Add the checklist page route
          },
          {
            path: "ttt",
            element: <TicTacToe /> // Add the checklist page route
          },
          {
            path: "card",
            element: <CardGrid cards={DefaultCardGridItems} /> // Add the checklist page route
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
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>,
)
