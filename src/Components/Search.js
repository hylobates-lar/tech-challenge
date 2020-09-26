import React from 'react';

const Search = (props) => {


    return(
        <div className="search-bar">
			<h2>Search Articles</h2>
			<form onSubmit={props.handleSubmit} className="form"> 
                <input
                    type="text"
                    name="search-term"
                    value={props.input}
                    onChange={props.updateInput}
                    className="input"
                />
				<button type="submit" id="submit-button" value="Submit">Search</button>
			</form>
		</div>
    );
};

export default Search;