import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Page1 from "./pages/Page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
