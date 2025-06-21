import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/actions/UsersSlice';
import { ImgsUrl } from '../../Api/Api';
import './UserAutocomplete.css';

const UserAutocomplete = ({ 
  value, 
  onChange, 
  placeholder = "Search users...",
  className = "",
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dispatch = useDispatch();
  const { allUsers, loading } = useSelector(state => state.users);
  
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Debounce search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() || isOpen) {
        dispatch(getAllUsers({ 
          name: searchTerm.trim(), 
          page: 1, 
          limit: 10 
        }));
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, dispatch, isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Set selected user from value prop
  useEffect(() => {
    if (value && typeof value === 'object') {
      setSelectedUser(value);
      setSearchTerm(value.name || '');
    } else if (value && typeof value === 'string') {
      setSearchTerm(value);
    }
  }, [value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
    
    if (!newValue.trim()) {
      setSelectedUser(null);
      onChange && onChange(null);
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (!searchTerm.trim()) {
      dispatch(getAllUsers({ name: '', page: 1, limit: 10 }));
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSearchTerm(''); // Clear the input text when user is selected
    setIsOpen(false);
    setHighlightedIndex(-1);
    onChange && onChange(user);
  };

  const handleClearSelection = () => {
    setSelectedUser(null);
    setSearchTerm('');
    setIsOpen(false);
    onChange && onChange(null);
  };


  const handleKeyDown = (e) => {
    if (!isOpen || !allUsers.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < allUsers.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : allUsers.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && allUsers[highlightedIndex]) {
          handleUserSelect(allUsers[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
      default:
        break;
    }
  };

  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count?.toString() || '0';
  };

  const getUserAvatar = (user) => {
    if (user.img) {
      return user.img.startsWith('http') ? user.img : `${ImgsUrl}/${user.img}`;
    }
    return null;
  };

  return (
    <div className={`user-autocomplete ${className}`} ref={containerRef}>
      <div className="autocomplete-input-container">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={`autocomplete-input ${selectedUser ? 'has-selection' : ''}`}
          autoComplete="off"
        />
        
        {selectedUser && (
          <div className="selected-user-preview">
            <div className="selected-user-avatar">
              {getUserAvatar(selectedUser) ? (
                <img 
                  src={getUserAvatar(selectedUser)} 
                  alt={selectedUser.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="avatar-placeholder"
                style={{ display: getUserAvatar(selectedUser) ? 'none' : 'flex' }}
              >
                {selectedUser.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            </div>
            <div className="selected-user-info">
              <span className="selected-user-name">{selectedUser.name}</span>
              <span className="selected-user-nick">@{selectedUser.nick_name}</span>
            </div>
            <button 
              className="clear-selection-btn"
              onClick={handleClearSelection}
              type="button"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="autocomplete-icon">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : selectedUser ? (
            <button 
              className="dropdown-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="autocomplete-dropdown">
          {loading ? (
            <div className="dropdown-loading">
              <div className="loading-spinner"></div>
              <span>Searching users...</span>
            </div>
          ) : allUsers.length > 0 ? (
            <div className="dropdown-content ">
              <ul className="user-list" ref={listRef}>
                {allUsers.map((user, index) => (
                  <li
                    key={user.id}
                    className={`user-item ${index === highlightedIndex ? 'highlighted' : ''}`}
                    onClick={() => handleUserSelect(user)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <div className="user-avatar">
                      {getUserAvatar(user) ? (
                        <img 
                          src={getUserAvatar(user)} 
                          alt={user.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="avatar-placeholder"
                        style={{ display: getUserAvatar(user) ? 'none' : 'flex' }}
                      >
                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                      </div>
                    </div>
                    
                    <div className="user-details">
                      <div className="user-main-info">
                        <span className="user-name">{user.name}</span>
                        <span className="user-nick">@{user.nick_name}</span>
                      </div>
                      <div className="user-stats">
                        <span className="followers-count">
                          {formatFollowers(user.followers)} followers
                        </span>
                        <span className="user-id">ID: {user.id}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
            </div>
          ) : searchTerm.trim() ? (
            <div className="no-results">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>No users found</p>
              <span>Try searching with a different term</span>
            </div>
          ) : (
            <div className="search-prompt">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Start typing to search users</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAutocomplete;
