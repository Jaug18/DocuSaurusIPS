import React from 'react';
import Layout from '@theme/Layout';
import AspirantesForm from '@site/src/components/aspirante';

export default function AspirantesPage() {
  return (
    <Layout title="Gestión de aspirantes" description="CRUD completo de aspirantes">
      <main>
        <AspirantesForm />
      </main>
    </Layout>
  );
}
