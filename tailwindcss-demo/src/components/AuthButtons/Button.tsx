import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="border-primary cursor-pointer rounded border-2 px-4 py-2 text-xl font-semibold uppercase">
      {children}
    </button>
  );
}
