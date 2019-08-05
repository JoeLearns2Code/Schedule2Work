//Import React.js library
import React from "react";

//JSX element used for receiving user inputs, triggering handleInputChange & handleFormSubmit functions--properties from parent page components.  "q" is the value entered by user and used for search via API GET request.
function AddEmployee({ employeeName, address, birthdate, startDate, email, phone, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <h3>Enter New Employee Information</h3>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={employeeName}
          placeholder="employee name"
          name="employeename"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="Title"
          type="text"
          value={address}
          placeholder="address"
          name="address"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="Title"
          type="text"
          value={birthdate}
          placeholder="birthdate"
          name="birthdate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="Title"
          type="text"
          value={startDate}
          placeholder="start date"
          name="startdate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="Title"
          type="text"
          value={email}
          placeholder="email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="Title"
          type="text"
          value={phone}
          placeholder="phone"
          name="phone"
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
export default AddEmployee;