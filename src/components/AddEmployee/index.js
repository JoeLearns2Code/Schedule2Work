//Import React.js library
import React from "react";

//Add new employee function
function AddEmployee({ firstName, lastName, address, startDate, dateofBirth, certDate, certType, email, phone, password, handleInputChange, handleEmployeeSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="New Employee">
          <h3>Enter New Employee Information</h3>
        </label>
        <input
          className="form-control"
          id="firstname"
          type="text"
          value={firstName}
          placeholder="first name"
          name="firstName"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="lastname"
          type="text"
          value={lastName}
          placeholder="last name"
          name="lastName"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="address"
          type="text"
          value={address}
          placeholder="address"
          name="address"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="startdate"
          type="text"
          value={startDate}
          placeholder="start date"
          name="startDate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="birthdate"
          type="text"
          value={dateofBirth}
          placeholder="date of birth"
          name="dateofBirth"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="certifydate"
          type="text"
          value={certDate}
          placeholder="certification date"
          name="certDate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="certifytype"
          type="text"
          value={certType}
          placeholder="certification type"
          name="certType"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="email"
          type="text"
          value={email}
          placeholder="email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="phonenumber"
          type="text"
          value={phone}
          placeholder="phone number"
          name="phone"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="password"
          type="text"
          value={password}
          placeholder="enter password"
          name="password"
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="pull-right">
        <button
          onClick={handleEmployeeSubmit}
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