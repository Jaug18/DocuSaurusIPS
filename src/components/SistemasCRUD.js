import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default function SistemasCRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("sistemasItems")) || [];
    setItems(storedItems);
  }, []);

  // Guardar datos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("sistemasItems", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem }]);
      setNewItem("");
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditing(id);
    setEditText(name);
  };

  const handleUpdate = (id) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: editText } : item))
    );
    setEditing(null);
    setEditText("");
  };

  return (
    <div>
      <h2>Gestión de Sistemas y Telecomunicaciones</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nuevo elemento"
        />
        <button onClick={handleAdd}><FaPlus /></button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editing === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(item.id)}><FaEdit /></button>
              </>
            ) : (
              <>
                {item.name} 
                <button onClick={() => handleEdit(item.id, item.name)}><FaEdit /></button>
                <button onClick={() => handleDelete(item.id)}><FaTrash /></button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
