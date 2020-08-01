import React from 'react';
import styled from "styled-components";
import Deposit from "./Deposit";
import ShowAllBtn from "./ShowAllBtn";

const Container = styled.div`
  margin-bottom: 4rem;
`

const Title = styled.h1`
  color: ${({theme}) => theme.header};
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`

const TitleCount = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({theme}) => theme.header};
  color: ${({theme}) => theme.headerNumber};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  margin-left: 2rem;
`
const SortingBar = styled.div`
  background-color: ${({theme}) => theme.secondary};
`

const Property = styled.h1`
  display: inline-block;
  color: ${({theme}) => theme.textColor};
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  width: ${props => props.width + '%'};
`

const Deposits = ({title, count, data}) => {
    const titles = [
        {label: "address", name: "city", width: 30},
        {label: "date", name: "date", width: 20},
        {label: "rent", name: "rent", width: 10},
        {label: "deposit", name: "account", width: 15},
        {label: "status", name: "message", width: 25},
    ];
    return (
        <Container>
            <Title>{title}<TitleCount>{count}</TitleCount></Title>
            <SortingBar>
                {
                    titles.map((t, index) => {
                        return <Property key={index} width={t.width}>{t.label}</Property>
                    })
                }
            </SortingBar>
            {
                data.map(deposit => {
                    return <Deposit key={deposit.id} data={deposit} title={titles}/>
                })
            }
            <ShowAllBtn title={title}/>
        </Container>
    );
};

export default Deposits;
