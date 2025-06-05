import { motion as Motion } from "framer-motion";

function Home() {
  return (
    <Motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      whileIn
    >
      <h1 className="text-4xl text-white bg-amber-500">
        Bienvenue Sur Kambana Hotel
      </h1>
    </Motion.div>
  );
}
export default Home;
