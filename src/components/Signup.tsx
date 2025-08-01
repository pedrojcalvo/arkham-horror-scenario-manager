import { useState, FormEvent, ChangeEvent } from "react";
import { LoginCredentials } from "../types";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/Signup.css";

interface SignupCredentials extends LoginCredentials {
  confirmPassword: string;
  name: string;
}

interface SignupProps {
  onSwitchToLogin?: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSwitchToLogin }) => {
  const { signUp } = useAuth();
  const [credentials, setCredentials] = useState<SignupCredentials>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validation
    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (credentials.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await signUp(
        credentials.email,
        credentials.password,
        credentials.name
      );

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        console.log("Registration successful!");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange =
    (field: keyof SignupCredentials) => (e: ChangeEvent<HTMLInputElement>) => {
      setCredentials((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  if (success) {
    return (
      <div className="signup-container">
        <div className="image-login">
          <div className="title-bar">
            <h1 className="title-text">¡Registro Exitoso!</h1>
          </div>
        </div>
        <div className="form-login">
          <div className="success-container">
            <div className="success-message">¡Cuenta creada exitosamente!</div>

            <p className="success-text">
              Hemos enviado un correo de confirmación a tu dirección de email.
            </p>

            <p className="success-text">
              Por favor, haz clic en el enlace del correo para activar tu
              cuenta.
            </p>

            <div className="buttons-container buttons-container--success">
              <button
                onClick={() => setSuccess(false)}
                className="signup-button"
              >
                INTENTAR DE NUEVO
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="signup-button"
              >
                VOLVER AL LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="image-login">
        <div className="title-bar">
          <h1 className="title-text">Únete a la investigación</h1>
        </div>
      </div>
      <div className="form-login">
        <form onSubmit={handleSubmit} className="signup-form">
          {error && <div className="error-message">{error}</div>}

          <div>
            <input
              id="name"
              type="text"
              placeholder="Nombre del Investigador"
              value={credentials.name}
              onChange={handleInputChange("name")}
              required
              disabled={isLoading}
              className="signup-input"
            />
          </div>

          <div>
            <input
              id="signup-email"
              type="email"
              placeholder="Correo Electrónico"
              value={credentials.email}
              onChange={handleInputChange("email")}
              required
              disabled={isLoading}
              className="signup-input"
            />
          </div>

          <div>
            <input
              id="signup-password"
              type="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handleInputChange("password")}
              required
              disabled={isLoading}
              className="signup-input"
            />
          </div>

          <div>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirmar Contraseña"
              value={credentials.confirmPassword}
              onChange={handleInputChange("confirmPassword")}
              required
              disabled={isLoading}
              className="signup-input"
            />
          </div>

          <div className="buttons-container">
            <button
              type="submit"
              disabled={isLoading}
              className="signup-button"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" color="gold" />
                  Creando Cuenta...
                </>
              ) : (
                "REGISTRARSE"
              )}
            </button>

            <button
              type="button"
              onClick={onSwitchToLogin}
              className="signup-button"
            >
              INICIAR SESIÓN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
