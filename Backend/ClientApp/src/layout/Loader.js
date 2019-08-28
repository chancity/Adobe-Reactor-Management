import styled from "styled-components/macro";
import {keyframes} from "styled-components/macro";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
	display: flex;
	align-content: center;
    justify-content: center;
	width: 100%;
	height: 300px;
`;

export const Loader = styled.div`
    display: flex;
    margin: 0;
	border-top: 2px solid  #936BFB;
	border-right: 2px solid #149E83;
	border-bottom: 2px solid #936BFB;
	border-left: 2px solid #149E83;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	align-self: center;
	animation: ${rotate} .25s  linear infinite;
`;
