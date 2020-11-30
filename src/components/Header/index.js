import React, { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import NavBar from "./NavBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleReSize = () =>
    window.screenY >= 1030 ? setIsOpen(true) : setIsOpen(false);

  useEffect(() => {
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);
  
  return (
    <header>
      <MenuMobile isOpen={isOpen} toggle={toggle} />
      <NavBar isOpen={isOpen} />
    </header>
  );
}

export default Header;
