import Progetti from "../sections/Progetti.jsx";
import Contatti from "../sections/Contatti.jsx";
import ChiSono from "../sections/ChiSono.jsx";

export default function PageSwitch({ page }) {
  if (page === "progetti") return <Progetti />;
  if (page === "chi-sono") return <ChiSono />;
  if (page === "contatti") return <Contatti />;
  return null;
}
