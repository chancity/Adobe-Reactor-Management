import styled  from 'styled-components/macro'
import { ReactComponent as CheckSvg } from '../static/images/layout/check.svg';
import React from "react";



const SCheckboxInput = styled.input`
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    position: absolute;
    top: 0;
    left: -8px;
    width: calc(100% + 16px);
    height: 100%;
    opacity: .0001;
    z-index: 1;
    cursor: pointer;
`;
const SCheckbox = styled.span`
	border-color: currentColor;
    background-color: #dcddde;
    position: relative;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 2px;
    border-width: 1.5px;
    border-style: solid;
    transition: border 130ms ease-in-out, box-shadow 130ms ease-in-out;
    
    ${p => p.checked && `
         border-color: #936BFB;
         border-width: 7px;
    `}
`;

const SCheckSvg = styled(CheckSvg)`
	height: 10px;
	width: 10px;
	position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    opacity: 0;
    transform: scale(0);
    transition: opacity 130ms ease-in-out, transform 130ms ease-in-out;
    display: inline-block;
    color: inherit;
    fill: #dcddde;
    pointer-events: none;
    
    ${p => p.checked && `
        transform: scale(1);
        opacity: 1;
    `}
`;

const SCheckboxWrapper = styled.div`
	margin: 6px 5px 5px 5px;
	border-color: rgb(142, 142, 142);
	padding: 0 !important;
	display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    height: 32px;
    max-width: 100%;
    vertical-align: top;
    
    
    :hover {
	    ${SCheckbox}{
	        ${p => !p.checked && `
		        border-color: rgb(110, 110, 110);
		    `}
	    }
    }
`;

export const Checkbox = () => {
	const [checked, setChecked] = React.useState(false);
	const toggle= () => setChecked(!checked);

	return (
	<SCheckboxWrapper onClick={toggle} checked={checked}>
		<SCheckboxInput/>
		<SCheckbox checked={checked}>
			<SCheckSvg checked={checked}/>
		</SCheckbox>
	</SCheckboxWrapper>
	)
}
