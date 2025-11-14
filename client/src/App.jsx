import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

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
      </Routes>

      <Footer />
    </Router>
  );
}
