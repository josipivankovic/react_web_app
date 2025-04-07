import React, { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  imageUrl?: string;
}

const Pokemon: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Neuspješan dohvat podataka.");
        }
        return response.json();
      })
      .then((data) => {
        const pokemoni = data.results.map((pokemon: Pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop(); // iz URL-a izvučemo ID
          return {
            ...pokemon,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });
        setPokemonList(pokemoni);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška: {error}</p>;

  return (
    <div>
      <h2>Popis Pokemona</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "150px", textAlign: "center" }}>
            <img src={pokemon.imageUrl} alt={pokemon.name} width="96" height="96" />
            <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
