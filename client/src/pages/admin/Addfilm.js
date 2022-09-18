import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CgAttachment } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";

function Addfilm() {
  return (
    <>
      <form style={{ backgroundColor: "black", marginTop: "11vh" }}>
        <div>
          <h2 className="text-light col-2 d-flex justify-content-end">
            Add Film
          </h2>
        </div>
        <form className="d-flex justify-content-center">
          <div className="row g-2 d-flex justify-content-center">
            <div style={{ width: "950px", marginLeft: "35px" }}>
              <div className="form-floating">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    className="bg-dark text-white"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-2">
              <div className="form-floating">
                <Form.Group controlId="formFile" className=" mb-2 ms-2 d-flex ">
                  <Form.Label
                    for="fileattach"
                    className="d-block p-2 bg-dark text-white rounded border"
                    type="file"
                    style={{ cursor: "pointer" }}
                  >
                    Attach Thumbail
                    <CgAttachment className="text-danger mx-2" />
                  </Form.Label>
                  <Form.Control type="file" id="fileattach" hidden />
                </Form.Group>
              </div>
            </div>
            <div className="col-10 d-flex justify-content-center">
              <Form.Control
                type="text"
                placeholder="Year"
                className="bg-dark text-white"
              />
            </div>
            <div className="col-10 d-flex justify-content-center">
              <select
                className="form-select bg-dark text-white"
                aria-label="Default select example"
              >
                <option selected value="">
                  Category
                </option>
                <option value="1" for="tvseries">
                  TV Series
                </option>
                <option value="2">Movies</option>
              </select>
            </div>
            <div className="col-10 d-flex justify-content-center input-group-lg">
              <textarea
                className="form-control bg-dark text-white"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
              ></textarea>
            </div>
            <div className="row g-2 d-flex justify-content-center">
              <div style={{ width: "950px", marginLeft: "35px" }}>
                <div className="form-floating">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      placeholder="Title Episode"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-2">
                <div className="form-floating">
                  <Form.Group controlId="formFile" className=" ms-3 d-flex">
                    <Form.Label
                      for="fileattach"
                      className="d-block p-2 bg-dark text-white border rounded"
                      type="file"
                      style={{ cursor: "pointer" }}
                    >
                      Attach Thumbnail
                      <CgAttachment className="text-danger mx-2" />
                    </Form.Label>
                    <Form.Control type="file" id="fileattach" hidden />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="col-10 d-flex justify-content-center">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Link Film"
                className="bg-dark text-white"
              />
            </div>
            <div className="col-10 ">
              <Form.Group className="" controlId="add">
                <Button className=" text-center col-12  bg-dark">
                  <AiOutlinePlus className="text-danger" />
                </Button>
              </Form.Group>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <button
                class="btn btn-danger float-md-end btn-lg  d-grid gap-2 col-2 "
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </form>
    </>
  );
}

export default Addfilm;
