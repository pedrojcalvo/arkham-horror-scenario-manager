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
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23001122"/><circle cx="20" cy="30" r="2" fill="%23003366" opacity="0.3"/><circle cx="80" cy="70" r="1.5" fill="%23004488" opacity="0.2"/><path d="M10,10 Q50,30 90,10 T90,90 Q50,70 10,90 T10,10" fill="none" stroke="%23002244" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100" height="100" fill="url(%23paper)"/></svg>')`,
        }}
      >
        <div
          className="bg-gradient-to-b from-amber-50 to-amber-100 border-4 border-amber-800/60 rounded-lg relative overflow-hidden p-8 text-center"
          style={{
            boxShadow:
              "inset 0 0 50px rgba(139, 69, 19, 0.1), 0 10px 30px rgba(0, 0, 0, 0.5)",
            background: `
              linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0%, transparent 100%),
              linear-gradient(135deg, rgba(160, 82, 45, 0.03) 0%, transparent 100%),
              linear-gradient(to bottom, #fefce8 0%, #fef3c7 50%, #fde68a 100%)
            `,
          }}
        >
          <LoadingSpinner size="lg" color="gold" />
          <h1 className="text-2xl font-serif font-bold text-amber-900 mt-4 mb-2">
            Confirmando Cuenta
          </h1>
          <p className="text-amber-800 font-medium">
            Despertando tu perfil de investigador...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23001122"/><circle cx="20" cy="30" r="2" fill="%23003366" opacity="0.3"/><circle cx="80" cy="70" r="1.5" fill="%23004488" opacity="0.2"/><path d="M10,10 Q50,30 90,10 T90,90 Q50,70 10,90 T10,10" fill="none" stroke="%23002244" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100" height="100" fill="url(%23paper)"/></svg>')`,
      }}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 text-amber-600 text-2xl opacity-70">
        ⚜
      </div>
      <div className="absolute top-4 right-4 text-amber-600 text-2xl opacity-70">
        ⚜
      </div>
      <div className="absolute bottom-4 left-4 text-amber-600 text-2xl opacity-70">
        ⚜
      </div>
      <div className="absolute bottom-4 right-4 text-amber-600 text-2xl opacity-70">
        ⚜
      </div>

      <div className="w-full max-w-md">
        <div
          className="bg-gradient-to-b from-amber-50 to-amber-100 border-4 border-amber-800/60 rounded-lg relative overflow-hidden text-center"
          style={{
            boxShadow:
              "inset 0 0 50px rgba(139, 69, 19, 0.1), 0 10px 30px rgba(0, 0, 0, 0.5)",
            background: `
              linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0%, transparent 100%),
              linear-gradient(135deg, rgba(160, 82, 45, 0.03) 0%, transparent 100%),
              linear-gradient(to bottom, #fefce8 0%, #fef3c7 50%, #fde68a 100%)
            `,
          }}
        >
          {/* Decorative border pattern */}
          <div className="absolute inset-0 border-8 border-amber-800/20 rounded-lg pointer-events-none"></div>

          {/* Header */}
          <div className="relative">
            <div className="bg-gradient-to-r from-amber-800/10 via-amber-700/20 to-amber-800/10 py-4 border-b-2 border-amber-800/30">
              <div className="flex items-center justify-center gap-4">
                <div className="text-amber-800 text-lg">⟨</div>
                <h1 className="text-2xl font-serif font-bold text-amber-900 text-center">
                  {status === "success"
                    ? "¡Bienvenido!"
                    : "Error de Confirmación"}
                </h1>
                <div className="text-amber-800 text-lg">⟩</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6">
              {status === "success" ? (
                <div className="w-16 h-16 bg-green-200 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-200 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}

              <p className="text-amber-800 font-medium mb-4">{message}</p>
            </div>

            {status === "success" && (
              <p className="text-amber-700 text-sm mb-4">
                Redirigiendo al panel principal en unos segundos...
              </p>
            )}

            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                       border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                       shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span className="text-amber-900 font-semibold text-lg">
                {status === "success"
                  ? "Ir al Panel Principal"
                  : "Volver al Login"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthConfirm;
