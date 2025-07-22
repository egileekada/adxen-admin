import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthPage, HomePage, AdAccountPage } from "./pages";
import { DashboardLayout } from "./components/layouts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AdAccountPage />} />
          <Route path="account/request" element={<AdAccountPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className=" w-full h-screen ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
