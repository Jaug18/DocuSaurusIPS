import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default function ContabilidadCRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

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
      <h2>Gestión de Contabilidad</h2>
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
