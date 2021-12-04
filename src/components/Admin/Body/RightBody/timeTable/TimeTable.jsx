import React from "react";

export default function TimeTable() {
  return (
    <div>
      <table className="table caption-top">
        <caption className="text-dark text-center">
          <h3>Classes and Subjects</h3>
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
  );
}
