import Avatar from "../../../../../photos/avatar.jpg";
import React from "react";
import "./TeacherDetails.css";

export default function TeacherDetails() {
  return (
    <div>
      <div className="teacher-details">
        <div className="path m-3">
          <h3 className="m-4">
            <strong>Teacher Details</strong>
          </h3>
          <div className="showDetails m-3">
            <div className="searchTeacher bg-white my-2 p-3">
              <h5 className="m-3 mb-4 text-success">
                <u>Search Teacher</u>
              </h5>
              <form action="">
                <div className="search-teacher row m-3 p-3 ">
                  <div className="teacher-id col-6 m-auto d-flex">
                    <div className="mx-2">
                      <label htmlFor="tID">Teacher Id</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="text"
                        className="form-control"
                        id="tID"
                        required
                      />
                    </div>
                    <div className="mx-2">
                      <button className="btn btn-warning" type="submit">
                        <i className="fas fa-search"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="show-details bg-white my-2 p-3">
              <h5 className="m-3 mb-4 text-success">
                <u className="text-center">About Teacher</u>
              </h5>
              <div className="">
                <div className="row">
                  <div className="col-5 profile-photo m-auto">
                    <img src={Avatar} alt="" />
                  </div>
                  <div className="col-6 details-body mx-2">
                    <div className="name-top row my-2">
                      <div className="full-name col-md-8">
                        <h1>Abiral Adhikari</h1>
                      </div>
                      <div className="db-icons col-4">
                        <button className="btn btn-icons mx-1 border">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-icons mx-1 border">
                          <i className="fas fa-print"></i>
                        </button>
                        <button className="btn btn-icons mx-1 border">
                          <i className="fas fa-download"></i>
                        </button>
                      </div>
                    </div>
                    <div className="info-table table-responsive">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Teacher Id :</td>
                            <td>002</td>
                          </tr>
                          <tr>
                            <td>Academic Qualification :</td>
                            <td>B.Com</td>
                          </tr>
                          <tr>
                            <td>Blood Group : </td>
                            <td>O +ve</td>
                          </tr>
                          <tr>
                            <td>Address : </td>
                            <td>Nijgadh-2(singaul), Bara</td>
                          </tr>
                          <tr>
                            <td>Phone : </td>
                            <td>9865079720</td>
                          </tr>
                          <tr>
                            <td>Gender : </td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td>Father Name : </td>
                            <td>Sanubabu Adhikari</td>
                          </tr>
                          <tr>
                            <td>Mother Name: </td>
                            <td>Bimala Adhikari</td>
                          </tr>
                          <tr>
                            <td>Date of Birth: </td>
                            <td>2056/06/21</td>
                          </tr>
                          <tr>
                            <td>Religion : </td>
                            <td>Hindu</td>
                          </tr>
                          <tr>
                            <td>E-mail : </td>
                            <td>abinashadhikari48@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Join Date : </td>
                            <td>2060/01/05</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="time-table col-9 m-auto">
                <table className="table caption-top">
                  <caption className="text-success">
                    <strong>
                      <h5>
                        <u>Teacher's Classes and Subject Timetable </u>
                      </h5>
                    </strong>
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th>S.No</th>
                      <th>Class</th>
                      <th>Subject</th>
                      <th>Period</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>1</td>
                      <td>IV</td>
                      <td>Maths</td>
                      <td>
                        1<sup>st</sup>
                      </td>
                      <td>10:00 AM to 10:45 AM</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>V</td>
                      <td>Maths</td>
                      <td>
                        2<sup>nd</sup>
                      </td>
                      <td>10:45 AM to 11:30 AM</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>VI</td>
                      <td>Maths</td>
                      <td>
                        3<sup>rd</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>VII</td>
                      <td>Maths</td>
                      <td>
                        4<sup>th</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>III</td>
                      <td>Maths</td>
                      <td>
                        5<sup>th</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>VI</td>
                      <td>OPT Maths</td>
                      <td>
                        6<sup>th</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>VII</td>
                      <td>Maths</td>
                      <td>
                        7<sup>th</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>V</td>
                      <td>Computer</td>
                      <td>
                        8<sup>th</sup>
                      </td>
                      <td>11:30 AM to 12:15 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
