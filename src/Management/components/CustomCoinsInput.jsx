import React, { useState } from 'react';

const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    marginBottom: 50
  },
  title: {
    color: 'white',
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '24px',
    fontWeight: '500',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    background: '#E5E7EB',
    borderRadius: '50px',
  },
  input: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    padding: '12px 24px',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
     background: '#FFC107',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '24px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  }
};

const NumberInput = ({ onSubmit, title = "Send Coins" }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    // Only allow numbers
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    setValue(newValue);
  };

  const handleSubmit = () => {
    if (onSubmit && value) {
      onSubmit(Number(value));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="WRITE HERE NUMBER OF COINS THAT YOU WANT SEND"
          style={styles.input}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <button 
          onClick={handleSubmit}
          style={styles.button}
        >
          GO
        </button>
      </div>
    </div>
  );
};

export default NumberInput;