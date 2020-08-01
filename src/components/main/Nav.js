import React from 'react';
import styled from "styled-components";
import Image from '../../assets/images/profile1.png';

const Container = styled.div`
  height: 4rem;
  padding: 0 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ProfileImg = styled.div`
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const MessageIcon = styled.span`
  margin: 0 0.5rem;
  color: ${({theme}) => theme.colorGray};
  font-size: 1.5rem;
  cursor: pointer;
`

const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"/>
            <ProfileImg>
                <img src={Image} alt="profile"/>
            </ProfileImg>
        </Container>
    );
};

export default Nav;
