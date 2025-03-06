import React, { useState } from "react";

const categories = [
  { name: "Contabilidad", link: "/docs/contabilidad" },
  { name: "Recursos Humanos", link: "/docs/recursos-humanos" },
  { name: "Sistemas y Telecomunicaciones", link: "/docs/sistemas" }
];

export default function BasesDeDatos() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowCategories(!showCategories)}
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        {showCategories ? "Ocultar Categorías" : "Mostrar Categorías"}
      </button>
      {showCategories && (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={category.link} style={{ color: "#007bff" }}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
