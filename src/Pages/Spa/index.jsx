import { useNavigate } from "react-router-dom";

export default function Spa() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Retour</button>
        <h1>Types des Spa</h1>
      </div>
    </>
  );
}
