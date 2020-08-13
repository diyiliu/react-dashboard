import React from 'react';
import styled from "styled-components";
import MenuItem from "./MenuItem";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Home" icon="home" link="/"/>
            <MenuItem title="Dashboard" icon="file-multiple" link="/dashboard"/>
            {/*<MenuItem title="Offers" icon="gift" link="/dashboard"/>*/}
            {/*<MenuItem title="Payments" icon="bank" link="/dashboard" />*/}
            {/*<MenuItem title="Settings" icon="cog" link="/dashboard"/>*/}
        </Container>
    );
};

export default Menu;
