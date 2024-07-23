import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Test to GifItem component", () => {
  const title = "Saitama";
  const url = "http://localhost/Saitama";
  test("should to be match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should be show img url and alt", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug()
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should be show a title in component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
