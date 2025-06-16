import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coinImg from '../../Assets/Balance/coin.png'
const styles = {
  headerContainer: {
    color: 'white',
    padding: '42px 0',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  badgesContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'start',
    gap: '16px',
  },
  requiredBadge: {
    minWidth:'250px',
    background: '#8B66B7',
    borderRadius: '8px',
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between', 
    gap: '8px',
  },
  totalBadge: {
    background: 'linear-gradient(95.7deg, #121327 49.37%, rgba(252, 21, 92, 0.8) 87.11%)',
    minWidth:'200px',
    borderRadius: '8px',
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between', 
    gap: '8px',
  },
  coinIconContainer: {
    background: '#fbbf24',
    borderRadius: '12px',
    padding: '4px',
  },
  coinIcon: {
    width: '24px',
    height: '24px',
  },
  coinText: {
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  requiredText: {
    textAlign: 'center',
    color: '#8B66B7',
    fontSize: '0.875rem',
    marginTop: '4px',
  }
};

const WelcomeHeader = ({ 
  username = "USERNAME", 
  requiredCoins = 15000, 
  currentCoins = 20000, 
  totalCoins = 19550,
}) => {
  return (
    <div className='container' style={styles.headerContainer}>
      <Container fluid>
        <Row className="">
          <Col xs={12} md={6}>
            <h1 style={styles.title}>
              WELCOME BACK, {username}
            </h1>
          </Col>
          
          <Col xs={12} md={6}>
            <div style={styles.badgesContainer}>
              {/* Required Coins Badge */}
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <div style={styles.requiredBadge}>
                <div style={styles.coinIconContainer}>
                  <img 
                    src={coinImg} 
                    alt="Coin"
                    style={styles.coinIcon}
                  />
                </div>
                <span style={styles.coinText}>
                  {currentCoins.toLocaleString()} / {requiredCoins.toLocaleString()}
                </span>
              </div>
           
              <div style={styles.requiredText}>
              Required Coins this Month
            </div>
            </div>

              {/* Total Coins Badge */}
              <div style={styles.totalBadge}>
                <div style={styles.coinIconContainer}>
                  <img 
                    src={coinImg} 
                    alt="Coin"
                    style={styles.coinIcon}
                  />
                </div>
                <span style={styles.coinText}>
                  {totalCoins.toLocaleString()}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeHeader;