import styled  from 'styled-components/macro'

export const CheckboxWrapper = styled.div`
	margin: 6px 5px 5px 5px;
	border-color: currentColor;
	padding: 0 !important;
	display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    height: 32px;
    max-width: 100%;
    vertical-align: top;
`;

export const Checkbox = styled.input`
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
