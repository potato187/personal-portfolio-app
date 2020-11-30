import React from "react";
import { Bars, Menu } from "./MenuMobileElements";

function MenuMobile({ isOpen, toggle }) {
  const handleOnClick = () => {
    if (toggle) {
      toggle();
    }
  };

  return (
    <>
      <Menu className="active" active={isOpen} onClick={handleOnClick}>
        <Bars />
      </Menu>
    </>
  );
}

MenuMobile.defaultProps = {
  isOpen: false,
  toggle: null,
};
export default MenuMobile;
