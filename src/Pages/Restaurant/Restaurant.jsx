import { useNavigate } from "react-router-dom";

export default function Restaurant() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Retour</button>
        <h1>Types des Restaurant</h1>
      </div>
    </>
  );
}
