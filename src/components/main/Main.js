import React from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import {
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Home from "../../pages/Home";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
`

const Main = () => {
    return (
        <Container>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Container>
    );
};

export default Main;