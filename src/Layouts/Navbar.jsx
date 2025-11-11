import { useCallback, useEffect, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = ({ initialOpen = false, hideToggle = false }) => {
  const { nav } = content;

  const computeActiveIndex = useCallback(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    const { pathname, hash } = window.location;
    const normalizedPath =
      pathname === "/" ? "/" : pathname.toLowerCase().replace(/\/+$/, "");
    const normalizedHash = hash ? hash.toLowerCase() : "";

    const matchIndex = nav.findIndex(({ link }) => {
      const normalizedLink = link.toLowerCase();

      if (normalizedLink === "#cv" && normalizedPath === "/cv") {
        return true;
      }

      if (normalizedLink.startsWith("#")) {
        if (normalizedHash) {
          return normalizedLink === normalizedHash;
        }
        return normalizedLink === "#home" && normalizedPath === "/";
      }

      if (normalizedLink.startsWith("/#")) {
        if (normalizedHash) {
          return `/${normalizedHash}` === normalizedLink;
        }
        return (
          normalizedPath === "/" &&
          (normalizedLink === "/#home" || normalizedLink === "/")
        );
      }

      if (normalizedLink === normalizedPath) {
        return true;
      }

      return false;
    });

    return matchIndex === -1 ? 0 : matchIndex;
  }, [nav]);

  const [showMenu, setShowMenu] = useState(initialOpen);
  const [active, setActive] = useState(() => computeActiveIndex());

  useEffect(() => {
    setShowMenu(initialOpen);
  }, [initialOpen]);

  useEffect(() => {
    const updateActive = () => setActive(computeActiveIndex());
    updateActive();

    window.addEventListener("hashchange", updateActive);
    window.addEventListener("popstate", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("popstate", updateActive);
    };
  }, [computeActiveIndex]);

  const handleNavClick = (index) => {
    setActive(index);
    if (!hideToggle) {
      setShowMenu(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      {!hideToggle && (
        <button
          type="button"
          className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2 transition hover:bg-white/60 focus:outline-none focus-visible:ring focus-visible:ring-dark_primary/40"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <HiMenuAlt2 size={34} />
        </button>
      )}
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
        aria-label="Primary"
      >
        {nav.map((item, i) => (
          <a
            key={item.link}
            href={item.link}
            onClick={() => handleNavClick(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer transition-colors duration-200 ${
              i === active ? "bg-dark_primary text-white" : ""
            }`}
            aria-current={i === active ? "page" : undefined}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
