import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Register from "./pages/Register.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

// Route guards
// import ProtectedRoute from "./auth/ProtectedRoute";
// import PublicRoute from "./auth/PublicRoute";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Auth pages */}
        <Route
          path="/login"
          element={
            // <PublicRoute>
            <Login />
            // {/* </PublicRoute> */}
          }
        />
        <Route
          path="/register"
          element={
            // <PublicRoute>
            <Register />
            // </PublicRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            // <PublicRoute>
            <VerifyEmail />
            // </PublicRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Protected pages */}
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // {/* </ProtectedRoute> */}
          }
        />
        <Route
          path="/profile"
          element={
            // <ProtectedRoute>
            <Profile />
            // </ProtectedRoute>
          }
        />

        {/* Optional: catch-all 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}
