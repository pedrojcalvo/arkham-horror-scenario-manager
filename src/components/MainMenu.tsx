import React from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/MainMenu.css";

const MainMenu: React.FC = () => {
  const { signOut } = useAuth();

  const handleNewCampaign = () => {
    console.log("Nueva Campaña");
    // Lógica para nueva campaña
  };

  const handleLoadCampaign = () => {
    console.log("Cargar Campaña");
    // Lógica para cargar campaña
  };

  const handleSettings = () => {
    console.log("Configuración");
    // Lógica para configuración
  };

  const handleExit = async () => {
    try {
      await signOut();
      console.log("Sesión cerrada exitosamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="main-menu-container">
      <div className="image-main-menu">
        <div className="title-bar">
          <h1 className="title-text">Menú Principal</h1>
        </div>
      </div>
      <div className="form-main-menu">
        <div className="main-menu-content">
          <div className="buttons-container">
            <button onClick={handleNewCampaign} className="menu-button">
              Ver eventos
            </button>

            <button onClick={handleLoadCampaign} className="menu-button">
              Crear un nuevo evento
            </button>

            <button
              onClick={handleSettings}
              className="menu-button menu-button-with-icon"
            >
              <span className="icon-symbol">x</span> Ajustes
            </button>

            <button
              onClick={handleExit}
              className="menu-button menu-button-multiline"
            >
              Listado de Módulos (Desarrolladores)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
