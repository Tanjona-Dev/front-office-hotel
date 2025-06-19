import { useNavigate } from "react-router-dom";

export default function Bar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Retour</button>
        <h1>Types des bar</h1>
      </div>
    </>
  );
}

