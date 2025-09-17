import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Form Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Your input: {name}</h2>
    </div>
  );
}

export default App;
