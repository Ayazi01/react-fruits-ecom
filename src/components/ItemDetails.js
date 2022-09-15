import react from "react";
import { items } from "../data";
import ListingGrid from "./ListingGrid";
import {ListItems} from "./ListingGrid"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { sellers } from "../data";
import styled from 'styled-components'



const ItemDetails = () => {
    
    const {itemId} = useParams();
const item = Object.values(items).filter(i=>{
    return itemId === i.id;
})[0];
console.log(item.quantity)
 const sellerShop = Object.values(sellers).filter(j=>{
    return item.sellerId === j.id
    
}) [0]
    return (  
       <Container className="listContainer">
            <div>
                <img src={item.imageSrc}style={{width: 500, height: 500,borderRadius:"10px", marginTop:"70px" }}/>
             </div>
            <SubContainer>
        <h1>{item.name}</h1>
        <p style={{fontStyle:"italic", marginTop:"-25px", color:"grey", marginBottom:"70px"}}>{item.latinName}</p>
        <p style={{width: "400px" }}>{item.description}</p>
        <p>product of <strong>{item.countryOfOrigin}</strong></p>
        {item.quantity ?
         <Button>${item.price} - Buy Now</Button>:
         <h3>Out of stock</h3> }
         <Details>
         <img src={sellerShop.avatarSrc}style={{width: 50, height: 50,borderRadius:"10px", borderRadius:"50%"}}/>sold by: <strong>{sellerShop.storeName}, by {item.sellerId}</strong>
         </Details>
         </SubContainer>
    </Container>
    
        
        )
   
}

export default ItemDetails;


const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
/* grid-template-rows: 300px 300px 300px; */

`

const SubContainer = styled.div`
margin-top: 50px;
`
const Button = styled.button`
color: white;
background-color: blue;
padding:20px;
border-radius:10px;
margin-right:100px;
margin-top: 40px;
`

const Details = styled.div`

margin-bottom:-100px ;
margin-top: 100px;
`