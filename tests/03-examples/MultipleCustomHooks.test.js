import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("MultipleCustomHooks", () => {
  const mockedIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockedIncrement,
  });

  const mockedPokemon = {
    id: 1,
    name: "bulbasaur",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    },
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Pokemon data"));
    expect(screen.getByText("Loading..."));
  });

  test("should show a pokemon card", () => {
    useFetch.mockReturnValue({
      data: mockedPokemon,
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Types: grass, poison")).toBeTruthy();

    const previousButton = screen.getByRole("button", { name: "Previous" });
    const shinyButton = screen.getByRole("button", { name: "Shiny" });
    const nextButton = screen.getByRole("button", { name: "Next" });

    expect(previousButton).toBeTruthy();
    expect(shinyButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: mockedPokemon,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    expect(mockedIncrement).toHaveBeenCalled();
  });
});
