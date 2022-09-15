import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Header = ()=>{
    return (
        <HeaderStyled className="header">
        <h1 className="logo">Fruit Emporium</h1>
        <Styledhome>
            <ItemStyled to="/" style={isActive => ({
    color: isActive ? "green" : "blue"
  })}> Home</ItemStyled>
        <ItemStyled to="/about" style={isActive => ({
    color: isActive ? "green" : "blue"
  })}> About</ItemStyled>
        </Styledhome>
        
        </HeaderStyled>
    )
}


export default Header
const HeaderStyled = styled.div`
overflow: hidden;
`

const Styledhome = styled.div`
float: right;
margin-right: 150px;
margin-top: -30px;
`

const ItemStyled = styled(NavLink)`

text-decoration: none;
margin-left: 10px;
color: darkblue;
&:active { background-color: red;

    text-decoration: underline;
}

`