//Import React.js library
import React from "react";

//JSX element used for receiving user inputs, triggering handleInputChange & handleFormSubmit functions--properties from parent page components.  "q" is the value entered by user and used for search via API GET request.
function AddShift({ scheduleID, employeeID, rolesFilled, startTime, endTime, inTime, outTime, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <h3>Enter New Shift</h3>
        </label>
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
      </div>
      
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

//export this component for use on page components
export default AddShift;