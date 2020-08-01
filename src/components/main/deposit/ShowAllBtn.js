import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const Button = styled.a`
  background: ${({theme}) => theme.gradient};
  color: #FFF;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 0 7px rgba(128, 74, 216, 0.6);
  }
`

const ShowAllBtn = ({title}) => {
    return (
        <Container>
            <Button>all {title}</Button>
        </Container>
    );
};

export default ShowAllBtn;
