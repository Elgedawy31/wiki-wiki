import React from "react";
import userImg from "../../../Assets/Performance/user.png";
import userImg2 from "../../../Assets/Performance/user2.png";
import CircularChart from "../../../Components/charts/CircualChart";

function LiveDetails({ liveData }) {
  console.log(liveData)
  
  // Get top streamers data
  const topStreamers = liveData?.top_streamers_by_duration|| [
  
  ];
  const topGifters = liveData?.top_gifters_by_coins || [];
  
  // Helper function to format duration (hours from backend)
  const formatDuration = (hours) => {
    if (!hours) return "0H:0M";
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    return `${wholeHours}H:${minutes}M`;
  };

  // Helper function to get user avatar or first letter
  const getUserAvatar = (user, className = "user-avatar") => {
    if (user?.img) {
      return <img className={className} src={user.img} alt={user.name} style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />;
    }
    if (user?.name) {
      return (
        <div 
          className={`${className} null-img `}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      );
    }
    return null;
  };

  // Helper function to render user layout based on number of users
  const renderUserLayout = (users, type) => {
    if (users.length === 0) return null;

    if (users.length === 1) {
      // Single user - center layout
      return (
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <div className="mb-3">
            {getUserAvatar(users[0])}
          </div>
          <div className="text-center">
            <h6 className="mb-1">{users[0].name}</h6>
            <span>{type === 'streaming' ? formatDuration(users[0].live_duration_hours) : `${users[0].coins_sent} Coins`}</span>
          </div>
        </div>
      );
    }

    if (users.length === 2) {
      // Two users - side by side
      return (
        <div className="d-flex align-items-center justify-content-around text-white">
          <div className="d-flex flex-column align-items-center">
            <div className="mb-2">
              {getUserAvatar(users[0])}
            </div>
            <div className="text-center">
              <h6 className="mb-1">{users[0].name}</h6>
              <span>{type === 'streaming' ? formatDuration(users[0].live_duration_hours) : `${users[0].coins_sent} Coins`}</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-2">
              {getUserAvatar(users[1])}
            </div>
            <div className="text-center">
              <h6 className="mb-1">{users[1].name}</h6>
              <span>{type === 'streaming' ? formatDuration(users[1].live_duration_hours) : `${users[1].coins_sent} Coins`}</span>
            </div>
          </div>
        </div>
      );
    }

    // Three or more users - original layout with winner in center
    return (
      <>
        <div className="users d-flex align-items-center justify-content-center gap-3">
          {users[1] && (
            <div className="user-details text-white text-center">
              <div className="mb-2 d-flex justify-content-center">
                {getUserAvatar(users[1])}
              </div>
              <h6 className="mb-1">{users[1].name}</h6>
              <span>{type === 'streaming' ? formatDuration(users[1].live_duration_hours) : `${users[1].coins_sent} Coins`}</span>
            </div>
          )}
          
          <div className="user-details text-white text-center" style={{ flex: 1 }}>
            <div className="mb-2 d-flex justify-content-center">
              {getUserAvatar(users[0], "first-img")}
            </div>
            <h6 className="mb-1">{users[0].name}</h6>
            <span>{type === 'streaming' ? formatDuration(users[0].live_duration_hours) : `${users[0].coins_sent} Coins`}</span>
          </div>
          
          {users[2] && (
            <div className="user-details text-white text-center">
              <div className="mb-2 d-flex justify-content-center">
                {getUserAvatar(users[2])}
              </div>
              <h6 className="mb-1">{users[2].name}</h6>
              <span>{type === 'streaming' ? formatDuration(users[2].live_duration_hours) : `${users[2].coins_sent} Coins`}</span>
            </div>
          )}
        </div>
        
        {/* Show additional users if more than 3 */}
        {users.length > 3 && (
          <div className="mt-3 d-flex flex-wrap justify-content-center gap-3">
            {users.slice(3, 6).map((user, index) => (
              <div key={user.id} className="d-flex align-items-center text-white">
                <div className="me-2">
                  {getUserAvatar(user)}
                </div>
                <div>
                  <h6 className="mb-0 small">{user.name}</h6>
                  <small>{type === 'streaming' ? formatDuration(user.live_duration_hours) : `${user.coins_sent} Coins`}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  // Calculate chart percentages
  const livePercentage = liveData?.live_summary ? 
    Math.min(100, Math.max(0, (liveData.live_summary.this_month_count / Math.max(liveData.live_summary.last_month_count, 1)) * 100)) : 0;
  
  const coinsPercentage = liveData?.coins_summary ? 
    Math.min(100, Math.max(0, (liveData.coins_summary.this_month_total / Math.max(liveData.coins_summary.last_month_total, 1)) * 100)) : 0;

  return (
    <div>
      <div className=" gap-5 mb-5 d-flex align-items-center justify-content-center">
        <div className="top-users-streaming  py-4 px-5">
          <h5 className="text-white">Top Users</h5>
          <span className="text-white mb-4">streaming</span>
          {topStreamers.length > 0 ? (
            <div className="py-3">
              {renderUserLayout(topStreamers, 'streaming')}
            </div>
          ) : (
            <div className="text-white text-center py-4">
              <h6>No Streaming Data</h6>
              <p className="mb-0">No streaming activity found for this period.</p>
            </div>
          )}
        </div>
        
        <div className="top-users-streaming coins py-4 px-5">
          <h5 className="text-white">Top Users</h5>
          <span className="text-white mb-4">Coins</span>
          {topGifters.length > 0 ? (
            <div className="py-3">
              {renderUserLayout(topGifters, 'coins')}
            </div>
          ) : (
            <div className="text-white text-center py-4">
              <h6>No Coins Data</h6>
              <p className="mb-0">No gifting activity found for this period.</p>
            </div>
          )}
        </div>
      </div>
      <div className=" gap-5 d-flex align-items-center justify-content-center">
        <div className="bottom-sec  p-4 ">
          <h4 className="text-white ">Live</h4>
          <div className="core-bottom d-flex align-items-center justify-content-between">
            <div>
              <div className="first-core mb-3">
                <div>This Month</div>
                <span>{liveData?.live_summary?.this_month_count || 0}</span>
              </div>
              <div className="first-core">
                <div>Last Month</div>
                <span>{liveData?.live_summary?.last_month_count || 0}</span>
              </div>
            </div>
            <div className="main-circural-chart">
              <CircularChart colors={["#FC155C"]} percent={Math.round(livePercentage)} />
            </div>
          </div>
        </div>

        <div className="bottom-sec  p-4 ">
          <h4 className="text-white ">Coins</h4>
          <div className="core-bottom  d-flex align-items-center justify-content-between">
            <div>
              <div className="first-core coins mb-3">
                <div>This Month Total</div>
                <span>{liveData?.coins_summary?.this_month_total || 0}</span>
              </div>
              <div className="first-core coins">
                <div>Last Month Total</div>
                <span>{liveData?.coins_summary?.last_month_total || 0}</span>
              </div>
            </div>
            <div className="main-circural-chart">
              <CircularChart colors={["#F0C727"]} percent={Math.round(coinsPercentage)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDetails;
