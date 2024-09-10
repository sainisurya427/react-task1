import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../data.json';

function DataGridComponent() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(data);
  }, []);

  const columns = [
    { field: 'customer', headerName: 'Customer', width: 200 },
    { field: 'last', headerName: 'Last', width: 150 },
    { field: 'orders', headerName: 'Orders', width: 100, type: 'number' },
    { field: 'totalSpent', headerName: 'Total Spent', width: 150 },
    { field: 'latestPurchase', headerName: 'Latest Purchase', width: 250 },
    { field: 'segment', headerName: 'Segment', width: 150 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={5} 
        rowsPerPageOptions={[5]} 
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default DataGridComponent;
