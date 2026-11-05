import { healthResponseSchema } from "@safeport/shared";
import { describe, expect, it } from "vitest";
import app from "./index";

const env = { ALLOWED_ORIGINS: "https://app.example, https://other.example" };

function getHealth(origin: string) {
  return app.request("/health", { headers: { Origin: origin } }, env);
}

describe("GET /health", () => {
  it("returns a response matching the shared schema", async () => {
    const response = await getHealth("https://app.example");
    expect(response.status).toBe(200);
    expect(healthResponseSchema.safeParse(await response.json()).success).toBe(true);
  });

  it("allows every configured origin", async () => {
    const response = await getHealth("https://other.example");
    expect(response.headers.get("Access-Control-Allow-Origin")).toBe("https://other.example");
  });

  it("does not allow other origins", async () => {
    const response = await getHealth("https://evil.example");
    expect(response.headers.get("Access-Control-Allow-Origin")).toBeNull();
  });
});
