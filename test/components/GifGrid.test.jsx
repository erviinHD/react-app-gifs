import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";
jest.mock("../../src/hooks/useFecthGifs");

describe("Test in GifGrid", () => {
  const category = "Valorant";
  test("should be show initial loading", () => {
    useFecthGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    //screen.debug()
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should be show items when images is loading", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Valorant",
        url: "https://localhost/valorant.png",
      },
      {
        id: "123",
        title: "DBZ",
        url: "https://localhost/dbx.png",
      },
    ];
    useFecthGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
