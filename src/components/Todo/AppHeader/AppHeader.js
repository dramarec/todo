import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h2 {
        color: #ccc;
        font-size: 26px;
    }
`;
const AppHeader = ({ toDo, done }) => {
    return (
        <HeaderStyled>
            <h1>Todo List</h1>
            <h2>
                {toDo} more to do {done} done
            </h2>
        </HeaderStyled>
    );
};

export default AppHeader;
