import React, { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AuthConfirm from "./components/AuthConfirm";
import LoadingSpinner from "./components/LoadingSpinner";

type AuthMode = "login" | "signup";

const App: React.FC = () => {
  const { user, loading } = useAuth();
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // Simple router to handle auth confirmation
    setCurrentPath(window.location.pathname);
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingSpinner size="lg" color="gold" />
        <p>Cargando...</p>
      </div>
    );
  }

  // Handle auth confirmation route
  if (currentPath === "/auth/confirm") {
    return <AuthConfirm />;
  }

  if (user) {
    return <Dashboard />;
  }

  return (
    <div>
      {authMode === "login" ? (
        <Login onSwitchToSignup={() => setAuthMode("signup")} />
      ) : (
        <Signup onSwitchToLogin={() => setAuthMode("login")} />
      )}
    </div>
  );
};

export default App;
