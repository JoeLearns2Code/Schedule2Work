//Import React.js library
import React from "react";

//JSX element used for receiving user inputs, triggering handleInputChange & handleFormSubmit functions--properties from parent page components.  "q" is the value entered by user and used for search via API GET request.
function AddEmployee({ firstName, lastName, birthdate, startDate, email, phone, minHours, maxHours, foodCert, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <h3>Enter New Employee Information</h3>
        </label>
        <input
          className="form-control"
          id="firstname"
          type="text"
          value={firstName}
          placeholder="first name"
          name="firstname"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="lastname"
          type="text"
          value={lastName}
          placeholder="last name"
          name="lastname"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="birthdate"
          type="text"
          value={birthdate}
          placeholder="birthdate"
          name="birthdate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="startdate"
          type="text"
          value={startDate}
          placeholder="start date"
          name="startdate"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="emailaddress"
          type="text"
          value={email}
          placeholder="email address"
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
          id="minhours"
          type="text"
          value={minHours}
          placeholder="minimum hours"
          name="minhrs"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="maxhours"
          type="text"
          value={maxHours}
          placeholder="maximum hours"
          name="maxhrs"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="foodcertdate"
          type="text"
          value={foodCert}
          placeholder="food certification expiration date"
          name="foodcertdate"
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