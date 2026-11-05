import { healthResponseSchema } from "@safeport/shared";
import { useEffect, useState } from "react";

type ApiState = "checking" | "reachable" | "unreachable";

const API_URL = import.meta.env.VITE_API_URL;

export function App() {
  const [apiState, setApiState] = useState<ApiState>("checking");

  useEffect(() => {
    fetch(new URL("/health", API_URL))
      .then((response) => response.json())
      .then((body) => healthResponseSchema.parse(body))
      .then(() => setApiState("reachable"))
      .catch(() => setApiState("unreachable"));
  }, []);

  return (
    <main>
      <h1>Safeport</h1>
      <p>API: {apiState}</p>
    </main>
  );
}
