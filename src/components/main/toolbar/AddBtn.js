import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({theme}) => theme.colorGreen};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddIcon = styled.span`
  color: ${({theme}) => theme.primary};
  font-size: 2rem;
  cursor: pointer;
`

const AddBtn = () => {
    return (
        <Container>
            <AddIcon className="iconify" data-inline="false" data-icon="mdi-light:plus"/>
        </Container>
    );
};

export default AddBtn;
