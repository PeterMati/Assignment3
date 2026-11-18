import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetailPage = ({ albums, onAddToCart }) => {
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);

  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return (
      <div className="detail-error">
        <h2>Album Not Found</h2>
        <Link className="btn btn-secondary" to="/">
          Return to Main Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{album.title}</span>
      </nav>

      <div className="detail-grid">
        <img src={album.image} alt={album.title} className="detail-img" />

        <div className="detail-info">
          <span className="album-genre">{album.genre}</span>
          <h1 className="detail-title">{album.title}</h1>
          <h2 className="detail-artist">{album.artist}</h2>
          <p className="detail-price">${album.price.toFixed(2)}</p>
          <p className="detail-desc">{album.description}</p>
          <p className="detail-catalog-number">
            Catalog Number: {album.specs.catalogNumber}
          </p>
          <p className="detail-weight">Weight: {album.specs.weight}</p>
          <p className="detail-speed">Speed: {album.specs.speed}</p>
          <div className="stock-tag">
            {album.stock > 0
              ? `✔️ In Stock (${album.stock} units available)`
              : "Out of Stock"}
          </div>

          <div className="detail-actions">
            <div className="qty-input-group">
              <label htmlFor="detail-qty">Quantity: </label>
              <input
                type="number"
                id="detail-qty"
                min="1"
                max={album.stock}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(album, qty)}
            >
              Add {qty} to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailPage;
