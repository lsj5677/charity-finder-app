import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { CharityDetail } from "./pages/CharityDetail";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./Layout";
import { SearchResults } from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/charities/details/:id", element: <CharityDetail /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/search/:keyword", element: <SearchResults /> },
    ],
  },
]);

function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
