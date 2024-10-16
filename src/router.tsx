import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import DashBoard from "./pages/DashBoard";
import CodingPage from "./pages/CodingPage";
import {PreviousCodePage} from "./pages/PreviousCodePage";
  
  
export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children : [
            {
                path : "",
                Component : DashBoard
            },
            {
                path : "/code",
                Component : CodingPage
            },
            {
                path : "/code/:id",
                Component : PreviousCodePage
            }
        ]
    },
]);
