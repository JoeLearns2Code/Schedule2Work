//Import React.js library
import React from "react";
import { UncontrolledCollapse, Button } from 'reactstrap';

//Add new Shift Function
function AddShift({ scheduleID, employeeID, rolesFilled, startTime, endTime, inTime, outTime, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="New Shift">
          <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
            <h3>Enter New Employee Information</h3>
          </Button>
        </label>
        <UncontrolledCollapse toggler="#toggler2">
          <input
            className="form-control"
            id="scheduleid"
            type="text"
            value={scheduleID}
            placeholder="schedule ID"
            name="scheduleid"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="employeeid"
            type="text"
            value={employeeID}
            placeholder="employee ID"
            name="employeeid"
            onChange={handleInputChange}
            required
          />
          {/* Could this be a series of checkboxes? */}
          <input
            className="form-control"
            id="rolesfilled"
            type="text"
            value={rolesFilled}
            placeholder="roles filled"
            name="rolesfilled"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="starttime"
            type="text"
            value={startTime}
            placeholder="shift start time"
            name="starttime"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="endtime"
            type="text"
            value={endTime}
            placeholder="shift end time"
            name="endtime"
            onChange={handleInputChange}
            required
          />
          {/* Should clock-in/clockout be post-MVP?  Should this be a different page, for employees? */}
          <input
            className="form-control"
            id="clockintime"
            type="text"
            value={inTime}
            placeholder="clock in time"
            name="clockin"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="clockouttime"
            type="text"
            value={outTime}
            placeholder="clock out time"
            name="clockout"
            onChange={handleInputChange}
            required
          />

          <div className="pull-right">
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="btn btn-lg btn-danger float-right"
            >
              Submit
        </button>
          </div>

        </UncontrolledCollapse>
      </div>


    </form>
  );
}

//export this component for use on page components
export default AddShift;