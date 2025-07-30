import { Button, Form, Modal, Row, Col, Card } from "react-bootstrap";
import TopBar from "../../Components/TopBar/TopBar";
import Facebook from "../../Assets/UserPage/Facebook.svg";
import Instagram from "../../Assets/UserPage/Instagram.svg";
import Twitter from "../../Assets/UserPage/Twitter.svg";
import Tick from "../../Assets/UserPage/Tick.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUser,
  makeUserBanned,
  makeUserNormalize,
  makeUserWarning,
  reset,
} from "../../store/actions/UsersSlice";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import userAvatar from "../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../Api/Api";
import UniToast from "../../Components/UniToast/UniToast";
import dayjs from "dayjs";
import "./UserPage.css";

export default function UserPage() {
  const [open, setOpen] = useState(false);
  const [openForBanned, setOpenForBanned] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [verified, setVerified] = useState(false);
  const [date, setDate] = useState(new Date());
  const { userDetails, loading, isWarning, isBanned, isNormalize } =
    useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const handleWarning = () => {
    dispatch(makeUserWarning({ user_id: id }));
  };
  
  const handleBanned = () => {
    dispatch(
      makeUserBanned({ user_id: id, date: dayjs(date).format("YYYY-MM-DD") })
    );
    setOpenForBanned(false);
  };

  useEffect(() => {
    if (isWarning) {
      setOpen(true);
    }
  }, [isWarning]);
  
  useEffect(() => {
    setVerified(userDetails?.social?.verified_at);
  }, [userDetails]);

  const handleVerifiing = (vei) => {
    dispatch(makeUserNormalize({ id, verified: vei }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {open && (
            <UniToast
              reset={reset}
              open={open}
              setOpen={setOpen}
              title={"User Warning"}
              message={"User Warning Successfully"}
            />
          )}
          {isBanned && (
            <UniToast
              reset={reset}
              open={isBanned}
              setOpen={() => {}}
              title={"User Banned"}
              message={"User Banned Successfully"}
            />
          )}
          {isNormalize && (
            <UniToast
              reset={reset}
              open={isNormalize}
              setOpen={() => {}}
              title={"User Verify"}
              message={verified ? "User verified" : "User not verified"}
            />
          )}

          <div data-aos="fade-down" data-aos-duration="800">
            <TopBar />
          </div>
          
          <div className="user-page-container">
            {/* Header Section */}
            <div 
              className="user-header-card"
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="user-header-content">
                <div 
                  className="user-avatar-section"
                  data-aos="fade-right" 
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    {errorMsg || !userDetails?.profile?.img ? (
                      <div className="user-avatar-placeholder">
                        {userDetails?.profile?.name?.slice(0, 1)}
                      </div>
                    ) : (
                      <img
                        className="user-avatar-img"
                        onError={() => setErrorMsg(true)}
                        src={
                          userDetails?.profile?.img
                            ? `${ImgsUrl}/${userDetails?.profile?.img}`
                            : userAvatar
                        }
                        alt="User Avatar"
                      />
                    )}
                  </div>
                  
                  <div 
                    className="user-basic-info"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    <div className="user-name-section">
                      <h2 className="user-name">{userDetails?.profile?.name}</h2>
                      {verified && (
                        <img src={Tick} alt="Verified" className="verified-badge" />
                      )}
                    </div>
                    <p className="user-nickname">@{userDetails?.profile?.nick_name}</p>
                    <p className="user-email">{userDetails?.profile?.email}</p>
                    <p className="user-id">ID: {userDetails?.profile?.id}</p>
                  </div>
                </div>

                <div 
                  className="user-actions"
                  data-aos="fade-left" 
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <Button
                    onClick={() => {
                      setVerified((prev) => !prev);
                      handleVerifiing(!verified);
                    }}
                    className={`action-btn ${verified ? 'verified-btn' : 'verify-btn'}`}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="900"
                  >
                    {verified ? "UNVERIFY" : "VERIFY"}
                  </Button>
                  <Button
                    onClick={() => setOpenForBanned(true)}
                    className="action-btn ban-btn"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1000"
                  >
                    BAN USER
                  </Button>
                  <Button
                    onClick={handleWarning}
                    className="action-btn warning-btn"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                  >
                    WARNING
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <Row 
              className="user-content-grid"
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              {/* Profile Information */}
              <Col lg={8} md={12} className="mb-4">
                <Card 
                  className="profile-info-card"
                  data-aos="slide-right" 
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <Card.Header className="card-header-custom">
                    <h4>Profile Information</h4>
                  </Card.Header>
                  <Card.Body>
                    <div className="bio-section">
                      <h5>Bio</h5>
                      <p className="bio-text">
                        {userDetails?.profile?.bio?.length > 200
                          ? `${userDetails?.profile?.bio.slice(0, 200)}...`
                          : userDetails?.profile?.bio || "No bio available"}
                      </p>
                    </div>

                    <div className="profile-details">
                      <Row>
                        <Col md={6}>
                          <div className="detail-item">
                            <span className="detail-label">Full Name:</span>
                            <span className="detail-value">{userDetails?.profile?.name}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Email:</span>
                            <span className="detail-value">{userDetails?.profile?.email}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Phone:</span>
                            <span className="detail-value">
                              {userDetails?.profile?.phone || "Not provided"}
                            </span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="detail-item">
                            <span className="detail-label">Gender:</span>
                            <span className="detail-value">{userDetails?.profile?.gender}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Birthday:</span>
                            <span className="detail-value">
                              {userDetails?.profile?.birthday 
                                ? dayjs(userDetails?.profile?.birthday).format("MMM DD, YYYY")
                                : "Not provided"}
                            </span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Location:</span>
                            <span className="detail-value">
                              {userDetails?.country?.name || "Not specified"}
                            </span>
                          </div>
                        </Col>
                      </Row>

                      <div className="social-media-section">
                        <span className="detail-label">Social Media:</span>
                        <div className="social-links">
                          {userDetails?.profile?.facebook && (
                            <a
                              href={`https://${userDetails?.profile?.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link"
                            >
                              <img src={Facebook} alt="Facebook" />
                            </a>
                          )}
                          {userDetails?.profile?.twitter && (
                            <a
                              href={`https://${userDetails?.profile?.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link"
                            >
                              <img src={Twitter} alt="Twitter" />
                            </a>
                          )}
                          {userDetails?.profile?.instagram && (
                            <a
                              href={`https://${userDetails?.profile?.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link"
                            >
                              <img src={Instagram} alt="Instagram" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Statistics and Wallet */}
              <Col lg={4} md={12}>
                {/* Social Statistics */}
                <Card 
                  className="stats-card mb-4"
                  data-aos="slide-left" 
                  data-aos-duration="800"
                  data-aos-delay="1000"
                >
                  <Card.Header className="card-header-custom">
                    <h4>Social Statistics</h4>
                  </Card.Header>
                  <Card.Body>
                    <div className="stats-grid">
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.followers || 0)}</span>
                        <span className="stat-label">Followers</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.likes || 0)}</span>
                        <span className="stat-label">Total Likes</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.videos || 0)}</span>
                        <span className="stat-label">Videos</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.images || 0)}</span>
                        <span className="stat-label">Images</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.month_likes || 0)}</span>
                        <span className="stat-label">Month Likes</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{formatNumber(userDetails?.social?.week_likes || 0)}</span>
                        <span className="stat-label">Week Likes</span>
                      </div>
                    </div>
                    
                    <div className="verification-toggle">
                      <span className="toggle-label">Verified Status:</span>
                      <Form.Check
                        type="switch"
                        checked={verified}
                        onChange={() => {
                          setVerified((prev) => !prev);
                          handleVerifiing(!verified);
                        }}
                        id="verification-switch"
                        className="custom-switch"
                      />
                    </div>
                  </Card.Body>
                </Card>

                {/* Wallet Information */}
                <Card 
                  className="wallet-card"
                  data-aos="slide-left" 
                  data-aos-duration="800"
                  data-aos-delay="1200"
                >
                  <Card.Header className="card-header-custom">
                    <h4>Wallet & Balance</h4>
                  </Card.Header>
                  <Card.Body>
                    <div className="wallet-stats">
                      <div className="wallet-item">
                        <div className="wallet-icon coins">💰</div>
                        <div className="wallet-info">
                          <span className="wallet-amount">{formatNumber(userDetails?.wallet?.coins || 0)}</span>
                          <span className="wallet-label">Coins</span>
                        </div>
                      </div>
                      <div className="wallet-item">
                        <div className="wallet-icon dollars">💵</div>
                        <div className="wallet-info">
                          <span className="wallet-amount">{formatCurrency(userDetails?.wallet?.dollars || 0)}</span>
                          <span className="wallet-label">Balance</span>
                        </div>
                      </div>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Account Connections */}
            <Card 
              className="connections-card"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="1400"
            >
              <Card.Header className="card-header-custom">
                <h4>Account Connections</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <div className="connection-item">
                      <span className="connection-label">Google Account:</span>
                      <span className={`connection-status ${userDetails?.accounts?.google_id ? 'connected' : 'not-connected'}`}>
                        {userDetails?.accounts?.google_id ? 'Connected' : 'Not Connected'}
                      </span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="connection-item">
                      <span className="connection-label">Facebook Account:</span>
                      <span className={`connection-status ${userDetails?.accounts?.facebook_id ? 'connected' : 'not-connected'}`}>
                        {userDetails?.accounts?.facebook_id ? 'Connected' : 'Not Connected'}
                      </span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="connection-item">
                      <span className="connection-label">Apple Account:</span>
                      <span className={`connection-status ${userDetails?.accounts?.apple_id ? 'connected' : 'not-connected'}`}>
                        {userDetails?.accounts?.apple_id ? 'Connected' : 'Not Connected'}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </>
      )}

      {/* Ban Confirmation Modal */}
      <Modal
        centered
        show={openForBanned}
        onHide={() => setOpenForBanned(false)}
        className="ban-modal"
      >
        <Modal.Body className="ban-modal-body">
          <h5 className="ban-modal-title">
            Are you sure you want to ban this user?
          </h5>
          <p className="ban-modal-subtitle">
            Select the ban duration:
          </p>
          
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ban-date-input"
            type="date"
          />

          <div className="ban-modal-actions">
            <Button
              className="ban-confirm-btn"
              onClick={handleBanned}
            >
              Confirm Ban
            </Button>
            <Button
              className="ban-cancel-btn"
              onClick={() => setOpenForBanned(false)}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
