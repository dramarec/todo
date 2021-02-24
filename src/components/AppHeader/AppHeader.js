import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    display: flex;
`;
const AppHeader = ({ todo, done }) => {
    return (
        <HeaderStyled>
            <h1>My Todo List</h1>
            <h2>
                {todo} more to do {done} done
            </h2>
        </HeaderStyled>
    );
};

export default AppHeader;
