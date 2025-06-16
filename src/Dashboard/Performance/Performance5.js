import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";
import "./performance.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSticker,
  deleteSticker,
  getAllStickers,
  reset,
} from "../../store/actions/InterestsSlice";
import UniToast from "../../Components/UniToast/UniToast";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { ImgsUrl } from "../../Api/Api";

export default function Performance5() {
  const [interestsItems, setInterestsItems] = useState([]);
  const { error, loading, StickerAdded, allStickers, DeleteSticker } =
    useSelector((state) => state.interests);
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [fileError, setFileError] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddInterest = () => {
    if (interest?.length > 0 && img !== null && !fileError) {
      const formData = new FormData();
      formData.append("name[]", interest);
      formData.append("img[]", img);
      dispatch(addSticker(formData));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    
    if (!file) {
      setImg(null);
      setImgPreview(null);
      return;
    }

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setFileError("Please select only image files (JPG, PNG, GIF, etc.)");
      setImg(null);
      setImgPreview(null);
      e.target.value = ""; // Clear the input
      return;
    }

    // Check file size (optional - limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("Image size should be less than 5MB");
      setImg(null);
      setImgPreview(null);
      e.target.value = ""; // Clear the input
      return;
    }

    setImg(file);
    
    // Create preview URL safely
    try {
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    } catch (error) {
      console.error("Error creating object URL:", error);
      setFileError("Error processing image file");
      setImg(null);
      setImgPreview(null);
    }
  };

  // Cleanup object URL when component unmounts or image changes
  useEffect(() => {
    return () => {
      if (imgPreview) {
        URL.revokeObjectURL(imgPreview);
      }
    };
  }, [imgPreview]);

  const handleRemoveItem = (id) => {
    dispatch(deleteSticker(id));
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  useEffect(() => {
    if (StickerAdded) {
      setInterest("");
      setImg(null);
      setImgPreview(null);
      setFileError("");
      dispatch(getAllStickers());
      dispatch(reset());
    }
  }, [StickerAdded]);

  useEffect(() => {
    if (allStickers?.length > 0) {
      setInterestsItems(allStickers);
    }else{
      setInterestsItems([]);
    }
  }, [allStickers]);

  useEffect(() => {
    dispatch(getAllStickers());
  }, [dispatch]);

  useEffect(() => {
    if (DeleteSticker) {
      dispatch(getAllStickers());
      dispatch(reset());
    }
  }, [DeleteSticker]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ width: "90%" }} className="mx-auto">
          {open && error && (
            <UniToast
              reset={reset}
              open={open}
              setOpen={setOpen}
              title="Notification Error"
              message={error}
            />
          )}
          <div className="d-flex align-items-stretch justify-content-between my-4">
            <div className="d-flex flex-column justify-content-between col-8">
              <div className="mt-5">
                <p className="text-white fw-bold">Add An `Sticker</p>
                <div className="d-flex align-items-stretch mb-5 col-12 ">
                  <input
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    type="text"
                    className="rounded-pill border-0 col-5 py-3 px-3"
                  />
                  <div className="position-relative col-3 border-0 rounded-20">
                    <label htmlFor="add-gift" className="add-gift pointer ">
                      {imgPreview ? (
                        <img
                          className="position-absolute w-100 h-100 object-fit-contain"
                          src={imgPreview}
                          alt="Preview"
                        />
                      ) : (
                        <div style={{ zIndex: 1111 }}>+</div>
                      )}
                    </label>
                    <input
                      onChange={handleFileChange}
                      className="col-9 border-0 bg-super-grey d-none"
                      id="add-gift"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <Button
                    style={{
                      cursor:
                        interest?.length > 0 && img !== null && !fileError
                          ? "pointer"
                          : "not-allowed",
                    }}
                    onClick={handleAddInterest}
                    className=" bg-purple-2 border-0 col-2 py-3 rounded-pill fw-bold text-uppercase"
                  >
                    Add
                  </Button>
                </div>
                {fileError && (
                  <div className="text-danger mb-3">
                    {fileError}
                  </div>
                )}
                <div className="d-flex align-items-center gap-5 flex-wrap ">
                  {interestsItems?.map((ele, idx) => (
                    <div
                      className="d-flex p-2 position-relative  align-items-center justify-content-end gap-4  rounded-20 w-fit-content mb-5"
                      style={{
                        width: "120px",
                        height: "120px",
                      }}
                    >
                      <img
                        className="w-100 h-100 position-absolute "
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        src={`${ImgsUrl}/${ele?.img}`}
                      ></img>
                      <img
                        style={{
                          position: "absolute",
                          right: "0",
                          top: "0",
                          cursor: "pointer",
                        }}
                        className="align-self-start rounded-lg bg-white"
                        onClick={() => handleRemoveItem(ele?.id)}
                        src={closeIcon}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={require("../../Assets/Performance/performance5.png")}
                alt=""
                width={"100%"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
