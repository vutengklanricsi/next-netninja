import { React, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { route } from "next/dist/next-server/server/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2500);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops..that page cannot be found</h1>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}
