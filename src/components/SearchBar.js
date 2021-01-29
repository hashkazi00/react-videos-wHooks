import React, { useState } from 'react';

const SearchBar = ({onTermSubmit}) => {

    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        //TODO: Make sure we call callback received from parent component as a prop
        //Done to pass data up from child to parent

        onTermSubmit(term);
    };

    return (
        <div className="ui segment custom-searchbar">
            <form className="ui form" onSubmit={onSubmit}> 
                <div className="field">
                    <label> Video Search</label>
                    <input type="text" value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;