import React from "react";
import { Link,withRouter} from "react-router-dom";

function BrandLogo({history}) {
  return (
      <img onClick={()=>history.push('/')} src="/cofounder-logo.svg" alt="Logo" className="logo" />
  );
}

export default withRouter(BrandLogo)
