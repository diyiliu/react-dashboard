import React from 'react';
import styled from "styled-components";
import Image from '../../assets/images/profile1.png';

const Container = styled.div`
  margin-top: 5rem;
`

const ProfileImg = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({theme}) => theme.textColor};
  margin: 1rem 0;
`

const Profile = () => {
    return (
        <Container>
            <ProfileImg>
                <img src={Image} alt="profile"/>
            </ProfileImg>
            <ProfileName>Scott Grant</ProfileName>
        </Container>
    );
};

export default Profile;
