import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("test in GifExpertApp", () => {
  const title = "Gif Expert App";
  test("should be have title", () => {
    render(<GifExpertApp />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("should first", () => {
    render(<GifExpertApp />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
