import { useState, FormEvent, ChangeEvent } from "react";
import { LoginCredentials } from "../types";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue p-4">
        <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <div className="mb-6">
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
            <h1 className="text-2xl font-horror text-arkham-gold mb-2">
              Check Your Email
            </h1>
            <p className="text-arkham-light/70 font-body mb-4">
              We've sent you a confirmation email. Please click the link in your
              email to activate your investigator account.
            </p>
            <p className="text-arkham-light/60 text-sm">
              Don't see the email? Check your spam folder or try registering
              again.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSuccess(false)}
              className="flex-1 bg-arkham-purple/50 hover:bg-arkham-purple/70 border border-arkham-gold/30 text-arkham-light font-semibold py-3 px-4 
                       rounded-lg transition-all duration-200 transform hover:scale-[1.02] 
                       focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:ring-offset-2 focus:ring-offset-arkham-purple
                       shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="flex-1 bg-arkham-gold hover:bg-arkham-gold/90 text-white font-semibold py-3 px-4 
                       rounded-lg transition-all duration-200 transform hover:scale-[1.02] 
                       focus:outline-none focus:ring-2 focus:ring-arkham-gold/50 focus:ring-offset-2 focus:ring-offset-arkham-purple
                       shadow-lg hover:shadow-xl"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue p-4">
      <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-horror text-arkham-gold mb-2">
            Join the Investigation
          </h1>
          <p className="text-arkham-light/70 font-body">
            Create your investigator profile
          </p>
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
                htmlFor="name"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Investigator Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={credentials.name}
                onChange={handleInputChange("name")}
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
                htmlFor="signup-email"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleInputChange("email")}
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
                htmlFor="signup-password"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={credentials.password}
                onChange={handleInputChange("password")}
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
                htmlFor="confirm-password"
                className="block text-sm font-medium text-arkham-light/80 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={credentials.confirmPassword}
                onChange={handleInputChange("confirmPassword")}
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
                <span>Creating Account...</span>
              </>
            ) : (
              "Begin Investigation"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-arkham-light/60 text-sm">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-arkham-gold hover:text-arkham-gold/80 font-medium transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
