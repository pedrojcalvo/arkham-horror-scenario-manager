import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23001122"/><circle cx="20" cy="30" r="2" fill="%23003366" opacity="0.3"/><circle cx="80" cy="70" r="1.5" fill="%23004488" opacity="0.2"/><path d="M10,10 Q50,30 90,10 T90,90 Q50,70 10,90 T10,10" fill="none" stroke="%23002244" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100" height="100" fill="url(%23paper)"/></svg>')`
      }}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute top-4 right-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute bottom-4 left-4 text-amber-600 text-2xl opacity-70">⚜</div>
      <div className="absolute bottom-4 right-4 text-amber-600 text-2xl opacity-70">⚜</div>

      {/* Sign out button positioned like a corner menu */}
      <div className="absolute top-6 right-16 z-10">
        <button
          onClick={handleSignOut}
          className="bg-amber-100/90 hover:bg-amber-50 border-2 border-amber-800/60 
                   text-amber-900 px-4 py-2 rounded font-medium transition-all duration-200
                   shadow-lg hover:shadow-xl backdrop-blur-sm"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Parchment-style main panel */}
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
                    Menú Principal
                  </h1>
                  <div className="text-amber-800 text-lg">⟩</div>
                </div>
              </div>
              
              {/* Subtitle */}
              <div className="py-3 text-center border-b border-amber-800/20">
                <p className="text-amber-800 font-medium">
                  Bienvenido, {user?.user_metadata?.name || user?.email?.split('@')[0]}
                </p>
              </div>
            </div>

            {/* Menu buttons */}
            <div className="p-8 space-y-4">
              <button className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                               border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                               shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span className="text-amber-900 font-semibold text-lg">Ver Escenarios</span>
              </button>

              <button className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                               border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                               shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span className="text-amber-900 font-semibold text-lg">Crear Nueva Campaña</span>
              </button>

              <button className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                               border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                               shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-amber-800 text-sm">⚙</span>
                  <span className="text-amber-900 font-semibold text-lg">Configuración</span>
                </div>
              </button>

              <button className="w-full bg-gradient-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 
                               border-2 border-amber-800/60 rounded-lg py-4 px-6 transition-all duration-200
                               shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span className="text-amber-900 font-semibold text-lg">Mis Investigaciones</span>
                <div className="text-xs text-amber-700 mt-1">(En desarrollo)</div>
              </button>
            </div>

            {/* Decorative footer */}
            <div className="border-t-2 border-amber-800/30 bg-gradient-to-r from-amber-800/5 via-amber-700/10 to-amber-800/5 py-2">
              <div className="text-center text-amber-700 text-sm font-medium">
                Arkham Horror - Scenario Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
