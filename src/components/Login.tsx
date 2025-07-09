import { useState, FormEvent, ChangeEvent } from "react";
import { LoginCredentials } from "../types";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

interface LoginProps {
  onSwitchToSignup?: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await signIn(credentials.email, credentials.password);

      if (error) {
        setError(error.message);
      } else {
        // Login exitoso
        console.log("Login successful!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23001122"/><circle cx="20" cy="30" r="2" fill="%23003366" opacity="0.3"/><circle cx="80" cy="70" r="1.5" fill="%23004488" opacity="0.2"/><path d="M10,10 Q50,30 90,10 T90,90 Q50,70 10,90 T10,10" fill="none" stroke="%23002244" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100" height="100" fill="url(%23paper)"/></svg>')`
      }}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute top-4 right-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute bottom-4 left-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute bottom-4 right-4 text-amber-600 text-2xl opacity-70">⚜</div>

      <div className="w-full max-w-md">
        {/* Parchment-style login panel */}
        <div 
          className="bg-gradient-to-b from-amber-50 to-amber-100 border-4 border-amber-800/60 rounded-lg relative overflow-hidden"
          style={{
            boxShadow: 'inset 0 0 50px rgba(139, 69, 19, 0.1), 0 10px 30px rgba(0, 0, 0, 0.5)',
            background: `
              linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0%, transparent 100%),
              linear-gradient(135deg, rgba(160, 82, 45, 0.03) 0%, transparent 100%),
              linear-gradient(to bottom, #fefce8 0%, #fef3c7 50%, #fde68a 100%)
            `
          }}
        >
          {/* Decorative border pattern */}
          <div className="absolute inset-0 border-8 border-amber-800/20 rounded-lg pointer-events-none"></div>
          
          {/* Header with ornamental design */}
          <div className="relative">
            <div className="bg-gradient-to-r from-amber-800/10 via-amber-700/20 to-amber-800/10 py-4 border-b-2 border-amber-800/30">
              <div className="flex items-center justify-center gap-4">
                <div className="text-amber-800 text-lg">⟨</div>
                <h1 className="text-2xl font-serif font-bold text-amber-900 text-center">
                  Iniciar Sesión
                </h1>
                <div className="text-amber-800 text-lg">⟩</div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="py-3 text-center border-b border-amber-800/20">
              <p className="text-amber-800 font-medium">
                Arkham Horror - Scenario Manager
              </p>
            </div>
          </div>

          {/* Form content */}
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-100 border-2 border-red-400 text-red-800 px-4 py-3 rounded-lg text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Introduce tu correo"
                    value={credentials.email}
                    onChange={handleEmailChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-lg 
                             text-amber-900 placeholder-amber-600 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                             transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                             font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={credentials.password}
                    onChange={handlePasswordChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-lg 
                             text-amber-900 placeholder-amber-600 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                             transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                             font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                         border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                         flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" color="gold" />
                    <span className="text-amber-900 font-semibold text-lg">Entrando...</span>
                  </>
                ) : (
                  <span className="text-amber-900 font-semibold text-lg">Entrar</span>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-amber-800 text-sm">
                ¿No tienes cuenta?{" "}
                <button
                  onClick={onSwitchToSignup}
                  className="text-amber-700 hover:text-amber-600 font-semibold transition-colors underline"
                >
                  Registrarse
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
