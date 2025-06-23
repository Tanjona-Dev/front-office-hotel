import LogoHotel from "../../assets/image/N_TLogo.png";
import { ArrowUp, Facebook, Twitter } from "lucide-react";

function scrollToTopButton() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer({ liens }) {
  const mailAdress = ["rabemangasoatanjonanasa@gmail.com"];
  const phoneNumbre = ["+261 34 43 281 40"];
  return (
    <div className="flex justify-around bg-amber-50 shadow-lg">
      <ul className="flex flex-col gap-4 mt-7">
        {liens.map((lien, index) => {
          return (
            <div key={index}>
              <li className=" cursor-pointer transition-all duration-100 relative group">
                {lien.name}
                <span className="absolute bottom-0 left-0 right-0 h-px w-0 bg-black group-hover:w-full transition-all duration-400 ease-in-out "></span>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="flex flex-col items-center gap-4 xl:pl-50">
        <div>
          <img src={LogoHotel} alt="logo hotel" className="w-40 h-40" />
        </div>
        <h1 className="hover:underline cursor-pointer">
          {" "}
          IMMEUBLE N&T Hotel Ambohimanarina Antananarivo - Madagascar
        </h1>
        <h2>
          <span className="text-green-500">Mail :</span>{" "}
          {mailAdress.map((mail, index) => (
            <span key={index} className="hover:underline cursor-pointer">
              {mail}
            </span>
          ))}
        </h2>
        <h2>
          {phoneNumbre.map((num, index) => (
            <span key={index} className="hover:underline cursor-pointer">
              {num}
            </span>
          ))}
        </h2>
      </div>
      <div className="mt-7 flex gap-4">
        <div className="p-5 bg-white h-15 rounded-full cursor-pointer hover:bg-black/50 hover:text-white">
          <Facebook size={20} />
        </div>
        <div className="p-5 bg-white h-15 rounded-full cursor-pointer hover:bg-black/50 hover:text-white">
          <Twitter size={20} />
        </div>
        <div
          onClick={() => scrollToTopButton()}
          className="mt-4 flex flex-col items-center rounded-full cursor-pointer group"
        >
          <ArrowUp className="border rounded-full animate-bounce bg-white" />
          <h1 className="group-hover:underline">Scroll Top</h1>
        </div>
      </div>
    </div>
  );
}
export default Footer;
