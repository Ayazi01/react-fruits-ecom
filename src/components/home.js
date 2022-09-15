import React from "react";
import styled from 'styled-components'
import ListingGrid from "./ListingGrid.js";
import ItemDetails from "./ItemDetails.js";

const Home = ()=>{
    return ( <div className="home">
            <div className="paragraphhome">
            Fruit emporium sells the finest fruits from this world and beyond.
            </div>
            <br></br>
            <br></br>
            <strong>Browse items:</strong>
            <Container>
            <ListingGrid/>
            </Container>
</div>
)}
export default Home

const Container = styled.div`
display:grid;
grid-template-columns: 100px 100px 100px;
`