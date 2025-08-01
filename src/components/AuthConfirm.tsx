import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const AuthConfirm: React.FC = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleAuthConfirmation = async () => {
      try {
        // Get the hash from URL (Supabase sends the token in the hash)
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const accessToken = hashParams.get("access_token");
        const type = hashParams.get("type");

        if (type === "signup" && accessToken) {
          // User successfully confirmed their email
          setStatus("success");
          setMessage(
            "Your email has been confirmed! You can now use your account."
          );

          // Redirect to dashboard after a short delay
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else if (type === "recovery") {
          // Password recovery flow
          setStatus("success");
          setMessage("Please set your new password.");
        } else {
          setStatus("error");
          setMessage("Invalid confirmation link or link has expired.");
        }
      } catch (error) {
        console.error("Error during confirmation:", error);
        setStatus("error");
        setMessage("An error occurred during confirmation. Please try again.");
      }
    };

    handleAuthConfirmation();
  }, []);

  if (status === "loading") {
    return (
      <div>
        <LoadingSpinner size="lg" color="gold" />
        <h1>Confirmando Cuenta</h1>
        <p>Despertando tu perfil de investigador...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>
          {status === "success" ? "¡Bienvenido!" : "Error de Confirmación"}
        </h1>

        <div>
          <p>{message}</p>
        </div>

        {status === "success" && (
          <p>Redirigiendo al panel principal en unos segundos...</p>
        )}

        <button onClick={() => (window.location.href = "/")}>
          {status === "success" ? "Ir al Panel Principal" : "Volver al Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthConfirm;
