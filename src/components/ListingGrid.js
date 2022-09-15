import React from "react";
import {items} from "../data.js"
import styled from 'styled-components'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const ListItems = Object.values(items).map(item =>
<div>
    <Link to={`/items/${item.id}`} key={`item-${item.id}`} style={{textDecoration:"none"}}>
    <div className="listContainer">
    
        <img src={item.imageSrc} style={{width: 200, height: 200,borderRadius:"10px" }}/>
        <div style={{textAlign:"center", marginLeft:"-60px" }}>
        <p >{item.name}</p>
        <p >{item.latinName}</p>
        </div>
    </div>
    </Link>
    </div>
)

const ListingGrid = () => {
    
    // console.log(Object.values(items))
    
    
return (<Container>
   
        {ListItems}
    </Container>)
   
}


export default ListingGrid;

const Container = styled.div`
display: grid;
grid-template-columns: 300px 300px 300px;
grid-template-rows: 300px 300px 300px;
margin: 20px 300px;
text-decoration: none;
background-color: grey;
/* grid-auto-flow: row
; */

`



