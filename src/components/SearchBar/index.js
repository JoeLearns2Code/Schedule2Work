import React from "react";

function SearchBar({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Enter Employee Name</strong>
        </label>
        <input
          className="form-control"
          id="employeesearch"
          type="text"
          value={q}
          placeholder="employee name here"
          name="employee query"
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
          Search
        </button>
      </div>
    </form>
  );
}

//export this component for use on page components
export default SearchBar;