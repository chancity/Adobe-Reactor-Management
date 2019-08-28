import styled, { keyframes } from 'styled-components/macro'
import {Link} from "react-router-dom";

const fadeIn = keyframes`
  0% {
   	background-color: rgba(0,0,0,.1);
  }
  100% {
    background-color: inherit;
  }
`;

export const Table = styled.table`
	width: 100%;
	text-align: left;
	border-spacing: 0;
	box-sizing: border-box;
	@media (max-width: 62.5em){
		font-size: 12px;
		td, th{
			padding-left: .5em;
		}
		>thead > tr > th {
		    padding-top:  .5em;
		    padding-bottom:  .5em;
	    }
	    > tbody > tr > td {
		    padding-top:  .5em;
		    padding-bottom:  .5em;
	    }
	}
	>thead > tr > th {
	    box-sizing: border-box;
	    text-align: left;
	    font-size: 11px;
	    font-weight: 700;
	    line-height: 1.3;
	    min-height: 12px;
	    letter-spacing: 0.06em;
	    text-transform: uppercase;
	    padding: 10px 16px;
	    transition: color 130ms ease-in-out;
	    cursor: default;
	    outline: 0;
	    border-radius: 0;
	   	border-bottom: #292b2f 2px solid;
    }
    > tbody > tr > td {
	    box-sizing: border-box;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 1.5;
	    min-height: 20px;
        word-wrap: break-word !important;
     	padding: 15px 16px 14px 16px;
        border-top: #292b2f 1px solid;
    }
	>tbody>tr:first-of-type>td {
	    border-top: unset;
    }
    > tbody > tr {
       animation:  .25s ${fadeIn}  ease-in-out;   
    }
    tr{
        margin: 0!important;
    }

    >tbody>tr{  
    	cursor: pointer;
    	:hover {
    		background-color: rgba(20,20,20,0.1);
    	}	
    }
`;
export const NavLink = styled(Link)`
	transition: .2s;
	color: ${props => props.color || "rgb(147,107,251)"};
	cursor:pointer;
	:hover{
		color: rgb(91, 60, 171) !important;
		text-decoration: underline;
	}
`;
