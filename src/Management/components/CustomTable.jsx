import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useState } from "react";

const styles = {
  container: {
    color: 'white',
    padding: '20px',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #56577A',
    padding: '10px 0',
    color: '#8A8B9F',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  tableRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderBottom: '1px solid #56577A',
  },
  userCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '250px',
  },
  userImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  userName: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
  userUsername: {
    margin: 0,
    color: '#8A8B9F',
    fontSize: '14px',
  },
  statusBadge: {
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    width: '120px',
    textAlign: 'center',
  },
  openButton: {
    background: '#525252',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 20px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
  },
  nullImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#525252',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
  }
};

const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'Done':
        return { background: '#10B981' };
      case 'Failed':
        return { background: '#EF4444' };
      case 'In Process':
        return { background: '#F59E0B' };
      default:
        return { background: '#525252' };
    }
  };

  return (
    <div style={{ ...styles.statusBadge, ...getStatusStyle() }}>
      {status}
    </div>
  );
};

export default function Table({ data = [] ,openDetails}) {
  const navigation = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <div style={styles.container} className="container">
      <div style={styles.tableHeader}>
        <div style={{ width: '250px' }}>USER</div>
        <div style={{ width: '120px', textAlign: 'center' }}>COINS COLLECTED</div>
        <div style={{ width: '120px', textAlign: 'center' }}>TIME CONSUMED</div>
        <div style={{ width: '120px', textAlign: 'center' }}>NO. LIVES</div>
        <div style={{ width: '120px', textAlign: 'center' }}>DATE</div>
        <div style={{ width: '100px', textAlign: 'center' }}>VIEW</div>
      </div>

      {data.length > 0 ? (
        data.map((user) => (
          <div key={user.id} style={styles.tableRow}>
            <div style={styles.userCell}>
              {imgError || !user?.img ? (
                <div style={styles.nullImg}>
                  {user?.name?.slice(0, 1) || 'U'}
                </div>
              ) : (
                <img
                  src={user.img}
                  alt=""
                  onError={() => setImgError(true)}
                  style={styles.userImage}
                />
              )}
              <div>
                <p style={styles.userName}>{user.name}</p>
                <p style={styles.userUsername}>{user.username}</p>
              </div>
            </div>
            
            <StatusBadge status={user.coinsStatus} />
            <StatusBadge status={user.timeStatus} />
            <StatusBadge status={user.livesStatus} />
            
            <div style={{ width: '120px', textAlign: 'center' }}>
              {dayjs(user.created_at).format("DD/MM/YY")}
            </div>
            
            <button
              style={styles.openButton}
              onClick={() => openDetails(user?.id)}
            >
              OPEN
            </button>
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: 'center', margin: '40px 0' }}>NO DATA YET</h1>
      )}
    </div>
  );
}