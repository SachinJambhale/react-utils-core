import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import SignIn from "./BlogComponents/sign-in/SignIn";
import SignUp from "./BlogComponents/sign-up/SignUp";
import ForgotPassword from "./BlogComponents/sign-in/components/ForgotPassword";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword open={open} handleClose={handleDialog} />}
        />
      </Routes>
    </>
  );
}

export default App;
