import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const styles = {
  container: {
    padding: '16px 0',
    width: '100%',
    marginBottom:'50px'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    padding: '8px',
  },
  tabButton: {
    background: 'transparent',
    border: 'none',
    color: '#9ca3af',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeTab: {
    color: '#ffffff',
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    width: '100%',
    height: '2px',
    background: '#ffffff',
  }
};

const ManagementTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('targets');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div style={styles.container}>
      <Container>
        <div style={styles.tabContainer}>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'targets' ? styles.activeTab : {})
            }}
            onClick={() => handleTabClick('targets')}
          >
            Access Assigned Targets
            {activeTab === 'targets' && <div style={styles.activeIndicator} />}
          </button>
          
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'coins' ? styles.activeTab : {})
            }}
            onClick={() => handleTabClick('coins')}
          >
            Send Coins
            {activeTab === 'coins' && <div style={styles.activeIndicator} />}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ManagementTabs;