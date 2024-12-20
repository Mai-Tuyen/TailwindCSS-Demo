import React from "react";
import Button from "./Button";

export default function AuthButtons() {
  return (
    <div className="flex justify-end gap-2">
      <button className="btn-auth">Login</button>
      <button className="btn-auth">Register</button>
    </div>
  );
}
