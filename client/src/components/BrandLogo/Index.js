import React from "react";
import { Link } from "react-router-dom";

export default function Index(onCLick) {
  return (
    <Link to='/' >
      <img onClick={onCLick} src="/cofounder-logo.svg" alt="Logo" className="logo" />
    </Link>
  );
}
