import PropTypes from "prop-types";
import { useState, useRef, useLayoutEffect } from "react";

export const PokemonCard = ({
  id,
  name,
  types,
  sprites = {},
  increment,
  decrement,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShiny, setIsShiny] = useState(false);
  const [widthSize, setWidthSize] = useState({ width: "50%" });
  const pokeRef = useRef();

  useLayoutEffect(() => {
    const { width } = pokeRef.current.getBoundingClientRect();
    setWidthSize({ width });
    return () => {};
  }, [sprites]);

  return (
    <div className="card text-capitalize" style={widthSize} ref={pokeRef}>
      <img
        src={
          isHovered
            ? isShiny
              ? sprites.back_shiny
              : sprites.back_default
            : isShiny
            ? sprites.front_shiny
            : sprites.front_default
        }
        className="card-img-top"
        alt={name}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="card-body" style={{ background: "#f1f1f1" }}>
        <h5 className="card-title">
          # {id} - {name}
        </h5>
        <p className="card-text">Types: {types}</p>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => (id > 1 ? decrement() : null)}
          >
            Previous
          </button>
          <button
            type="button"
            className={`btn ${
              isShiny ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={() => setIsShiny(!isShiny)}
          >
            Shiny
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => increment()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  sprites: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
