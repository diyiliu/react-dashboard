import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({theme}) => theme.colorContrastLow};
  cursor: pointer;
  background-color: ${({theme}) => theme.primary};
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${({theme}) => theme.secondary};
  }
`

const PropertyText = styled.div`
  width: ${props => props.width + '%'};
  display: flex;
  align-items: center;
  position: relative;
`
const Text = styled.h1`
  width: ${props => props.width ? props.width + '%' : 'auto'};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({theme}) => theme.textColor};
`
const SubTitle = styled(Text)`
  position: absolute;
  left: 0;
  top: 1.2rem;
  font-size: 0.6rem;
  color: #B2BFE1;
`

const StatusIndicator = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-left: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Deposit = ({data, title}) => {
    const address = title[0];
    address.formatter = (data) => {
        return <PropertyText key={data.id + address.name} width={address.width}>
            <Text>{data.city}</Text>
            <SubTitle>{data.street}</SubTitle>
        </PropertyText>;
    }


    const status = title[4];
    status.formatter = (data) => {
        return <PropertyText key={data.id + status.name} width={status.width}>
            <Text>{data.message}</Text>
            {
                (() => {
                    let color;
                    switch (data.level) {
                        case 1: color = '#F17E7E'; break;
                        case 2: color = '#FFD056'; break;
                        case 3: color = '#75C382'; break;
                        default: color = '#AAA5A5'; break;
                    }
                    return <StatusIndicator color={color}/>
                })()
            }
        </PropertyText>;
    }

    return (
        <Container>
            {
                title.map(t => {
                    return t.formatter ? t.formatter(data, t.width) : <Text key={data.id + t.name} width={t.width}>{data[t.name]}</Text>
                })
            }
        </Container>
    );
};

export default Deposit;
