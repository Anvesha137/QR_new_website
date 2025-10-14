import React from 'react';

export default function TestComponent() {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: 'red', 
      textAlign: 'center',
      color: 'white',
      fontSize: '24px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999
    }}>
      <h1>TEST COMPONENT</h1>
      <p>If you can see this, React is working!</p>
      <p>This should be clearly visible with a red background.</p>
    </div>
  );
}