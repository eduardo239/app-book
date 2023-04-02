import React from "react";
import { Link } from "react-router-dom";

const LinkTo = ({ label, to }) => {
  return (
    <div className="mt-3">
      <p className="p-2 text-sm">
        <Link to={to}>{label}</Link>
      </p>
    </div>
  );
};

export default LinkTo;
