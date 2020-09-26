import React from 'react';
import { Input } from 'antd';

const Search = (props) => {


    return(
        <div className="search-bar">
            <Input.Search
                placeholder="input search text"
                value={props.input}
                onChange={props.updateInput}
                onSearch={props.handleSubmit}
                style={{ width: 200 }}
            />
		</div>
    );
};

export default Search;