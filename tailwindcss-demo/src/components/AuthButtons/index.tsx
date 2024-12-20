import React from "react";
import Button from "./Button";

export default function AuthButtons() {
  return (
    <div className="flex justify-center gap-2 md:justify-end">
      <button className="btn-auth">Login</button>
      <button className="btn-auth">Register</button>
    </div>
  );
}
