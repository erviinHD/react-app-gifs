import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

describe("test in useFecthGifs", () => {
  test("should be return initial status", () => {
    const { result } = renderHook(() => useFecthGifs("Valorant"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should be return images array and isLoading in false", async () => {
    const { result } = renderHook(() => useFecthGifs("Valorant"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
