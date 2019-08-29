import styled from 'styled-components/macro'
import {Link} from "react-router-dom";

export const SResourceControls = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   margin-top: .5em;
   margin-bottom: .5em;
`;
export const SStartWrapper  = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
`;

export const SEndWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
`;

export const SButton = styled(Link)`
    border-width: 0;
    border-style: solid;
    border-radius: 16px;
    height: 32px;
    min-width: 72px;
    padding: 0 14px 0;
    font-size: 15px;
    font-weight: 700;
    line-height: 0;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    overflow: visible;
    margin: 0;
    white-space: nowrap;
    text-transform: none;
    vertical-align: top;
    transition: background 130ms ease-out, border-color 130ms ease-out, color 130ms ease-out, box-shadow 130ms ease-out;
    text-decoration: none;
    font-family: adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    cursor: pointer;
    color: #dcddde;
    background-color: #149E83;
    :hover{
      background-color: #157d64;
    }
`;
export const SButtonLabel = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
