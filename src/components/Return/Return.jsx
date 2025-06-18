import { useNavigate } from "react-router-dom";

export default function Return({ children }) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Autoriser le retour uniquement si l'utilisateur vient d'une certaine route
    if (window.history.state?.usr?.fromHome) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <button
        onClick={handleBack}
        // className="fixed top-4 left-50 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Retour
      </button>
      {children}
    </div>
  );
}
