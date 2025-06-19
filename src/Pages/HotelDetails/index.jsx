import { useNavigate } from "react-router-dom";

export default function HotelDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Retour</button>
        <h1>Details de l'hotel</h1>
      </div>
    </>
  );
}
