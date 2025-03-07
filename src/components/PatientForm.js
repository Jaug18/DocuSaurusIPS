import React, { useState, useEffect } from 'react';

const PatientForm = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    healthStatus: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.age || !form.phone) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    if (editing) {
      setPatients(patients.map((p) => (p.id === form.id ? form : p)));
      setEditing(false);
    } else {
      setPatients([...patients, { ...form, id: Date.now().toString() }]);
    }

    setForm({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      healthStatus: '',
    });
  };

  const handleEdit = (patient) => {
    setForm(patient);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h2>Gestión de Pacientes</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Nombre *" required />
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido *" required />
        <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Edad *" required min="0" />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Selecciona Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono *" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo Electrónico" />
        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Dirección" />
        <select name="healthStatus" value={form.healthStatus} onChange={handleChange}>
          <option value="">Estado de Salud</option>
          <option value="Estable">Estable</option>
          <option value="En tratamiento">En tratamiento</option>
          <option value="Crítico">Crítico</option>
        </select>
        <button type="submit" className={editing ? 'btn-edit' : 'btn-add'}>
          {editing ? 'Actualizar Paciente' : 'Agregar Paciente'}
        </button>
      </form>

      <table className="patients-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Estado de Salud</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.phone}</td>
              <td>{p.email}</td>
              <td>{p.address}</td>
              <td>{p.healthStatus}</td>
              <td>
                <button onClick={() => handleEdit(p)} className="btn-edit">✏️</button>
                <button onClick={() => handleDelete(p.id)} className="btn-delete">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: 'Roboto', sans-serif;
        }
        h2 {
          text-align: center;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .form-grid input, .form-grid select {
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .btn-add {
          grid-column: span 2;
          padding: 10px;
          background: #28a745;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        .btn-edit { background: #ffa500; }
        .btn-delete { background: #dc3545; }
        .patients-table {
          width: 100%;
          border-collapse: collapse;
        }
        .patients-table th, .patients-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default PatientForm;