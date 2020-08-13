import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  
  a {
    width: 100%;
    padding: 0.3rem 0 0.3rem 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #AAA5A5;
    border-left: 3px solid transparent;
  }
  
  .selected {
    color: ${props => props.theme.activeMenu};
    border-left: 3px solid ${props => props.theme.activeMenu};
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

const MenuItem = ({title, icon, link}) => {

    return (
        <Container>
            <NavLink exact to={link} activeClassName="selected">
                <Icon className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}/>
                <Title>{title}</Title>
            </NavLink>
        </Container>
    );
};

export default MenuItem;
