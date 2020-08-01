import React from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import Toolbar from "./toolbar/Toolbar";
import Deposits from "./deposit/Deposits";
import DepositData from '../../deposits.json'

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
`

const Content = styled.div`
  padding: 0 4rem;
`

const Main = () => {
    return (
        <Container>
            <Nav/>
            <Toolbar />
            <Content>
                <Deposits title="active deposits" count="2" data={DepositData.active} />
                <Deposits title="closed deposits" count="8"  data={DepositData.closed} />
            </Content>
        </Container>
    );
};

export default Main;