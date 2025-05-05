import * as React from "react";
import LogoImage from "../img/logo-transparent-black.png";
import WhiteLogoImage from "../img/logo-transparent-white.png";

function SvgComponent({ variant = "default", ...props }) {
  const logoSrc = variant === "white" ? WhiteLogoImage : LogoImage;
  
  return (
    <img
      src={logoSrc}
      alt="Palousis Logo"
      style={{
        maxHeight: '60px',
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        paddingTop: '5px',
        paddingBottom: '5px',
      }}
      {...props}
    />
  );
}

export default SvgComponent;