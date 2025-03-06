import React from 'react';
import Layout from '@theme/Layout';
import PatientForm from '@site/src/components/PatientForm';

export default function Pacientes() {
  return (
    <Layout title="Gestión de Pacientes" description="CRUD completo de pacientes">
      <main>
        <PatientForm />
      </main>
    </Layout>
  );
}
