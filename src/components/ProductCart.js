import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "200px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button
        onClick={onAddToCart}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
