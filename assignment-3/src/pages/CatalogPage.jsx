import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, onAddToCart }) {
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  const validAlbums = albums || [];

  const filteredAlbums =
    selectedGenre === "All"
      ? validAlbums
      : validAlbums.filter((p) => p.genre === selectedGenre);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1>Explore Our Selection of Albums</h1>
        <p>Some of the best albums that have ever been released.</p>
      </header>

      <div className="filter-bar">
        {genres.map((cat) => {
          return (
            <button
              key={cat}
              className={`filter-pill ${selectedGenre === cat ? "active" : ""}`}
              onClick={() => setSelectedGenre(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="album-grid">
        {filteredAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
