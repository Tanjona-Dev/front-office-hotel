import { Bath, CoffeeIcon, ParkingCircle, Wifi } from "lucide-react";

function Avantage() {
  return (
    <div className="bg-teal-900 text-white flex flex-col gap-12 py-5">
      <h1 className="text-4xl mx-auto">Confort et prestations incluses</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <Wifi />
          </span>
          <p className="mt-2 text-lg">Wifi gratuit</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <CoffeeIcon />
          </span>
          <p className="mt-2 text-lg">Petit-déjeuner inclus</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <ParkingCircle />
          </span>
          <p className="mt-2 text-lg">Parking gratuit</p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <Bath />
          </span>
          <p className="mt-2 text-lg">Spa & bien-être</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">Loisirs & Activités</h1>
          <ul className="space-y-3">
            <li>✔Location de paddle, kayak ou snorkeling</li>
            <li>✔Excursions en bateau ou plongée organisées </li>
            <li>✔Massages et spa avec vue mer</li>
            <li>✔Soirées animées (musique, feux de camp, etc.)</li>
            <li>✔Transats et parasols gratuits</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-4xl">Restauration & Services</h1>
          <ul>
            <li>✔Petit-déjeuner inclus / buffet en bord de mer</li>
            <li>✔Restaurant local avec vue océan </li>
            <li>✔Bar/lounge avec cocktails tropicaux</li>
            <li>✔Room service</li>
            <li>✔Cuisine locale et internationale</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Avantage;
