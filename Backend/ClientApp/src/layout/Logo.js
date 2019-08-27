import styled, { keyframes } from 'styled-components/macro'
import React from "react";
import {Link} from "react-router-dom";
import LaunchLogo from '../static/images/launch.svg';


const spin = keyframes`
  0% {
   	transform: scale(1);
  }
  100% {
    transform: scale(1.1);;
  }
`;

const LogoLink = styled(Link)`
    display: inline-block;
    margin-right: 1.94444rem;
    cursor: pointer;
    @media (max-width: 55.5rem) {
    	    margin-right: 0;
    }
`;


const LogoBg = styled.div`
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-size: contain;
    background-image: url(${LaunchLogo});
    
    width: 1.75rem;
    height: 1.75rem;
    background-position: center center;
    margin-right: 15px;
`;


export const Logo = () =>(
	<LogoLink to={"/"} onClick={(e) => e.preventDefault()}>
		<LogoBg/>
		<span style={{color: "#936BFB", verticalAlign: "middle"}}>Manager</span>
	</LogoLink>
);


