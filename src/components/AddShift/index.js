//Import React.js library
import React from "react";
import { UncontrolledCollapse, Button } from 'reactstrap';

//Add new Shift Function
function AddShift({ shiftDate, startTime, endTime, empID, handleInputChange, handleShiftSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="New Shift">
          <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
            <h3>Enter New Shift Information</h3>
          </Button>
        </label>
        <UncontrolledCollapse toggler="#toggler2">
          <input
            className="form-control"
            id="shiftdate"
            type="text"
            value={shiftDate}
            placeholder="shift date"
            name="shiftDate"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="starttime"
            type="text"
            value={startTime}
            placeholder="shift start time"
            name="startTime"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="endtime"
            type="text"
            value={endTime}
            placeholder="shift end time"
            name="endTime"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="employeeid"
            type="text"
            value={empID}
            placeholder="employee ID"
            name="empID"
            onChange={handleInputChange}
            required
          />
          <div className="pull-right">
            <button
              onClick={handleShiftSubmit}
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