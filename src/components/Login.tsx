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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue p-4">
      <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-horror text-arkham-gold mb-2">
            Arkham Horror
          </h1>
          <p className="text-arkham-light/70 font-body">Scenario Manager</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleEmailChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-arkham-dark/50 border border-arkham-gold/30 rounded-lg 
                         text-arkham-light placeholder-arkham-light/50 
                         focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:border-arkham-gold
                         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handlePasswordChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-arkham-dark/50 border border-arkham-gold/30 rounded-lg 
                         text-arkham-light placeholder-arkham-light/50 
                         focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:border-arkham-gold
                         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-arkham-gold hover:bg-arkham-gold/90 text-white font-semibold py-3 px-4 
                     rounded-lg transition-all duration-200 transform hover:scale-[1.02] 
                     focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:ring-offset-2 focus:ring-offset-arkham-purple
                     shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" color="gold" />
                <span>Entering...</span>
              </>
            ) : (
              "Enter the Darkness"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-arkham-light/60 text-sm">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-arkham-gold hover:text-arkham-gold/80 font-medium transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
