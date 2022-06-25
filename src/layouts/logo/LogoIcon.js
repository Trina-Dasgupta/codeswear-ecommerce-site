import React from "react";
import { Link } from "@mui/material";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
      {/* CodesWear Admin Pannel */}
      <img src="https://www.codeswear.com/_next/image?url=%2Flogo.png&w=256&q=75" alt={LogoDark} />
    </Link>
  );
};

export default LogoIcon;
