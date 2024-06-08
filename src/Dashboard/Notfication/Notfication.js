import { Button, Form } from "react-bootstrap";

export default function Notfication() {
  return (
    <>
      <div className="text-white">
        <div className="d-flex gap-3">
          <h1 className="m-0 text-uppercase">notification settings</h1>
          <img src={require("../../Assets/Notfication/Notef..png")} alt="" />
        </div>
        <div className="d-flex align-items-end justify-content-between mt-5">
          <Form className="col-7 d-flex aling-items-center justify-content-between flex-wrap">
            <Form.Group controlId="title" className="mb-3 col-lg-7 col-12 ">
              <Form.Label className="text-uppercase">
                Notification Title
              </Form.Label>
              <Form.Control type="text" className="bg-super-grey" />
            </Form.Group>
            <Form.Group controlId="title" className="mb-3 col-lg-4 col-12 ">
              <Form.Label className="text-uppercase">
                Notification Title
              </Form.Label>
              <Form.Select className="bg-super-grey">
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="title" className="mb-3 col-lg-7 col-12 ">
              <Form.Label className="text-uppercase">
                Notification Description
              </Form.Label>
              <Form.Control as="textarea" rows="7" className="bg-super-grey" />
            </Form.Group>
            <div className="col-4"></div>
            <Form.Group controlId="title" className="mb-3 ">
              <Form.Label className="text-uppercase">
                Notification PHOTO
              </Form.Label>
              <div className="position-relative ">
                <img src={require("../../Assets/Notfication/box.png")} alt="" />
                <h1 className="position-absolute top-50 start-50 translate-middle m-0">
                  +
                </h1>
              </div>
            </Form.Group>
            <div className="col-6 mt-auto">
              <Button
                className="bg-purple-2 border-0 px-4 py-2"
                controlId="title"
              >
                Done
              </Button>
            </div>
          </Form>
          <div>
            <img src={require("../../Assets/Notfication/mobile.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
