import { describe, expect, it } from "vitest";
import { Media } from "../src";

describe("Media", () => {
  it("should create correct image URL", async () => {
    expect(Media.getImageUrl(1, 20, 30)).toBe(
      "https://mirabi.app/pub/image/1/20x30",
    );
  });
});
