import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
  {
    path: "/page5",
    element: <Page5 />,
  },
  {
    path: "/page6",
    element: <Page6 />,
  },
]);

function App() {
  return (
    <ChakraProvider>

    <div>
      <ol className="flex justify-between py-3 border border-red-500">
        <li><a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 1</a></li>
        <li><a href="/page2" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 2</a></li>
        <li><a href="/page3" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 3</a></li>
        <li><a href="/page4" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 4</a></li>
        <li><a href="/page5" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 5</a></li>
        <li><a href="/page6" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Page 6</a></li>

      </ol>

      <div >
        <RouterProvider router={router} />
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
