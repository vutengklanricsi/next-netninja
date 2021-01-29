import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops..that page cannot be found</h1>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}
