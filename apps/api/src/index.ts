import type { HealthResponse } from "@safeport/shared";
import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
  /** Comma-separated origins allowed to call this API. */
  ALLOWED_ORIGINS: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "*",
  cors({
    origin: (origin, c) => {
      const allowed = c.env.ALLOWED_ORIGINS.split(",").map((entry: string) => entry.trim());
      return allowed.includes(origin) ? origin : null;
    },
  }),
);

app.get("/health", (c) => c.json<HealthResponse>({ status: "ok", service: "safeport-api" }));

export default app;
