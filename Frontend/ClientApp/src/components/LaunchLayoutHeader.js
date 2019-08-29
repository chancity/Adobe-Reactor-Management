import {maskStr} from "../pages/utils";
import React from "react";
import styled from "styled-components/macro";
import {ReactComponent as WebSvg} from "../static/images/layout/platform-web.svg";
import {ReactComponent as MobileSvg} from "../static/images/layout/platform-mobile.svg";
import {ReactComponent as ChevronRightSvg} from "../static/images/layout/chevron-right.svg";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px !important;
`;

const svgStyle = {
    width: '48px',
    height: '48px',
    marginRight: '8px'
};
const Title1 = styled.h1`
    display: inline-flex;
    text-align: left;
    width: 100%;
    color: currentColor;
    font-size: 28px;
    font-weight: 300;
    line-height: 1.3;
    font-style: normal;
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 0;
    transition: color .25s;
    cursor: default;
    :hover{
      color: #dcddde;
    }
`;

const Title2 = styled.h2`
    display: inline-flex;
    text-align: left;
    width: 100%;
    color: currentColor;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0;
    transition: color .25s;
    cursor: pointer;
    :hover{
      color: #dcddde;
    }
`;
const SSpanWrapper = styled.span`
    display: flex !important;
    min-width: 0;
    min-height: 0;
    align-content: center;
    position: relative;
`;

const ChevronRightStyles = {
    position: 'absolute',
    top: 'calc(50% - 3px)',
    right: '-19px',
    width: '6px',
    height: '8px',
    transform: 'scale(1)',
    opacity: '.5'
};



export const LaunchLayoutHeader = ({companyName, companyId, propertyName, propertyPlatform}) => (
    <HeaderWrapper>
        <Title2>
            <SSpanWrapper>
                <Link to={`/companies/${companyId}/properties`}>
                    {maskStr(companyName || "")}
                </Link>
                <ChevronRightSvg style={ChevronRightStyles}/>
            </SSpanWrapper>
        </Title2>
        {propertyName && <Title1>
            <SSpanWrapper>
                {propertyPlatform === 'web' ?
                    <WebSvg style={svgStyle}/>
                    :
                    <MobileSvg style={svgStyle}/>}
                <span style={{alignSelf: 'flex-end'}}>
					  {maskStr(propertyName || "")}
				</span>
            </SSpanWrapper>

        </Title1>}
    </HeaderWrapper>
);
