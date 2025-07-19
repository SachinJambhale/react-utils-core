import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import SignIn from "./BlogComponents/sign-in/SignIn";
import SignUp from "./BlogComponents/sign-up/SignUp";
import ForgotPassword from "./BlogComponents/sign-in/components/ForgotPassword";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./AuthContext/AuthContext";

function App() {
  const [open, setOpen] = useState(false);
  const handleDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword open={open} handleClose={handleDialog} />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
