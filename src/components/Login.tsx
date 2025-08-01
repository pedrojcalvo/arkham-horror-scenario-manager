import { useState, FormEvent, ChangeEvent } from "react";
import { LoginCredentials } from "../types";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/Login.css";

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
    <div className="login-container">
      <div className="image-login">
        <div className="title-bar">
          <h1 className="title-text">Arkham Horror ScM</h1>
        </div>
      </div>
      <div className="form-login">
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div>
            <input
              id="email"
              type="email"
              placeholder="Correo Electrónico"
              value={credentials.email}
              onChange={handleEmailChange}
              required
              disabled={isLoading}
              className="login-input"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handlePasswordChange}
              required
              disabled={isLoading}
              className="login-input"
            />
          </div>

          <div className="buttons-container">
            <button type="submit" disabled={isLoading} className="login-button">
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" color="gold" />
                  Entrando...
                </>
              ) : (
                "ENTRAR"
              )}
            </button>

            <button
              type="button"
              onClick={onSwitchToSignup}
              className="login-button"
            >
              REGISTRARSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
