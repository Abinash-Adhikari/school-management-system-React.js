import React from "react";

export default function AddTeacher() {
  return (
    <div>
      <div className="add-teacher">
        <div className="m-4">
          <h3 className="m-3">
            <strong>Add New Teacher</strong>
          </h3>
          <div className="form bg-white p-3 m-3">
            <h5 className="m-3 mb-4 text-success">
              <u>Add Teacher</u>
            </h5>
            <form action="">
              <div className="row m-2 mb-3">
                <div className="col-3">
                  <label htmlFor="fName">Fullname </label>
                  <input
                    type="text"
                    id="fName"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="fatherName">Father Name </label>
                  <input
                    type="text"
                    id="fatherName"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="dob">Date of Birth </label>
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="email"> Email </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row m-2 t-3">
                <div className="col-1">
                  <label htmlFor="id"> Id </label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    required
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="religion"> Religion </label>
                  <input
                    list="religion-list"
                    id="religion"
                    type="text"
                    className="form-control"
                  />
                  <datalist id="religion-list">
                    <option value="Hindu"></option>
                    <option value="Buddhist"></option>
                    <option value="Christain"></option>
                    <option value="Muslim"></option>
                    <option value="Others"></option>
                  </datalist>
                </div>
                <div className="col-2">
                  <label htmlFor="bloodGroup"> Blood Group </label>
                  <input
                    list="bg-list"
                    id="bloodGroup"
                    type="text"
                    className="form-control"
                  />
                  <datalist id="bg-list">
                    <option value="A+"></option>
                    <option value="A-"></option>
                    <option value="B+"></option>
                    <option value="B-"></option>
                    <option value="AB+"></option>
                    <option value="AB-"></option>
                    <option value="O+"></option>
                    <option value="O-"></option>
                  </datalist>
                </div>
                <div className="col-2">
                  <label htmlFor="gender"> Gender </label>
                  <input
                    list="gender-list"
                    id="gender"
                    type="text"
                    className="form-control"
                  />
                  <datalist id="gender-list">
                    <option value="Male"></option>
                    <option value="Female"></option>
                    <option value="Other"></option>
                  </datalist>
                </div>
                <div className="col-3">
                  <label htmlFor="address"> Address </label>
                  <input type="text" id="address" className="form-control" />
                </div>
                <div className="col-2">
                  <label htmlfor="subject"> Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control "
                    required
                  />
                </div>
              </div>
              <div className="row m-2">
                <div className="col-4">
                  <label htmlFor="description"> Teacher Short BIO </label>
                  <textarea
                    name=""
                    id="description"
                    rows="11"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-4">
                  <div className="input-mage">
                    <h5>
                      <u>Teacher Photo</u>
                    </h5>
                    <input type="file" />
                  </div>
                  <div className="show-image border"></div>
                </div>
                <div className="col-4">
                  <div className="input-mage">
                    <h5>
                      <u>Citizenship Card</u>
                    </h5>
                    <input type="file" />
                  </div>
                  <div className="show-image border"></div>
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="col-6 submit-button m-auto">
                  <button className="btn bg-success text-white form-control btn-submit">
                    Submit Data
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
