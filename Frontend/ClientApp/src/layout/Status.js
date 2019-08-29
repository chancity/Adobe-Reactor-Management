import styled  from 'styled-components/macro'

const enabledColor =  "rgb(38, 128, 235);";
const disabledColor = "rgb(230, 134, 25)";
export const Status = styled.div`
	height: auto;
    line-height: inherit;
	font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    :before {
    	content: '';
	    display: inline-block;
	    width: 8px;
	    height: 8px;
	    border-radius: 50%;
	    margin: 0 12px 0 0;
	    background-color: ${p => p.enabled ? enabledColor : disabledColor}
    }
    :after {
    	content: '${p => p.enabled ? "Enabled" : "Disabled"}';
    }
`;
