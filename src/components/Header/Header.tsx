import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #212121;
    font-weight: 500;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    div {
        width: 10rem;
        z-index: 10;
        span {
        color: #69f0ae;
        }
    }
    
`;

const Header = () => {
    return (
        <div>
            <HeaderWrapper>
                <div>
                    <span>H</span>yuNLog
                </div>
                <Search />
            </HeaderWrapper>
        </div>
    );
};

export default Header;