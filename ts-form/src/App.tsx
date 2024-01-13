import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInForm from "./pages/login/sign-in";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInForm />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
