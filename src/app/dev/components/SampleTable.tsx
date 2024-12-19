import React from 'react';
import { AppTable } from '@/components/common/RsTable';

const SampleTable = () => {
  const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'age', label: 'Age', align: 'right', minWidth: 50 },
    { id: 'role', label: 'Role', minWidth: 150 },
  ];

  const rows = [
    { name: 'John Doe', age: 28, role: 'Developer' },
    { name: 'Jane Smith', age: 34, role: 'Designer' },
    { name: 'Mark Spencer', age: 42, role: 'Manager' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee List</h2>
      <AppTable columns={columns} rows={rows} tableHeight={500} />
    </div>
  );
};

export default SampleTable;
