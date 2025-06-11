import { Bath, CoffeeIcon, ParkingCircle, Wifi } from "lucide-react";

function Avantage() {
  return (
    <div className="bg-teal-900 text-white flex flex-col gap-5 py-5">
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
    </div>
  );
}
export default Avantage;
