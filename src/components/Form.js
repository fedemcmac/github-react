import React from "react";

const Form = props => {
    return (
        <form onSubmit={(event) => {props.handleSubmit(event)}}>
          <input type="text" name="searchBar" onChange={props.handleChange} value={props.searchTerm}/>
          <button type="submit" name="submit">Submit</button>
        </form>   
    )
};

export default Form;
