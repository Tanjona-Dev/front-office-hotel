import { Link } from "react-router-dom";

function BreadCrumbs({ crumbs }) {
  const separator = ">";
  const acceuil = "Acceuil";
  return (
    <div className="">
      <p className="text-lg flex gap-2">
        <Link to={`/`} className="hover:text-black/80">
          {acceuil}{" "}
        </Link>{" "}
        <span>{separator}</span>{" "}
        <span className="hover:text-black/80"> {crumbs}</span>{" "}
      </p>
    </div>
  );
}
export default BreadCrumbs;
