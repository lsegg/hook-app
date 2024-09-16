import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const types = data?.types.map((slot) => slot.type.name).join(", ");

  return (
    <>
      <h1>Pokemon data</h1>
      {isLoading && <LoadingMessage />}
      {!isLoading && (
        <PokemonCard
          id={data.id}
          name={data.name}
          types={types}
          sprites={data.sprites}
          increment={increment}
          decrement={decrement}
        />
      )}
    </>
  );
};
