import { Button } from "react-bootstrap";
import "./System.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import UniToast from "../../Components/UniToast/UniToast";
import { getContent, reset } from "../../store/actions/ManagementSlice";
export default function SystemReported() {
  const [showUser, setShowUser] = useState(0);
  const {id} = useParams()
  const { contentDetails, error, loading } = useSelector(
    (state) => state.management
  );
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getContent({id}))
} , [id])



  return (
    <div>
      {error && (
        <UniToast
          open={true}
          reset={reset}
          setOpen={() => {}}
          title="Content Management Error"
          message={error}
        />
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="post py-4 px-5 d-flex align-items-stretch justify-content-between my-5 mx-4">
          <div className="col-7 d-flex flex-column justify-content-between mb-2">
            <div className="d-flex align-items-center mb-5 gap-3">
              <div className="d-flex align-items-center gap-2">
                {contentDetails?.data?.user?.img ? (
                  <img
                    src={contentDetails.data.user.img}
                    alt="User Avatar"
                    width={"80px"}
                    height={"80px"}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    className="pointer"
                    onClick={() => setShowUser(0)}
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center pointer"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#6c757d",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold"
                    }}
                    onClick={() => setShowUser(0)}
                  >
                    {contentDetails?.data?.user?.name?.charAt(0) || "U"}
                  </div>
                )}
                <Button
                  variant={!showUser ? "secondary" : "outline-light"}
                  size="sm"
                  onClick={() => setShowUser(0)}
                  className="ms-2"
                >
                  User Info
                </Button>
              </div>
              <Button
                variant={showUser ? "secondary" : "outline-light"}
                size="sm"
                onClick={() => setShowUser(1)}
              >
                Report Details
              </Button>
            </div>
            {showUser ? (
              <div>
                <h6 className="text-white fs-3 fw-bold">Report Information</h6>
                <div className="d-flex align-items-start gap-5">
                  <div>
                    <p className="text-white">
                      Reported by{" "}
                      <span className="fw-bold">System Admin</span>
                    </p>
                    <p className="text-white">
                      Date : {contentDetails?.data?.created_at ? new Date(contentDetails.data.created_at * 1000).toLocaleDateString() : 'N/A'}
                    </p>
                    <p className="text-white">
                      Content Type :{" "}
                      <span className="fw-bold">{contentDetails?.data?.file_type || 'N/A'}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white">
                      Content ID : <span className="fw-bold">#{contentDetails?.data?.id || 'N/A'}</span>
                    </p>
                    <p className="text-white">
                      Points : <span className="fw-bold">{contentDetails?.data?.points || 0}</span>
                    </p>
                    <p className="text-white">
                      Privacy : <span className="fw-bold">{contentDetails?.data?.account_privacy || 'N/A'}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="text-white fw-bold">Content Analytics</h6>
                  <div className="d-flex gap-4 text-white">
                    <span>Views: {contentDetails?.data?.analytics?.view || 0}</span>
                    <span>Reactions: {contentDetails?.data?.analytics?.react || 0}</span>
                    <span>Shares: {contentDetails?.data?.analytics?.share || 0}</span>
                    <span>Comments: {contentDetails?.data?.analytics?.comment || 0}</span>
                    <span>Downloads: {contentDetails?.data?.analytics?.download || 0}</span>
                  </div>
                </div>
                {contentDetails?.data?.caption && (
                  <div className="mt-4">
                    <h6 className="text-white fw-bold">Caption</h6>
                    <p className="text-white">{contentDetails.data.caption}</p>
                  </div>
                )}
                {contentDetails?.data?.delete_reason && (
                  <div className="mt-4">
                    <h6 className="text-white fw-bold">Delete Reason</h6>
                    <p className="text-white">{contentDetails.data.delete_reason}</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="d-flex align-items-end gap-5 text-white">
                  <div className="d-flex align-items-center gap-5">
                    <div className="text-center">
                      <p className="m-0">{contentDetails?.data?.user?.followers || 0}</p>
                      <h5 className="m-0">Followers</h5>
                    </div>
                    <div className="text-center">
                      <p className="m-0">{contentDetails?.data?.user?.following || 0}</p>
                      <h5 className="m-0">Following</h5>
                    </div>
                    <div className="text-center">
                      <p className="m-0">{contentDetails?.data?.user?.likes || 0}</p>
                      <h5 className="m-0">Likes</h5>
                    </div>
                    <div className="text-center">
                      <p className="m-0">{contentDetails?.data?.user?.videos || 0}</p>
                      <h5 className="m-0">Videos</h5>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-white">
                    Name : <span className="fw-bold">{contentDetails?.data?.user?.name || 'N/A'}</span>
                  </p>
                  <p className="text-white">
                    Username : <span className="fw-bold">@{contentDetails?.data?.user?.nick_name || 'N/A'}</span>
                  </p>
                  <p className="text-white">
                    User ID : <span className="fw-bold">#{contentDetails?.data?.user?.id || 'N/A'}</span>
                  </p>
                  <p className="text-white">
                    Account Status : <span className="fw-bold">{contentDetails?.data?.user?.account_public ? 'Public' : 'Private'}</span>
                  </p>
                  <p className="text-white">
                    Verified : <span className="fw-bold">{contentDetails?.data?.user?.page_verified_at ? 'Yes' : 'No'}</span>
                  </p>
                  <p className="text-white">
                    Online Status : <span className="fw-bold">{contentDetails?.data?.user?.online ? 'Online' : 'Offline'}</span>
                  </p>
                </div>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-between mt-5">
              <Button className="bg-delete text-white rounded py-3 col-3 border-0">
                Delete
              </Button>
              <Button className="bg-warning text-white rounded py-3 col-3 border-0">
                Warning
              </Button>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center position-relative">
            <img src={require("../../Assets/System/mobile.png")} alt="mobile" />
            {contentDetails?.data?.media && contentDetails.data.media.length > 0 ? (
              <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '200px', height: '300px' }}>
                {contentDetails.data.file_type === 'video' ? (
                  <div className="text-center">
                    {contentDetails.data.video_img ? (
                      <img 
                        src={contentDetails.data.video_img} 
                        alt="Video thumbnail" 
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    ) : (
                      <video 
                        src={contentDetails.data.media[0].file} 
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                        controls
                      />
                    )}
                    <p className="text-white mt-2 small">Video Content</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <img 
                      src={contentDetails.data.media[0].file} 
                      alt="Content media" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <p className="text-white mt-2 small">Image Content</p>
                  </div>
                )}
              </div>
            ) : (
              <h3 className="text-white position-absolute top-50 start-50 translate-middle m-0">
                No Media
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
