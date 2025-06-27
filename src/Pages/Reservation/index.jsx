import LogoHotel from "../../assets/Logo/N_TLogo.png";

function Reservation() {
  return (
    <div className="bg-amber-50">
      <div className="flex justify-center">
        <img src={LogoHotel} alt="" className="w-35" />
      </div>
      <h1>RESERVATION</h1>
      <form action="">
        <input type="text" />
      </form>
    </div>
  );
}
export default Reservation;
