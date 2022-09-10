import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule" id="schedules">
      <p className="white-text">Our weekly GYM schedules</p>
      <div className="table">
        <label className="white-text">Workout timetable</label>
        <table>
          <tr>
            <td className="filled"></td>
            <td className="filled">Monday</td>
            <td className="filled">Tuesday</td>
            <td className="filled">Wednesday</td>
            <td className="filled">Thursday</td>
            <td className="filled">Friday</td>
            <td className="filled">Saturday</td>
          </tr>
          <tr>
            <td className="filled">07:00AM</td>
            <td>
              <ol>
                <li>Cardio</li>
                <li className="ndItem">07:00AM-09:00AM</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>Power Fitness</li>
                <li className="ndItem">07:00AM-09:00AM</li>
              </ol>
            </td>
            <td></td>
            <td></td>
            <td>
              <ol>
                <li>Yoga Section</li>
                <li className="ndItem">07:00AM-09:00AM</li>
              </ol>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="filled">09:00AM</td>
            <td></td>
            <td></td>
            <td>
              <ol>
                <li>Boxing</li>
                <li className="ndItem">09:00AM-11:00AM</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>Aerobic</li>
                <li className="ndItem">09:00AM-11:00AM</li>
              </ol>
            </td>
            <td></td>
            <td>
              <ol>
                <li>Cardio</li>
                <li className="ndItem">09:00AM-11:00AM</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td className="filled">11:00AM</td>
            <td></td>
            <td>
              <ol>
                <li>Boxing</li>
                <li className="ndItem">11:00AM-01:00PM</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>Aerobic</li>
                <li className="ndItem">11:00AM-01:00PM</li>
              </ol>
            </td>
            <td></td>
            <td>
              <ol>
                <li>Body</li>
                <li className="ndItem">11:00AM-01:00PM</li>
              </ol>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="filled">02:00PM</td>
            <td>
              <ol>
                <li>Boxing</li>
                <li className="ndItem">02:00PM-04:00PM</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>Power Lifting</li>
                <li className="ndItem">02:00PM-04:00PM</li>
              </ol>
            </td>
            <td></td>
            <td>
              <ol>
                <li>Cardio</li>
                <li className="ndItem">02:00PM-04:00PM</li>
              </ol>
            </td>
            <td></td>
            <td>
              <ol>
                <li>Crossfit</li>
                <li className="ndItem">02:00PM-04:00PM</li>
              </ol>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
