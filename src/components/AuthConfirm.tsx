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
      <div className="min-h-screen bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue flex items-center justify-center">
        <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl shadow-2xl p-8 text-center">
          <LoadingSpinner size="lg" color="gold" />
          <h1 className="text-2xl font-horror text-arkham-gold mt-4 mb-2">
            Confirming Account
          </h1>
          <p className="text-arkham-light/70 font-body">
            Awakening your investigator profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue flex items-center justify-center p-4">
      <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <div className="mb-6">
          {status === "success" ? (
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-400"
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
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-400"
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

          <h1 className="text-2xl font-horror text-arkham-gold mb-2">
            {status === "success"
              ? "Welcome, Investigator!"
              : "Confirmation Failed"}
          </h1>
          <p className="text-arkham-light/70 font-body">{message}</p>
        </div>

        {status === "success" && (
          <p className="text-arkham-light/60 text-sm mb-4">
            Redirecting to your dashboard in a few seconds...
          </p>
        )}

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full bg-arkham-gold hover:bg-arkham-gold/90 text-white font-semibold py-3 px-4 
                   rounded-lg transition-all duration-200 transform hover:scale-[1.02] 
                   focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:ring-offset-2 focus:ring-offset-arkham-purple
                   shadow-lg hover:shadow-xl"
        >
          {status === "success" ? "Continue to Dashboard" : "Back to Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthConfirm;
