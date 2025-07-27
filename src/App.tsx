import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  AuthPage,
  HomePage,
  OnboardingPage,
  SignupPage,
  AdAccountPage,
  ViewDetailsPage,
} from "./pages";
import {
  AuthLayout,
  DashboardLayout,
  OnboardingLayout,
} from "./components/layouts";
import { ChangePasswordForm, ResetForm, VerifyForm } from "./components/auth";
import ModalProvider from "./components/modals/modal-provider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthPage />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="verify" element={<VerifyForm />} />
          <Route path="reset" element={<ResetForm />} />
          <Route path="password" element={<ChangePasswordForm />} />
        </Route>
        <Route path="onboarding" element={<OnboardingLayout />}>
          <Route index element={<OnboardingPage />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AdAccountPage />} />
          <Route path="account/request" element={<AdAccountPage />} />
          <Route path="account/:id" element={<ViewDetailsPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className=" w-full h-screen ">
      <RouterProvider router={router} />
      <ModalProvider />
    </div>
  );
}

export default App;
