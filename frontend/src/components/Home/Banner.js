import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import Search from "./Search";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={(e) => setIsOpen(true)}>
            A place to get
          </span>
          {isOpen ? <Search /> : null}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
