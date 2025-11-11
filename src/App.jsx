// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Contact from "./components/Contact";
import WhatIKnow from "./components/WhatIKnow";
import Cv from "./components/Cv";
import { useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      if (typeof window === "undefined") return;

      const { hash, pathname } = window.location;
      const normalizedHash = hash ? hash.toLowerCase() : "";
      const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "");

      if (normalizedHash === "#cv" || normalizedPath === "/cv") {
        setActiveSection("cv");
        if (normalizedPath === "/cv" && normalizedHash !== "#cv") {
          window.history.replaceState(null, "", "#cv");
        }
        return;
      }

      setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("popstate", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const isCvActive = activeSection === "cv";

  return (
    <div className="">
      <Navbar initialOpen={isCvActive} hideToggle={isCvActive} />
      {isCvActive ? (
        <Cv />
      ) : (
        <>
          <Hero />
          <WhatIKnow />
          <Contact />
          <footer className="p-3 text-center">
            <h6 className="mb-3">NIMESH</h6>
            <p>nimeshmeh7a © All CopyRights Reserved 2025</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
