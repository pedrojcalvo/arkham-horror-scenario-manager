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
      <div className="min-h-screen bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" color="gold" />
          <p className="text-arkham-light mt-4 font-body">
            Awakening the Ancient Ones...
          </p>
        </div>
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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23001122"/><circle cx="20" cy="30" r="2" fill="%23003366" opacity="0.3"/><circle cx="80" cy="70" r="1.5" fill="%23004488" opacity="0.2"/><path d="M10,10 Q50,30 90,10 T90,90 Q50,70 10,90 T10,10" fill="none" stroke="%23002244" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100" height="100" fill="url(%23paper)"/></svg>')`,
      }}
    >
      {/* Tab selector positioned like a corner menu */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-amber-100/90 backdrop-blur-lg border-2 border-amber-800/60 rounded-lg p-2">
          <div className="flex gap-2">
            <button
              onClick={() => setAuthMode("login")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                authMode === "login"
                  ? "bg-amber-300 text-amber-900 shadow-lg border border-amber-600"
                  : "text-amber-800 hover:text-amber-900 hover:bg-amber-200/50"
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                authMode === "signup"
                  ? "bg-amber-300 text-amber-900 shadow-lg border border-amber-600"
                  : "text-amber-800 hover:text-amber-900 hover:bg-amber-200/50"
              }`}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {authMode === "login" ? (
        <Login onSwitchToSignup={() => setAuthMode("signup")} />
      ) : (
        <Signup onSwitchToLogin={() => setAuthMode("login")} />
      )}
    </div>
  );
};

export default App;
