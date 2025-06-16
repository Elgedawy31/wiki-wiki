import React from 'react';
import greenArrowImg from '../../Assets/Balance/Icon-green.png'
import redArrowImg from '../../Assets/Balance/icon-red.png'
const styles = {
  container: {
    background: '#212121',
    borderRadius: '24px',
    padding: '32px',
    color: 'white',
    width: '450px',
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '32px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '14px',
    color: '#9CA3AF',
    marginBottom: '16px',
    textTransform: 'uppercase',
  },
  transaction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  transactionLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  arrowIcon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  },
  transactionInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  transactionTitle: {
    fontSize: '16px',
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: '14px',
    color: '#9CA3AF',
  },
  amount: {
    fontSize: '16px',
    fontWeight: '500',
  },
  amountGreen: {
    color: '#10B981',
  },
  amountRed: {
    color: '#EF4444',
  },
};

const TransactionCard = () => {
  const transactions = [
    {
      id: 1,
      section: 'NEWEST',
      items: [
        { type: 'debit', amount: -21554, date: '26 March 2020, at 05:00 AM' },
        { type: 'credit', amount: 25000, date: '26 March 2020, at 05:00 AM' },
      ]
    },
    {
      id: 2,
      section: 'YESTERDAY',
      items: [
        { type: 'debit', amount: -21554, date: '26 March 2020, at 05:00 AM' },
        { type: 'debit', amount: -21554, date: '26 March 2020, at 05:00 AM' },
        { type: 'debit', amount: -21554, date: '26 March 2020, at 05:00 AM' },
      ]
    },
    {
      id: 3,
      section: 'Last week',
      items: [
        { type: 'credit', amount: 25000, date: '26 March 2020, at 05:00 AM' },
        { type: 'credit', amount: 25000, date: '26 March 2020, at 05:00 AM' },
      ]
    },
  ];

  const formatAmount = (amount) => {
    return amount > 0 ? `${amount.toLocaleString()} Coin` : amount.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Transactions</h2>
      
      {transactions.map((section) => (
        <div key={section.id} style={styles.section}>
          <h3 style={styles.sectionTitle}>{section.section}</h3>
          
          {section.items.map((transaction, index) => (
            <div key={index} style={styles.transaction}>
              <div style={styles.transactionLeft}>
                <img 
                  src={transaction.type === 'credit' ? greenArrowImg : redArrowImg}
                  alt={transaction.type === 'credit' ? "Credit" : "Debit"}
                  style={styles.arrowIcon}
                />
                <div style={styles.transactionInfo}>
                  <span style={styles.transactionTitle}>Transaction</span>
                  <span style={styles.transactionDate}>{transaction.date}</span>
                </div>
              </div>
              <span 
                style={{
                  ...styles.amount,
                  ...(transaction.type === 'credit' ? styles.amountGreen : styles.amountRed)
                }}
              >
                {formatAmount(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;