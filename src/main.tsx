import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error.tsx';
import { MyContextProvider } from './ctx/Provider.tsx'; // Import the context provider
import Login from './Login.tsx'; // Import the login page
import ChecklistPage from './checklist/ChecklistPage.tsx'; // Import the checklist page
import { DefaultChecklist } from './checklist/models.ts';
import CardGrid from './cards/CardGrid.tsx';
import { DefaultCardGridItems } from './cards/models.ts';
import TicTacToe from './ttt/ttt.tsx';
import Layout from './Layout.tsx';
import Home from './home/Home.tsx';
import { Routes } from './home/models.ts';
import RandomPoke from './poke/random.tsx';
import EchoSocket from './socket/echo.tsx';
import { createTheme, ThemeProvider } from '@mui/material';

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
            element: <Login />
          },
          {
            path: "home",
            element: <Home routes={Routes} />
          },
          {
            path: "list",
            element: <ChecklistPage items={DefaultChecklist} />
          },
          {
            path: "ttt",
            element: <TicTacToe />
          },
          {
            path: "card",
            element: <CardGrid cards={DefaultCardGridItems} />
          },
          {
            path: "poke",
            element: <RandomPoke />
          },
          {
            path: "sock",
            element: <EchoSocket />
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

const theme = createTheme({
  palette: {
    text: {
      secondary: '#757575', // Secondary text color (grey)
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyContextProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MyContextProvider>
  </StrictMode>,
)
