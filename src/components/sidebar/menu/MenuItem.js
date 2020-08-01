import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
  width: 100%;
  padding: 0.3rem 0 0.3rem 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"};
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Icon = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
`

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 400;
`

const MenuItem = ({active, title, icon}) => {

    return (
        <Container active={active}>
            <Icon className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}/>
            <Title>{title}</Title>
        </Container>
    );
};

export default MenuItem;
