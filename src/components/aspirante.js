import React, { useState, useEffect } from 'react';

const AspirantesForm = () => {
  const [aspirantes, setAspirantes] = useState([]);
  const [form, setForm] = useState({
    id: '',
    firstName: '',
    lastName: '',
    identification: '',
    profession: '',
    email: '',
    phone: '',
    contractType: '',
    medicalRecord: '',
    incomeType: '',
    regional: '',
    signature: null, // Nuevo campo para la firma
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedAspirantes = JSON.parse(localStorage.getItem('aspirantes')) || [];
    setAspirantes(storedAspirantes);
  }, []);

  useEffect(() => {
    localStorage.setItem('aspirantes', JSON.stringify(aspirantes));
  }, [aspirantes]);

  const handleChange = (e) => {
    if (e.target.name === 'signature') {
      setForm({ ...form, signature: e.target.files[0] }); // Guardar el archivo PDF
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.identification || !form.phone) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    if (editing) {
      setAspirantes(aspirantes.map((a) => (a.id === form.id ? form : a)));
      setEditing(false);
    } else {
      setAspirantes([...aspirantes, { ...form, id: Date.now().toString() }]);
    }

    setForm({
      id: '',
      firstName: '',
      lastName: '',
      identification: '',
      profession: '',
      email: '',
      phone: '',
      contractType: '',
      medicalRecord: '',
      incomeType: '',
      regional: '',
      signature: '',
    });
  };

  const handleEdit = (aspirante) => {
    setForm(aspirante);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setAspirantes(aspirantes.filter((a) => a.id !== id));
  };

  return (
    <div className="container">
      <h2>Gestión de Aspirantes</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="column">
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Nombre *" required />
          <input type="text" name="identification" value={form.identification} onChange={handleChange} placeholder="N° Identificación *" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo Electrónico" />
          <select name="contractType" value={form.contractType} onChange={handleChange} required>
            <option value="">Tipo de Contrato</option>
            <option value="Nomina">Nómina</option>
            <option value="Evento">Evento</option>
          </select>
          <select name="incomeType" value={form.incomeType} onChange={handleChange}>
            <option value="">Tipo de Ingreso</option>
            <option value="Covid-19">COVID-19</option>
            <option value="Cronicos">Crónicos</option>
          </select>
        </div>
        <div className="column">
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido *" required />
          <input type="text" name="profession" value={form.profession} onChange={handleChange} placeholder="Cargo/Profesión" />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono *" required />
          <input type="text" name="medicalRecord" value={form.medicalRecord} onChange={handleChange} placeholder="Registro Médico" />
          <input type="text" name="regional" value={form.regional} onChange={handleChange} placeholder="Regional/Sede" />
          <div className="signature-container">
            <label htmlFor="signature">Adjuntar Firma (PDF)</label>
            <input type="file" name="signature" id="signature" accept="application/pdf" onChange={handleChange} />
          </div>

        </div>
        <button type="submit" className={editing ? 'btn-edit' : 'btn-add'}>
          {editing ? 'Actualizar Aspirante' : 'Agregar Aspirante'}
        </button>
      </form>

      <table className="aspirantes-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Identificación</th>
            <th>Profesión</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Contrato</th>
            <th>Registro Médico</th>
            <th>Ingreso</th>
            <th>Regional</th>
            <th>Firma</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {aspirantes.map((a) => (
            <tr key={a.id}>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.identification}</td>
              <td>{a.profession}</td>
              <td>{a.phone}</td>
              <td>{a.email}</td>
              <td>{a.contractType}</td>
              <td>{a.medicalRecord}</td>
              <td>{a.incomeType}</td>
              <td>{a.regional}</td>
              <td>{a.signature ? <a href={URL.createObjectURL(a.signature)} target="_blank" rel="noopener noreferrer">Ver Firma</a> : 'No adjunta'}</td>
              <td>
                <button onClick={() => handleEdit(a)} className="btn-edit">✏️</button>
                <button onClick={() => handleDelete(a.id)} className="btn-delete">🗑️</button>
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

        .signature-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 10px;

        }

        .signature-container label {
          font-weight: bold;
          margin-bottom: 5px;
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
        .aspirantes-table {
          width: 100%;
          border-collapse: collapse;
        }
        .aspirantes-table th, .aspirantes-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .form-grid input,
        .form-grid select {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default AspirantesForm;
