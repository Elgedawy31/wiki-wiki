import React, { useState, useRef, useEffect } from 'react';

const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    marginBottom:50,
    zIndex: 100
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
    background: 'linear-gradient(180deg, #FC155C 0%, #4E14A5 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '24px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  },
  suggestionBox: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#0000009d',
    borderRadius: '20px',
    marginTop: '8px',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '16px',
    backdropFilter: 'blur(50px)',
  },
  suggestionItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    borderRadius: '12px',
    marginBottom: '8px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginRight: '12px',
    objectFit: 'cover',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    margin: 0,
  },
  userId: {
    color: '#9CA3AF',
    fontSize: '14px',
    margin: 0,
  },
  scrollbar: {
    scrollbarWidth: 'thin',
    scrollbarColor: '#4B5563 transparent',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#4B5563',
      borderRadius: '3px',
    },
  }
};

const Autocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const wrapperRef = useRef(null);

  // Mock data - replace with your actual data fetching logic
  const mockSuggestions = [
    { id: '12345', name: 'Fares Draz', avatar: '/api/placeholder/48/48' },
    { id: '12346', name: 'Fares Draz', avatar: '/api/placeholder/48/48' },
    { id: '12347', name: 'Fares Draz', avatar: '/api/placeholder/48/48' },
    { id: '12348', name: 'Fares Draz', avatar: '/api/placeholder/48/48' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (selectedUser) {
      if (onSelect) {
        onSelect(selectedUser);
      }
    } else {
      const filtered = mockSuggestions.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.includes(query)
      );
      setSuggestions(filtered);
      setIsOpen(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedUser(null);
    
    if (value.length > 0) {
      const filtered = mockSuggestions.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.id.includes(value)
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.name); // Set the input value to the selected name
    setSelectedUser(suggestion);
    setIsOpen(false);
  };

  return (
    <div style={styles.container} ref={wrapperRef}>
      <h2 style={styles.title}>Enter complete ID or Name of the user</h2>
      
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by ID or name..."
          style={styles.input}
        />
        <button 
          onClick={handleSearch}
          style={styles.button}
        >
          GO
        </button>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div style={{...styles.suggestionBox, ...styles.scrollbar}}>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              style={styles.suggestionItem}
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <img 
                src={suggestion.avatar} 
                alt={suggestion.name}
                style={styles.avatar}
              />
              <div style={styles.userInfo}>
                <p style={styles.userName}>{suggestion.name}</p>
                <p style={styles.userId}>ID : {suggestion.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;