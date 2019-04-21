import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="Search">
        <label htmlFor="Search-form-city">City</label>
        <input type="text" id="Search-form-city" placeholder="Location" />
        <label htmlFor="Search-form-query">Name</label>
        <input type="text" id="Search-form-query" placeholder="Restaurant" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
