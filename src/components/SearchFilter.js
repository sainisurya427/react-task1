import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const records = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  const filteredRecords = records.filter(record =>
    record.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
