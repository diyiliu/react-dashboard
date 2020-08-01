import React from 'react';
import styled from "styled-components";
import AddBtn from "./AddBtn";


const Container = styled.div`
  height: 4rem;
  padding: 0 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


const Toolbar = () => {
    return (
        <Container>
            <AddBtn />
        </Container>
    );
};

export default Toolbar;
