import React from "react";
import userImg from "../../../Assets/Performance/user.png";
import userImg2 from "../../../Assets/Performance/user2.png";
import CircularChart from "../../../Components/charts/CircualChart";
function LiveDetails({ liveData }) {

  console.log(liveData)
  
  // Get top streamers data
  const topStreamers = liveData?.top_streamers_by_duration2 || [{
            "id": 206,
            "name": "WikiWiki",
            "img": null,
            "coins_sent": 0,
            "gifts_sent": 10
        },
     
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
  const getUserAvatar = (user, defaultImg) => {
    if (user?.img) {
      return <img className="first-img" src={user.img} alt={user.name} />;
    }
    if (user?.name) {
      return (
        <div 
          className="first-img d-flex null-img "
          
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      );
    }
    return <img className="first-img" src={defaultImg} alt="" />;
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
            <>
              <div className="users d-flex align-items-center justify-content-center gap-3">
                {topStreamers[1] && (
                  <div className="user-details text-white">
                    <h6>{topStreamers[1].name}</h6>
                    <span>{formatDuration(topStreamers[1].live_duration_hours)}</span>
                  </div>
                )}
                <div className="users-images" style={{ flex: 1 }}>
                  {topStreamers[0] && getUserAvatar(topStreamers[0], userImg)}
                  {topStreamers[1] && getUserAvatar(topStreamers[1], userImg2)}
                  {topStreamers[2] && getUserAvatar(topStreamers[2], userImg)}
                </div>
                {topStreamers[2] && (
                  <div className="user-details text-white">
                    <h6>{topStreamers[2].name}</h6>
                    <span>{formatDuration(topStreamers[2].live_duration_hours)}</span>
                  </div>
                )}
              </div>
              {topStreamers[0] && (
                <div className="user-details text-white mt-3">
                  <h6>{topStreamers[0].name}</h6>
                  <span>{formatDuration(topStreamers[0].live_duration_hours)}</span>
                </div>
              )}
            </>
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
            <>
              <div className="users d-flex align-items-center justify-content-center gap-3">
                {topGifters[1] && (
                  <div className="user-details text-white">
                    <h6>{topGifters[1].name}</h6>
                    <span>{topGifters[1].coins_sent} Coins</span>
                  </div>
                )}
                <div className="users-images" style={{ flex: 1 }}>
                  {topGifters[0] && getUserAvatar(topGifters[0], userImg)}
                  {topGifters[1] && getUserAvatar(topGifters[1], userImg2)}
                  {topGifters[2] && getUserAvatar(topGifters[2], userImg)}
                </div>
                {topGifters[2] && (
                  <div className="user-details text-white">
                    <h6>{topGifters[2].name}</h6>
                    <span>{topGifters[2].coins_sent} Coins</span>
                  </div>
                )}
              </div>
              {topGifters[0] && (
                <div className="user-details text-white mt-3">
                  <h6>{topGifters[0].name}</h6>
                  <span>{topGifters[0].coins_sent} Coins</span>
                </div>
              )}
            </>
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
