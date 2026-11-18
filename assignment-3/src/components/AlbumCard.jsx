import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ Album, onAddToCart }) => {
  if (!product) return null;

  return (
    <article className="album-card">
      <Link className="album-img-link" to={`/album/${album.id}`}>
        <img
          className="album-image"
          src={album.image}
          alt={album.name}
          loading="lazy"
        />
      </Link>
      <div className="album-body">
        <span className="album-category">{album.category}</span>
        <h3 className="album-title">
          <Link to={`/album/${album.id}`}>{album.name}</Link>
        </h3>
        <p className="album-price">
          $
          {typeof album.price === "number"
            ? product.price.toFixed(2)
            : "Contact For Price"}
        </p>
      </div>
    </article>
  );
};
