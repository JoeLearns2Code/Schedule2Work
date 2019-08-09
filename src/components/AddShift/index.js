//Import React.js library
import React from "react";
import { UncontrolledCollapse, Button } from 'reactstrap';

//Add new Shift Function
function AddShift({ startTime, endTime, roleName, proficiencyLevel, firstNameShift, lastNameShift, phoneShift, handleInputChange, handleShiftSubmit }) {
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
            id="rolename"
            type="text"
            value={roleName}
            placeholder="role"
            name="roleName"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="proficiencylevel"
            type="text"
            value={proficiencyLevel}
            placeholder="proficiency level"
            name="proficiencyLevel"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="firstnameshift"
            type="text"
            value={firstNameShift}
            placeholder="first name"
            name="firstNameShift"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="lastnameshift"
            type="text"
            value={lastNameShift}
            placeholder="last name"
            name="lastNameShift"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            id="phoneshift"
            type="text"
            value={phoneShift}
            placeholder="phone number"
            name="phoneShift"
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