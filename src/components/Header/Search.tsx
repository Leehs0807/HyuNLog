import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: 10vw;
    background-color: black;
    height: 30px;
`


const Search = () => {
    return (
        <div>
            <SearchInput/>
        </div>
    );
};

export default Search;