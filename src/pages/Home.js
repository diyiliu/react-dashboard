import React from 'react';
import styled from "styled-components";
import Toolbar from "../components/main/toolbar/Toolbar";
import Deposits from "../components/main/deposit/Deposits";
import DepositData from "../deposits.json";

const Content = styled.div`
  padding: 0 4rem;
`

const Home = () => {
    return (
        <div>
            <Toolbar />
            <Content>
                <Deposits title="active deposits" count="2" data={DepositData.active} />
                <Deposits title="closed deposits" count="8"  data={DepositData.closed} />
            </Content>
        </div>
    );
};

export default Home;
