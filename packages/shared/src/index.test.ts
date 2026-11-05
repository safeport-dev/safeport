import { describe, expect, it } from "vitest";
import { healthResponseSchema } from "./index";

describe("healthResponseSchema", () => {
  it("accepts a healthy response", () => {
    const body = { status: "ok", service: "safeport-api" };
    expect(healthResponseSchema.parse(body)).toEqual(body);
  });

  it("rejects any other status", () => {
    const result = healthResponseSchema.safeParse({ status: "down", service: "safeport-api" });
    expect(result.success).toBe(false);
  });
});
